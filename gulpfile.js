const { src, dest, series, parallel, watch } = require('gulp');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS    = require('gulp-clean-css');
const concat      = require('gulp-concat');
const terser      = require('gulp-terser');
const rename      = require('gulp-rename');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const fs          = require('fs');
const path        = require('path');

function styles() {
  return src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(dest('.'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
    'js/translations.js',
    'js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(terser())
    .pipe(dest('.'));
}

function html() {
  return src('src/pages/**/*.html', { base: 'src/pages' })
    .pipe(fileInclude({
      prefix: '@@',
      basepath: 'src'
    }))
    .pipe(dest('.'));
}

// Auto-generates sitemap.xml from built HTML files.
// Pairs EN (root) ↔ UA (/ua/...) by mirrored path for hreflang.
// TODO: when /blog/slug/ is added, extend pattern filter / priority rules here.
function sitemap(cb) {
  const SITE = 'https://sirio.agency';
  const ROOT = path.resolve(__dirname);

  function collect(dir, urlPrefix) {
    const out = [];
    if (!fs.existsSync(dir)) return out;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (['node_modules', '.git', 'src', 'scss', 'js', 'images', 'functions', '.idea'].includes(entry.name)) continue;
        out.push(...collect(path.join(dir, entry.name), urlPrefix + entry.name + '/'));
      } else if (entry.name === 'index.html') {
        const file = path.join(dir, entry.name);
        const lastmod = fs.statSync(file).mtime.toISOString().slice(0, 10);
        out.push({ loc: SITE + urlPrefix, lastmod, file });
      }
    }
    return out;
  }

  const enPages = collect(ROOT, '/').filter(p => !p.loc.startsWith(SITE + '/ua'));
  const uaPages = collect(path.join(ROOT, 'ua'), '/ua/');

  function pairFor(loc) {
    if (loc === SITE + '/') return SITE + '/ua/';
    if (loc === SITE + '/ua/') return SITE + '/';
    if (loc.startsWith(SITE + '/ua/')) return SITE + loc.slice((SITE + '/ua').length);
    return SITE + '/ua' + loc.slice(SITE.length);
  }

  const all = [...enPages, ...uaPages];
  const enLocs = new Set(enPages.map(p => p.loc));
  const uaLocs = new Set(uaPages.map(p => p.loc));

  const urls = all.map(p => {
    const isHome = p.loc === SITE + '/' || p.loc === SITE + '/ua/';
    const priority = isHome ? (p.loc === SITE + '/' ? '1.0' : '0.9') : '0.8';
    const pair = pairFor(p.loc);
    const hasPair = p.loc.startsWith(SITE + '/ua/') ? enLocs.has(pair) : uaLocs.has(pair);

    let alternates = '';
    if (hasPair) {
      const enLoc = p.loc.startsWith(SITE + '/ua/') ? pair : p.loc;
      const uaLoc = p.loc.startsWith(SITE + '/ua/') ? p.loc : pair;
      alternates =
        `\n    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}"/>` +
        `\n    <xhtml:link rel="alternate" hreflang="uk" href="${uaLoc}"/>` +
        `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${enLoc}"/>`;
    }

    return `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>${alternates}
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
  cb();
}

function reload(cb) {
  browserSync.reload();
  cb();
}

function serve(cb) {
  browserSync.init({
    server: {
      baseDir: '.',
      // Serve `/foo/` when URL is `/foo` (mimics Cloudflare Pages behavior)
      serveStaticOptions: { extensions: ['html'] }
    },
    port: 8080,
    open: false,
    notify: false,
    ghostMode: false
  });
  cb();
}

function watchFiles() {
  watch('scss/**/*.scss', styles);
  watch('js/**/*.js', series(scripts, reload));
  watch('src/**/*.html', series(html, sitemap, reload));
}

exports.styles   = styles;
exports.scripts  = scripts;
exports.html     = html;
exports.sitemap  = sitemap;
exports.serve    = serve;
exports.watch    = watchFiles;
exports.default  = series(styles, scripts, html, sitemap);
exports.dev      = series(styles, scripts, html, sitemap, parallel(serve, watchFiles));
