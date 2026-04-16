const { src, dest, series, watch } = require('gulp');
const sass       = require('gulp-sass')(require('sass'));
const cleanCSS   = require('gulp-clean-css');
const concat     = require('gulp-concat');
const terser     = require('gulp-terser');
const rename     = require('gulp-rename');

function styles() {
  return src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(dest('.'));
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

function watchFiles() {
  watch('scss/**/*.scss', styles);
  watch('js/**/*.js', scripts);
}

exports.styles  = styles;
exports.scripts = scripts;
exports.watch   = watchFiles;
exports.default = series(styles, scripts);
