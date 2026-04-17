// translations.js
window.i18n = {
  en: {
    meta: {
      title: 'Sirio — AI Automation Agency',
      description: 'AI automation for small and medium businesses across Europe. Chatbots, process automation, AI content pipelines. From audit to live system in 2–4 weeks. Fixed price, measurable results.'
    },
    nav: {
      services: 'Services',
      cases: 'Cases',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Free Audit',
      // Stubs for Phase 2 pages (not used in Phase 1 nav, only footer)
      about: 'About',
      blog: 'Blog',
      integrations: 'AI Integrations',
      consulting: 'AI Consulting'
    },
    breadcrumb: {
      home: 'Home'
    },
    hero: {
      chip: 'Sirio · AI Automation Agency',
      h1_1: 'Your business on',
      h1_em: 'autopilot',
      h1_2: '— no developers needed',
      sub: 'We implement AI automation for small and medium businesses across Europe and Ukraine. You get a working system in 2–4 weeks — fixed price, zero guesswork, measurable results.',
      cta_primary: 'Get a free audit',
      cta_secondary: 'See our cases',
      trust1: 'Start in 2–4 weeks',
      trust2: 'Fixed price',
      trust3: 'Post-launch support'
    },
    stats: [
      { num: '15–20h', label: 'saved per week per client on average' },
      { num: '2–4 wk', label: 'from signed contract to live system' },
      { num: '1–3 mo', label: 'typical payback period' }
    ],
    services: {
      label: 'What we do',
      title: 'Our services',
      sub: 'Each service has a fixed scope, a clear deliverable, and a defined timeline — no surprises.',
      items: [
        { tag: 'Best first step', tagClass: 'teal', name: 'AI Business Audit', desc: 'We map your workflows, find the 3–5 processes where AI saves the most time and money, and hand you a prioritised action plan with ROI estimates. You get a document — not a vague "strategy call".', price: '€300–500', cycle: '/ one-time', icon: 'search' },
        { tag: 'Most requested', tagClass: 'blue', name: 'Chatbots & AI Assistants', desc: 'Custom bots that answer FAQs, qualify leads, book appointments, or handle HR requests — 24/7, in any language. Built for Telegram, Viber, WhatsApp, or embedded on your website. Average client saves 15–20 hours/week of manual replies.', price: '€800–2 500', cycle: '/ project', icon: 'bot' },
        { tag: 'Most requested', tagClass: 'teal', name: 'Process Automation', desc: 'We connect your tools (CRM, email, spreadsheets, invoicing, warehouse) and automate the repetitive steps between them using Make, n8n, or Zapier. No code needed on your side. Typical result: 80% reduction in manual data entry.', price: '€600–2 000', cycle: '/ project', icon: 'zap' },
        { tag: 'Ongoing', tagClass: 'amber', name: 'AI Content & Marketing', desc: 'We set up an AI pipeline that generates on-brand social posts, SEO articles, email sequences, and product descriptions — reviewed and approved by you before publishing. Clients produce 5× more content at ¼ of the cost.', price: '€500–1 500', cycle: '/ month', icon: 'pen' },
        { tag: 'Ongoing', tagClass: 'coral', name: 'Support & Retainer', desc: 'After launch, your AI systems need care — model updates, prompt improvements, new integrations, and monthly performance reports. We act as your dedicated AI team without the cost of a full-time hire.', price: '€200–700', cycle: '/ month', icon: 'shield' },
        { tag: 'Training', tagClass: 'green', name: 'Corporate Trainings', desc: 'Half-day or full-day workshops where your team learns to actually use AI tools in their daily work — not just theory. Each session is tailored to your industry and tools. Participants leave with working prompts and automations they built themselves.', price: '€300–1 000', cycle: '/ session', icon: 'book' }
      ]
    },
    cases: {
      label: 'Proven results',
      title: 'Real client outcomes',
      sub: 'Each case is a concrete problem and a measurable result',
      items: [
        { industry: 'Law firm', title: 'Automating standard contract preparation', metrics: [{ val: '−60%', lbl: 'time on documents' }, { val: '45→12 min', lbl: 'per contract' }] },
        { industry: 'Medical clinic', title: 'Telegram bot for booking and FAQ', metrics: [{ val: '−70%', lbl: 'incoming calls' }, { val: '+40%', lbl: 'appointments' }] },
        { industry: 'E-commerce', title: 'Automated order processing without a manager', metrics: [{ val: '200/day', lbl: 'auto-processed' }, { val: '0 errors', lbl: 'in transfers' }] },
        { industry: 'Restaurant', title: 'Booking confirmation system via bot', metrics: [{ val: '−45%', lbl: 'no-shows' }, { val: '+15%', lbl: 'revenue' }] }
      ]
    },
    process: {
      label: 'How it works',
      title: '4 steps to result',
      steps: [
        { num: '01', numBg: '#EEEDFE', numColor: '#3C3489', name: 'Free 30-min discovery call', desc: 'We listen, ask the right questions, and tell you honestly whether AI can help and where. No pitch, no pressure. You leave with clarity.', price: '€0' },
        { num: '02', numBg: '#E1F5EE', numColor: '#085041', name: 'AI audit & roadmap', desc: 'We audit your workflows in depth, identify 3–5 automation opportunities ranked by ROI, and deliver a written plan you can act on — with or without us.', price: '€300–500' },
        { num: '03', numBg: '#E1F5EE', numColor: '#085041', name: 'Turnkey implementation', desc: 'We build, integrate, test, and document everything. Your team gets hands-on training. Go-live in 2–4 weeks, fixed price agreed upfront.', price: 'from €800' },
        { num: '04', numBg: '#FAEEDA', numColor: '#633806', name: 'Ongoing support & growth', desc: 'AI systems need tuning over time. We monitor performance, update models, add new automations, and report results monthly. Think of us as your part-time AI team.', price: 'from €200/mo' }
      ]
    },
    pricing: {
      label: 'Pricing',
      title: 'Three packages — clear terms',
      sub: 'Fixed price agreed before we start. No hourly billing, no surprise invoices.',
      items: [
        {
          name: 'AI Start', price: '€800', cycle: 'one-time · delivered in 1–2 weeks', badge: null, featured: false,
          feats: ['Full AI business audit', '1 automated process (end-to-end)', 'Team training session (1h)', 'Documentation & handover', 'Typical ROI: payback in 1–2 months'],
          note: '+ €150/mo optional support',
          cta: 'Get started'
        },
        {
          name: 'AI Pro', price: '€2 200', cycle: 'one-time + 3 months support included', badge: 'Most popular', featured: true,
          feats: ['AI audit + priority roadmap', 'Chatbot or AI assistant (full build)', '3 automated processes', 'Team training (2h, hands-on)', '3 months of support & updates included', 'Typical ROI: payback in 2–3 months'],
          note: '€300/mo after 3 months',
          cta: 'Get started'
        },
        {
          name: 'AI Max', price: '€4 500', cycle: 'one-time + 6 months support included', badge: null, featured: false,
          feats: ['Everything in AI Pro', 'Unlimited process automations', 'AI content pipeline (3 months)', 'Full-day corporate training', 'Priority support for 6 months', 'Monthly strategy & reporting call'],
          note: '€500/mo after 6 months',
          cta: 'Get started'
        }
      ]
    },
    cta: {
      title: 'Not sure where to start? Let\'s figure it out together.',
      sub: 'Book a free 30-minute call. We\'ll look at your processes and tell you honestly what AI can — and can\'t — do for your business.',
      placeholder: 'your@email.com',
      phone_placeholder: '+31 / +38 ...',
      email_label: 'Email address',
      phone_label: 'Phone number',
      btn: 'Book free call'
    },
    contact: {
      label: 'Where to find us',
      title: 'Two offices, one team',
      offices: [
        {
          flag: '🇳🇱',
          city: 'Eindhoven',
          country: 'The Netherlands',
          address: 'Eindhoven, The Netherlands',
          email: 'hello@sirio.agency',
          phone: '+31 40 000 0000'
        },
        {
          flag: '🇺🇦',
          city: 'Lviv',
          country: 'Ukraine',
          address: 'Lviv, Ukraine',
          email: 'hello@sirio.agency',
          phone: '+38 032 000 0000'
        }
      ]
    },
    faq: {
      title: 'Frequently asked questions:',
      items: [
        { q: 'Do I need to know about how to code?', a: 'No, we take care of everything for you, it\'s a hands-off approach so you can focus on what you\'re good at.' },
        { q: 'Do I get a say in what you will automate?', a: 'Yes, in the discovery call we find out how your business works and how we can best implement AI. You then decide how you wish for us to proceed, with our advice.' },
        { q: 'Will AI automation replace my sales team?', a: 'No — AI doesn\'t replace people, it supports them by handling repetitive tasks like lead scoring, follow-ups, and scheduling. This frees up sales reps to focus on building relationships and closing deals.' },
        { q: 'How does AI actually help generate more sales?', a: 'AI improves sales by:<ul><li>Personalizing outreach at scale (emails, messages, ads)</li><li>Responding instantly to leads (chatbots, automations)</li><li>Analyzing sales data to highlight the best opportunities</li><li>Automating follow-ups so no prospect slips through the cracks</li></ul>' },
        { q: 'Is AI automation expensive?', a: 'Not necessarily. Many tools are subscription-based and scalable, meaning you pay only for what you need. In most cases, automation pays for itself by saving time, reducing human error, and increasing conversions.' },
        { q: 'Can AI integrate with my existing CRM and tools?', a: 'Yes — AI automations work with most popular CRMs and platforms like HubSpot, Salesforce, Zoho, Pipedrive, or even simple tools like Google Sheets, Slack, and email. Integration is often seamless through APIs or automation platforms (Zapier, Make, n8n).' },
        { q: 'How quickly can I see results with AI automation?', a: 'It depends on the process. Some automations (like chatbots or follow-up sequences) can deliver results within days, while larger systems (like full funnel automation or advanced analytics) may take a few weeks. Most businesses notice efficiency gains almost immediately.' }
      ]
    },
    footer: {
      note: 'AI Automation Agency · sirio.agency',
      columns: {
        company: {
          title: 'Company',
          about: 'About',
          blog: 'Blog',
          faq: 'FAQ',
          contact: 'Contact'
        },
        services: {
          title: 'Services',
          integrations: 'AI Integrations',
          consulting: 'AI Consulting',
          automation: 'Process Automation'
        },
        legal: {
          title: 'Legal',
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          cookies: 'Cookie Policy'
        }
      }
    }
  },

  ua: {
    meta: {
      title: 'Sirio — AI-автоматизація для бізнесу',
      description: 'AI-автоматизація для малого та середнього бізнесу. Чат-боти, автоматизація процесів, AI-контент конвеєр. Від аудиту до запуску за 2–4 тижні. Фіксована ціна, вимірюваний результат.'
    },
    nav: {
      services: 'Послуги',
      cases: 'Кейси',
      pricing: 'Ціни',
      faq: 'FAQ',
      contact: 'Контакти',
      cta: 'Безкоштовний аудит',
      // Stubs for Phase 2 pages (not used in Phase 1 nav, only footer)
      about: 'Про нас',
      blog: 'Блог',
      integrations: 'AI-інтеграції',
      consulting: 'AI-консалтинг'
    },
    breadcrumb: {
      home: 'Головна'
    },
    hero: {
      chip: 'Sirio · AI-автоматизація для бізнесу',
      h1_1: 'Ваш бізнес на',
      h1_em: 'автопілоті',
      h1_2: '— без програмістів',
      sub: 'Впроваджуємо AI-автоматизацію для малого та середнього бізнесу в Україні та Європі. Готова система за 2–4 тижні — фіксована ціна, жодних здогадок, вимірюваний результат.',
      cta_primary: 'Безкоштовний аудит',
      cta_secondary: 'Переглянути кейси',
      trust1: 'Старт за 2–4 тижні',
      trust2: 'Фіксована ціна',
      trust3: 'Підтримка після запуску'
    },
    stats: [
      { num: '15–20 год', label: 'економія на тиждень в середньому на клієнта' },
      { num: '2–4 тиж', label: 'від підписання договору до живої системи' },
      { num: '1–3 міс', label: 'типовий термін окупності' }
    ],
    services: {
      label: 'Що ми робимо',
      title: 'Послуги',
      sub: 'Кожна послуга — фіксований обсяг, конкретний результат і зрозумілі терміни. Без сюрпризів.',
      items: [
        { tag: 'Найкращий старт', tagClass: 'teal', name: 'AI-аудит бізнесу', desc: 'Аналізуємо ваші процеси, знаходимо 3–5 точок де AI заощаджує найбільше часу і грошей, і передаємо пріоритизований план з ROI-оцінками. Ви отримуєте документ — не абстрактні поради.', price: '€300–500', cycle: '/ разово', icon: 'search' },
        { tag: 'Найбільший попит', tagClass: 'blue', name: 'Чат-боти та AI-асистенти', desc: 'Боти що відповідають на питання, кваліфікують ліди, записують на прийом або обробляють HR-запити — 24/7, будь-якою мовою. Telegram, Viber, WhatsApp або сайт. Середній клієнт економить 15–20 год/тиждень ручних відповідей.', price: '€800–2 500', cycle: '/ проєкт', icon: 'bot' },
        { tag: 'Найбільший попит', tagClass: 'teal', name: 'Автоматизація процесів', desc: 'З\'єднуємо ваші інструменти (CRM, email, таблиці, склад, бухгалтерія) і автоматизуємо рутинні кроки між ними через Make, n8n або Zapier. Від вас — нічого крім доступу. Типовий результат: мінус 80% ручного введення даних.', price: '€600–2 000', cycle: '/ проєкт', icon: 'zap' },
        { tag: 'Щомісячно', tagClass: 'amber', name: 'AI-контент та маркетинг', desc: 'Налаштовуємо AI-конвеєр що генерує пости, SEO-статті, email-розсилки і описи товарів у вашому стилі — ви перевіряєте перед публікацією. Клієнти виробляють у 5 разів більше контенту за чверть колишніх витрат.', price: '€500–1 500', cycle: '/ міс', icon: 'pen' },
        { tag: 'Щомісячно', tagClass: 'coral', name: 'Підтримка та ретейнер', desc: 'Після запуску ваші AI-системи потребують догляду — оновлення моделей, покращення промптів, нові інтеграції і щомісячні звіти. Ми — ваша виділена AI-команда без витрат на штатного спеціаліста.', price: '€200–700', cycle: '/ міс', icon: 'shield' },
        { tag: 'Навчання', tagClass: 'green', name: 'Корпоративні тренінги', desc: 'Пів- або повний день, де ваша команда навчається реально використовувати AI-інструменти в щоденній роботі — не теорія. Кожна сесія адаптована під вашу галузь. Учасники йдуть з готовими промптами і автоматизаціями, які зробили самі.', price: '€300–1 000', cycle: '/ сесія', icon: 'book' }
      ]
    },
    cases: {
      label: 'Реальні результати',
      title: 'Кейси клієнтів',
      sub: 'Кожен кейс — конкретна задача і вимірюваний ефект',
      items: [
        { industry: 'Юридична фірма', title: 'Автоматизація підготовки стандартних договорів', metrics: [{ val: '−60%', lbl: 'час на документи' }, { val: '45→12 хв', lbl: 'на договір' }] },
        { industry: 'Медична клініка', title: 'Telegram-бот для запису та відповідей на питання', metrics: [{ val: '−70%', lbl: 'дзвінків' }, { val: '+40%', lbl: 'записів' }] },
        { industry: 'Інтернет-магазин', title: 'Автоматична обробка замовлень без менеджера', metrics: [{ val: '200/день', lbl: 'авто-обробка' }, { val: '0 помилок', lbl: 'у передачі' }] },
        { industry: 'Ресторан', title: 'Система підтвердження бронювань через бот', metrics: [{ val: '−45%', lbl: 'no-show' }, { val: '+15%', lbl: 'виручка' }] }
      ]
    },
    process: {
      label: 'Як ми працюємо',
      title: '4 кроки до результату',
      steps: [
        { num: '01', numBg: '#EEEDFE', numColor: '#3C3489', name: 'Безкоштовний 30-хв дзвінок', desc: 'Слухаємо, задаємо правильні питання і чесно говоримо чи допоможе AI і де саме. Без продажу, без тиску. Ви йдете з ясністю.', price: '€0' },
        { num: '02', numBg: '#E1F5EE', numColor: '#085041', name: 'AI-аудит та дорожня карта', desc: 'Детально аудуємо ваші процеси, знаходимо 3–5 можливостей для автоматизації у порядку ROI і передаємо письмовий план — яким можна користуватись з нами або без.', price: '€300–500' },
        { num: '03', numBg: '#E1F5EE', numColor: '#085041', name: 'Впровадження під ключ', desc: 'Будуємо, інтегруємо, тестуємо і документуємо все. Команда отримує практичне навчання. Запуск за 2–4 тижні, фіксована ціна узгоджена заздалегідь.', price: 'від €800' },
        { num: '04', numBg: '#FAEEDA', numColor: '#633806', name: 'Підтримка і розвиток', desc: 'AI-системи потребують налаштування з часом. Моніторимо результати, оновлюємо моделі, додаємо нові автоматизації і звітуємо щомісяця. Ваша AI-команда без штатної ставки.', price: 'від €200/міс' }
      ]
    },
    pricing: {
      label: 'Ціни',
      title: 'Три пакети — чіткі умови',
      sub: 'Фіксована ціна узгоджується до старту. Без погодинної оплати, без несподіваних рахунків.',
      items: [
        {
          name: 'AI Старт', price: '€800', cycle: 'разово · здача за 1–2 тижні', badge: null, featured: false,
          feats: ['Повний AI-аудит бізнесу', '1 автоматизований процес (під ключ)', 'Навчання команди (1 год, практично)', 'Документація і передача', 'Типовий ROI: окупність за 1–2 місяці'],
          note: '+ €150/міс підтримка (опція)',
          cta: 'Почати'
        },
        {
          name: 'AI Про', price: '€2 200', cycle: 'разово + 3 місяці підтримки включно', badge: 'Найпопулярніше', featured: true,
          feats: ['AI-аудит + пріоритетна дорожня карта', 'Чат-бот або AI-асистент (повна розробка)', '3 автоматизованих процеси', 'Навчання команди (2 год, hands-on)', '3 місяці підтримки і оновлень включно', 'Типовий ROI: окупність за 2–3 місяці'],
          note: '€300/міс після 3 місяців',
          cta: 'Обрати'
        },
        {
          name: 'AI Максимум', price: '€4 500', cycle: 'разово + 6 місяців підтримки включно', badge: null, featured: false,
          feats: ['Все з AI Про', 'Необмежена кількість автоматизацій', 'AI-контент конвеєр (3 місяці)', 'Повний день корпоративного тренінгу', 'Пріоритетна підтримка 6 місяців', 'Щомісячний стратегічний дзвінок і звіт'],
          note: '€500/міс після 6 місяців',
          cta: 'Обрати'
        }
      ]
    },
    cta: {
      title: 'Не знаєте з чого почати? Розберемось разом.',
      sub: 'Запишіться на безкоштовний 30-хвилинний дзвінок. Подивимось на ваші процеси і чесно скажемо що AI може — і чого не може — зробити для вашого бізнесу.',
      placeholder: 'ваш@email.com',
      phone_placeholder: '+38 ...',
      email_label: 'Електронна пошта',
      phone_label: 'Номер телефону',
      btn: 'Записатись на дзвінок'
    },
    contact: {
      label: 'Де нас знайти',
      title: 'Два офіси, одна команда',
      offices: [
        {
          flag: '🇳🇱',
          city: 'Ейндговен',
          country: 'Нідерланди',
          address: 'Eindhoven, The Netherlands',
          email: 'hello@sirio.agency',
          phone: '+31 40 000 0000'
        },
        {
          flag: '🇺🇦',
          city: 'Львів',
          country: 'Україна',
          address: 'Львів, Україна',
          email: 'hello@sirio.agency',
          phone: '+38 032 000 0000'
        }
      ]
    },
    faq: {
      title: 'Часті запитання:',
      items: [
        { q: 'Чи потрібно мені вміти програмувати?', a: 'Ні, ми беремо все на себе. Це підхід «під ключ» — ви фокусуєтесь на тому, що вмієте найкраще.' },
        { q: 'Чи можу я впливати на те, що ви будете автоматизувати?', a: 'Так, під час дзвінка-знайомства ми з\'ясовуємо як працює ваш бізнес і як найкраще впровадити AI. Потім ви вирішуєте, як рухатись далі — з нашими рекомендаціями.' },
        { q: 'AI-автоматизація замінить мій відділ продажів?', a: 'Ні — AI не замінює людей, а підтримує їх, беручи на себе рутинні задачі: скоринг лідів, фоловапи, планування. Це звільняє менеджерів для побудови стосунків і закриття угод.' },
        { q: 'Як AI реально допомагає генерувати більше продажів?', a: 'AI покращує продажі завдяки:<ul><li>Персоналізації комунікацій у масштабі (листи, повідомлення, реклама)</li><li>Миттєвій відповіді лідам (чат-боти, автоматизації)</li><li>Аналізу даних продажів для виявлення найкращих можливостей</li><li>Автоматизації фоловапів — жоден лід не загубиться</li></ul>' },
        { q: 'AI-автоматизація — це дорого?', a: 'Не обов\'язково. Багато інструментів працюють за підпискою і масштабуються — ви платите лише за те, що використовуєте. У більшості випадків автоматизація окупається за рахунок економії часу, зменшення помилок і зростання конверсій.' },
        { q: 'Чи може AI інтегруватись з моєю CRM та іншими інструментами?', a: 'Так — AI-автоматизації працюють з більшістю популярних CRM і платформ: HubSpot, Salesforce, Zoho, Pipedrive, а також з простими інструментами як Google Sheets, Slack і email. Інтеграція зазвичай безшовна через API або платформи автоматизації (Zapier, Make, n8n).' },
        { q: 'Як швидко я побачу результати від AI-автоматизації?', a: 'Залежить від процесу. Деякі автоматизації (як чат-боти або ланцюжки фоловапів) дають результат за дні, а більші системи (повна воронка або аналітика) — за кілька тижнів. Більшість бізнесів помічають зростання ефективності майже відразу.' }
      ]
    },
    footer: {
      note: 'AI-автоматизація для МСБ · sirio.agency',
      columns: {
        company: {
          title: 'Компанія',
          about: 'Про нас',
          blog: 'Блог',
          faq: 'FAQ',
          contact: 'Контакти'
        },
        services: {
          title: 'Послуги',
          integrations: 'AI-інтеграції',
          consulting: 'AI-консалтинг',
          automation: 'Автоматизація процесів'
        },
        legal: {
          title: 'Правова інформація',
          privacy: 'Політика конфіденційності',
          terms: 'Умови використання',
          cookies: 'Cookie політика'
        }
      }
    }
  }
};
