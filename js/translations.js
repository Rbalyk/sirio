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
      message_placeholder: 'How can we help? (optional)',
      email_label: 'Email address',
      phone_label: 'Phone number',
      message_label: 'Message',
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
          terms: 'Terms & Conditions',
          cookies: 'Cookie Policy'
        }
      },
      copyright: '&copy; <span id="current-year"></span> Sirio Agency. All rights reserved.'
    },

    pages: {
      contact: {
        breadcrumbCurrent: 'Contact Us',
        h1: 'Book Your Free AI Automation Audit',
        sub: '30-minute call. We will look at your processes and tell you honestly what AI can — and cannot — do for your business. No pitch, no pressure.'
      },
      privacy: {
        h1: 'Privacy Policy',
        meta: 'Effective Date: 18 April 2026 · Last Updated: 18 April 2026',
        disclaimer: 'This Privacy Policy is provided as a general template for informational purposes. For legally binding advice regarding your specific situation, consult with a qualified data-protection lawyer in your jurisdiction.'
      },
      terms: {
        h1: 'Terms & Conditions',
        meta: 'Effective Date: 18 April 2026 · Last Updated: 18 April 2026',
        partA: {
          h2: 'Part A — Terms of Use',
          intro: 'This part applies to every visitor of sirio.agency. By opening the site you accept these Terms of Use.',
          sections: [
            {
              h2: 'A.1 Introduction',
              p1: 'This part governs the use of the sirio.agency website and applies automatically whenever you open the site. It does not create a commercial relationship on its own.',
              p2: 'Operator: <strong>Sirio Agency</strong>, Lviv, Ukraine. For any question regarding these Terms, contact <a href="mailto:legal@sirio.agency">legal@sirio.agency</a> (fallback: <a href="mailto:privacy@sirio.agency">privacy@sirio.agency</a>).'
            },
            {
              h2: 'A.2 Acceptance of Terms',
              p1: 'By accessing or using sirio.agency you agree to these Terms. If you do not agree with any part of them, please stop using the site.'
            },
            {
              h2: 'A.3 Permitted Use',
              p1: 'You are welcome to browse our content and to submit inquiries through the Contact form for legitimate business purposes.',
              p2: 'You may not:',
              li1: 'scrape, crawl, or mirror the site using automated tools without prior written permission;',
              li2: 'reverse engineer, decompile, or attempt to extract source code or internal logic;',
              li3: 'collect personal data of our team or visitors through any automated means;',
              li4: 'attempt to disrupt, overload, or attack the infrastructure serving the site.'
            },
            {
              h2: 'A.4 Intellectual Property',
              p1: 'All content on the site — text, code, design, logo, and overall structure — is the property of Sirio Agency and is protected by copyright and related rights.',
              p2: 'You may not copy, republish, or reuse material from the site without our prior written permission. Limited exceptions apply under fair use: short quotations with attribution, research, and commentary.',
              p3: 'Third-party brand names and logos mentioned on the site (e.g. OpenAI, Anthropic, Slack, HubSpot, Salesforce, Cloudflare) are the property of their respective owners and are referenced for descriptive purposes only.'
            },
            {
              h2: 'A.5 Third-Party Links',
              p1: 'The site may contain links to third-party resources such as vendor documentation, product pages, or partner websites. We do not control those sites and are not responsible for their content, accuracy, or privacy practices. You follow external links at your own risk.'
            },
            {
              h2: 'A.6 Disclaimer of Warranties',
              p1: 'The site is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, express or implied. We do not guarantee uninterrupted operation, absence of errors, or absolute security. We aim for maximum uptime through Cloudflare and reasonable security measures, but we do not promise 100% availability.'
            }
          ]
        },
        partB: {
          h2: 'Part B — Terms of Service',
          intro: 'This part applies when you engage Sirio to deliver professional services. It is the baseline framework for the commercial relationship between us and our clients.',
          sections: [
            {
              h2: 'B.1 Scope',
              p1: 'Part B governs the relationship between Sirio and clients who engage us for services. Our services include AI integration, consulting, automation, and custom AI solutions.',
              p2: 'Each project is documented in a separate written <strong>Statement of Work (SoW)</strong>, which defines the specific scope, deliverables, timeline, and pricing. If there is any conflict between these Terms and an SoW signed by both parties, the <strong>SoW takes precedence</strong>.'
            },
            {
              h2: 'B.2 Services',
              p1: 'We deliver AI integrations, LLM consulting, chatbots, workflow automation, AI agents, and CRM integrations. Each engagement is scoped to a specific set of deliverables and a clear timeline, defined in the SoW before work begins.'
            },
            {
              h2: 'B.3 Engagement & Payment',
              p1: 'Payment terms are defined in each SoW. Typical structures:',
              li1: 'Fixed-price projects: 50% upfront, 50% on completion.',
              li2: 'Retainer engagements: monthly invoicing, payable within the period stated in the SoW.',
              p2: 'Invoices are issued in EUR or USD, as agreed per project. Payment terms longer than 30 days overdue may result in a pause on work and a late fee as stated in the SoW.'
            },
            {
              h2: 'B.4 Client Responsibilities',
              p1: 'To deliver on schedule, we rely on the client to:',
              li1: 'provide timely access to systems, data, and API credentials through a secure channel;',
              li2: 'designate a responsible point of contact for decisions and approvals;',
              li3: 'respond to milestones, reviews, and questions within five (5) business days.',
              p2: 'Delays caused by the client will result in a proportional shift of the project timeline.'
            },
            {
              h2: 'B.5 Intellectual Property & Deliverables',
              p1: 'Code, configurations, and documentation produced specifically for the client under an SoW transfer to the client upon full payment of the corresponding invoice.',
              p2: '<strong>Exceptions:</strong> our pre-existing tools, frameworks, templates, and reusable components remain our property. The client receives a perpetual, non-exclusive, royalty-free licence to use those components as embedded in the delivered work.',
              p3: 'Third-party tools and services (e.g. OpenAI API, Anthropic API, Cloudflare, Pinecone) have their own licences and terms. The client contracts directly with those vendors and is responsible for their usage and fees.'
            },
            {
              h2: 'B.6 Confidentiality',
              p1: 'Both parties agree to keep confidential any non-public commercial, technical, or business information received from the other party in connection with the engagement. This obligation applies for three (3) years after the end of the engagement.',
              p2: 'Confidentiality does not apply to information that is publicly available, independently developed without use of confidential information, or required to be disclosed by law.'
            },
            {
              h2: 'B.7 Warranties & Limitation of Liability',
              p1: 'We warrant that our services will be performed professionally, with reasonable skill and care, and in line with industry practice.',
              p2: 'We do not warrant any specific business outcome — such as a particular increase in revenue, defined cost savings, or a specific conversion rate — as these depend on factors outside our control.',
              p3: 'Our total liability under any engagement is limited to the <strong>fees paid for that specific project</strong> (or, for retainer engagements, the fees paid for the preceding three (3) months). We are not liable for indirect, consequential, or special damages, including lost profits, lost opportunities, or reputational harm.'
            },
            {
              h2: 'B.8 Data Processing & GDPR',
              p1: 'If, in the course of an engagement, we process personal data belonging to the client or its end-users, we enter into a separate Data Processing Agreement (DPA) that sets out roles, security measures, sub-processors, and data-subject rights in line with the EU GDPR.',
              p2: 'A standard DPA template is available on request at <a href="mailto:legal@sirio.agency">legal@sirio.agency</a>.'
            },
            {
              h2: 'B.9 Termination',
              p1: 'Either party may terminate the engagement by giving thirty (30) days\' written notice to the other party.',
              p2: 'Either party may terminate with immediate effect for material breach — including non-payment of an invoice more than sixty (60) days overdue, or a material breach of confidentiality.',
              p3: 'On termination, we invoice for all work completed up to the termination date and hand over the corresponding deliverables once that invoice is settled.'
            },
            {
              h2: 'B.10 Governing Law & Disputes',
              p1: 'These Terms and any engagement under them are governed by the law of Ukraine.',
              p2: 'The parties will first attempt to resolve any dispute through good-faith negotiation within thirty (30) days of a written notice of dispute.',
              p3: 'If no amicable resolution is reached: for international clients, disputes are referred to the International Commercial Arbitration Court at the Ukrainian Chamber of Commerce and Industry; for Ukrainian clients, disputes fall under the jurisdiction of the competent courts of Lviv, Ukraine.'
            }
          ]
        },
        general: {
          changes: {
            h2: 'Changes to These Terms',
            p1: 'We may update these Terms from time to time. The "Last Updated" date at the top of the page reflects the most recent revision. Continued use of the site or continued engagement after an update means you accept the updated Terms. Material changes will be highlighted through a notice on the site or, for active clients, by email.'
          },
          contact: {
            h2: 'Contact',
            p1: 'Legal queries: <a href="mailto:legal@sirio.agency">legal@sirio.agency</a> (fallback: <a href="mailto:privacy@sirio.agency">privacy@sirio.agency</a>).',
            p2: 'Business inquiries: <a href="/contact-us/">contact page</a>.'
          }
        },
        disclaimer: 'These Terms are provided as a general template for informational purposes. For contracts involving significant business value or specific legal risks, consult with a qualified commercial lawyer in your jurisdiction. Client-specific Statements of Work (SoW) take precedence over these general Terms.'
      },
      aiIntegrations: {
        breadcrumbCurrent: 'AI Integrations',
        hero: {
          chip: 'Sirio · AI Integration Services',
          h1: 'AI Integration Services for Mid-Market Companies',
          sub: 'LLM, chatbots, workflow automation, and AI agents — integrated with your existing CRM, messaging, and data. Production-grade systems in 4–12 weeks, not 6 months. Fixed price, measurable ROI, built for teams of 50–500.',
          ctaPrimary: 'Book Free Audit',
          ctaSecondary: 'See Case Studies',
          trust1: 'Production in 4–12 weeks',
          trust2: 'Full-stack, not just chatbots',
          trust3: 'Works with your stack',
          trust4: 'EU-based, GDPR-ready'
        },
        problem: {
          label: 'The reality',
          title: 'Why Mid-Market AI Integration Fails',
          sub: 'Most mid-market AI projects stall not because models are weak, but because integration is underestimated. Three patterns we see repeatedly:',
          items: [
            { title: 'Stuck in pilot purgatory', desc: 'A flashy demo is built, leadership nods, then nothing reaches production because no one wired it to the CRM, the auth layer, or the data pipeline that actually feeds the business.' },
            { title: 'Point tools that do not talk', desc: 'One team runs a Slack bot, another runs a Zapier flow, a third tests RAG in a notebook. Duplicated effort, inconsistent outputs, no shared observability or cost control.' },
            { title: 'Scope drift and surprise invoices', desc: 'Hourly-billed agencies stretch a 6-week build into 6 months. We scope week-by-week upfront and commit to a fixed price.' }
          ]
        },
        services: {
          label: 'What we integrate',
          title: 'Full-Stack AI Integration, Not Just Chatbots',
          sub: 'Six capability areas. Most engagements combine two or three.',
          items: [
            { tag: 'Core',           name: 'LLM Integration',              desc: 'OpenAI, Anthropic Claude, and Google Gemini wired into your product or internal tools. Model selection benchmarked on your data, prompt engineering, structured outputs, cost controls, and fallback routing.' },
            { tag: 'Most requested', name: 'AI Chatbots & Assistants',     desc: 'Production chatbots for Slack, WhatsApp, Telegram, Microsoft Teams, and Discord. Multi-turn memory, tool calling, escalation to humans, and full conversation logs. Deployed behind your auth, not a third-party SaaS.' },
            { tag: 'Automation',     name: 'AI Workflow Automation',       desc: 'When Zapier or Make hit their ceiling, we build the next layer: n8n, custom webhooks, queue-backed workers, and stateful flows. Errors retry, long tasks run async, every step is logged.' },
            { tag: 'Advanced',       name: 'AI Agents & Custom Solutions', desc: 'Autonomous agents that plan, call tools, and complete multi-step tasks — triage tickets, generate proposals, reconcile invoices. Human-in-the-loop gates at every decision that matters.' },
            { tag: 'CRM',            name: 'CRM AI Integration',           desc: 'AI inside HubSpot, Salesforce, and Pipedrive — lead scoring, intent detection, call summaries, next-best-action suggestions. Writes back to your CRM so your reps see AI output where they already work.' },
            { tag: 'Knowledge',      name: 'RAG & Knowledge Systems',      desc: 'Retrieval-augmented generation over your internal docs, tickets, and wikis. Pinecone, Weaviate, or Supabase pgvector — chosen by data volume and compliance. Reranking, citation, freshness controls included.' }
          ]
        },
        tools: {
          label: 'Stack breakdown',
          title: 'How We Use Each Tool',
          sub: 'Short notes on what each platform does for us and when we reach for it.',
          items: [
            { cat: 'AI models',  desc: 'GPT-4o for tool calling, structured outputs, and the widest SDK ecosystem. Our default LLM when an agent needs reliable function calls and fast iteration.' },
            { cat: 'AI models',  desc: 'Claude for long-context reasoning, careful refusals, and multi-step analysis. First choice for document-heavy workflows, contract review, and compliance-sensitive outputs.' },
            { cat: 'AI models',  desc: 'Gemini when the use case sits close to Google Workspace — Docs, Sheets, Gmail. Strong native multimodal handling for image and PDF inputs.' },
            { cat: 'Messaging',  desc: 'Where internal AI assistants live: triage bots, knowledge search over Notion or Confluence, and alert summarization. Deployed via the Events API inside your workspace, not a third-party SaaS.' },
            { cat: 'Messaging',  desc: 'Customer-facing chatbots via the WhatsApp Cloud API. We handle template approval, phone-number onboarding, opt-in flows, and conversation analytics.' },
            { cat: 'Messaging',  desc: 'Fast, simple bots for booking, notifications, and FAQ triage. Common in EU and Ukraine SMB deployments where Telegram is the default messenger.' },
            { cat: 'CRM',        desc: 'AI inside HubSpot for lead scoring, call summaries, next-best-action, and auto-drafted follow-ups written back to contact records. Native app or API integration.' },
            { cat: 'CRM',        desc: 'Enterprise AI integration with Apex callouts, Flow automation, and Service Cloud bots. A tight fit for teams already on Sales or Service Cloud.' },
            { cat: 'Automation', desc: 'Fast prototyping across 6,000+ apps. We use it for pilots and lightweight workflows before moving complex logic to n8n or custom code.' },
            { cat: 'Automation', desc: 'Visual scenario builder with better state handling and branching than Zapier. Our pick for data transformations and conditional flows.' },
            { cat: 'Automation', desc: 'Self-hosted, code-capable, no vendor lock-in. Our default workflow engine when volume grows, custom logic is needed, or data residency matters.' },
            { cat: 'Vector DB',  desc: 'Managed vector database for production-scale RAG. Low-latency retrieval, metadata filtering, hybrid search, and multi-region replication.' },
            { cat: 'Vector DB',  desc: 'Open-source with built-in hybrid search and modular vectorizers. Self-host or managed cloud — GDPR-friendly for EU deployments.' },
            { cat: 'Database',   desc: 'Postgres plus pgvector for teams that want one database for app data and embeddings. Auth, storage, and Edge Functions in the same stack.' },
            { cat: 'Hosting',    desc: 'Where we deploy AI frontends, dashboards, and Edge Functions for low-latency API routes close to the user. Preview deploys on every pull request.' }
          ]
        },
        useCases: {
          label: 'In production',
          title: 'Real-World AI Integrations',
          sub: 'Anonymized snapshots of what shipped and what it moved.',
          items: [
            { industry: 'SaaS · 180 employees',       title: 'Customer support bot on Slack + WhatsApp, tier-1 triage',                metrics: [{ val: '−60%',    lbl: 'response time' },     { val: '72%',   lbl: 'tickets auto-resolved' }] },
            { industry: 'B2B Sales · 220 employees',  title: 'LLM sales assistant inside HubSpot — lead scoring and call summaries',   metrics: [{ val: '+35%',    lbl: 'lead-to-meeting' },   { val: '8h/wk', lbl: 'saved per rep' }] },
            { industry: 'Operations · 90 employees',  title: 'Document AI workflow — invoice extraction, routing, and approval',      metrics: [{ val: '−15h/wk', lbl: 'per team' },          { val: '98.2%', lbl: 'field accuracy' }] }
          ]
        },
        faq: {
          title: 'Frequently Asked Questions',
          items: [
            { q: 'How long does AI integration take?',                                  a: 'Most mid-market integrations ship to production in 4–12 weeks. A focused chatbot or a single CRM workflow usually takes 4–6 weeks. Multi-system integrations with agents, RAG, and custom UI extend to 8–12. We scope week-by-week upfront, so the timeline is fixed, not open-ended.' },
            { q: 'Do you work with our existing CRM?',                                  a: 'Yes. We integrate with HubSpot, Salesforce, Pipedrive, and Zoho natively via their APIs. For less common tools we build adapters. We do not ask clients to migrate CRMs to suit our stack — AI is added to your system of record, not around it.' },
            { q: 'What is the typical cost range?',                                     a: 'A targeted integration (one chatbot or one workflow) is typically €4,000–12,000. Multi-system builds with agents and RAG range €12,000–40,000. We publish fixed ranges and give a written quote after a 1-hour audit call — no hourly billing, no scope creep surprises.' },
            { q: 'Can AI replace our customer support team?',                           a: 'No, and we would not recommend trying. AI handles routine tier-1 questions reliably, which frees your team for complex cases where human judgement matters. In practice clients see response time drop 50–70% and CSAT hold steady or improve, because agents spend their time on real problems.' },
            { q: 'What is the difference between AI integration and AI development?',   a: 'AI development means training a model from scratch — rarely needed for mid-market. AI integration means connecting existing models (OpenAI, Claude, Gemini) to your tools and data, then engineering the prompts, retrieval, and guardrails around them. Integration is where 95% of business value lives.' },
            { q: 'Which LLMs do you use?',                                              a: 'We pick per use case. Claude for reasoning-heavy tasks and long context. OpenAI for tool use and mature ecosystem. Gemini where Google Workspace data is central. Open-source (Llama, Mistral) when self-hosting is a compliance requirement. We benchmark on your data before committing.' },
            { q: 'How do you handle data privacy and GDPR?',                            a: 'We are EU-based and GDPR-compliant by default. We prefer vendors with EU data residency (Anthropic EU, Azure OpenAI EU region). For sensitive data we support self-hosted models and on-premise vector stores. DPA and sub-processor lists are provided before kickoff.' },
            { q: 'Can we start with a small pilot?',                                    a: 'Yes — most engagements start this way. A 2–4 week pilot on one workflow or one channel lets you validate ROI before committing to a full rollout. We quote the pilot fixed, and the learnings feed directly into the Phase 2 plan if you choose to continue.' }
          ]
        },
        finalCta: {
          title: 'Ready to Integrate AI into Your Business?',
          sub: 'Book a 30-minute free audit. We will look at your stack, name the 3 integrations with the strongest ROI, and tell you honestly which we can ship — and which you should not buy.'
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
      message_placeholder: 'Чим ми можеш вам допомогти?',
      email_label: 'Електронна пошта',
      phone_label: 'Номер телефону',
      message_label: 'Повідомлення',
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
          terms: 'Умови користування',
          cookies: 'Cookie політика'
        }
      },
      copyright: '&copy; <span id="current-year"></span> Sirio Agency. Усі права захищені.'
    },

    pages: {
      contact: {
        breadcrumbCurrent: 'Контакти',
        h1: 'Записатись на безкоштовний AI-аудит',
        sub: '30-хвилинний дзвінок. Подивимось на ваші процеси і чесно скажемо, що AI може — і чого не може — зробити для вашого бізнесу. Без продажу, без тиску.'
      },
      privacy: {
        h1: 'Політика конфіденційності',
        meta: 'Дата набрання чинності: 18 квітня 2026 · Останнє оновлення: 18 квітня 2026',
        disclaimer: 'Ця Політика конфіденційності надається як загальний шаблон виключно для інформаційних цілей. Для юридично обов\'язкової консультації щодо вашої конкретної ситуації проконсультуйтесь з кваліфікованим юристом з питань захисту даних у вашій юрисдикції.'
      },
      terms: {
        h1: 'Умови користування',
        meta: 'Дата набрання чинності: 18 квітня 2026 · Останнє оновлення: 18 квітня 2026',
        partA: {
          h2: 'Частина A — Умови використання сайту',
          intro: 'Ця частина застосовується до кожного відвідувача sirio.agency. Відкриваючи сайт, ви погоджуєтесь з цими Умовами використання.',
          sections: [
            {
              h2: 'A.1 Вступ',
              p1: 'Ця частина регулює використання веб-сайту sirio.agency і застосовується автоматично при відкритті сайту. Сама по собі вона не створює комерційних відносин.',
              p2: 'Оператор: <strong>Sirio Agency</strong>, Львів, Україна. З питань, що стосуються цих Умов, звертайтесь на <a href="mailto:legal@sirio.agency">legal@sirio.agency</a> (резервна адреса: <a href="mailto:privacy@sirio.agency">privacy@sirio.agency</a>).'
            },
            {
              h2: 'A.2 Прийняття Умов',
              p1: 'Використовуючи сайт sirio.agency, ви погоджуєтесь з цими Умовами. Якщо ви не згодні з будь-якою їх частиною — припиніть користування сайтом.'
            },
            {
              h2: 'A.3 Дозволене використання',
              p1: 'Ви можете переглядати контент сайту і надсилати запити через контактну форму для легітимних ділових цілей.',
              p2: 'Забороняється:',
              li1: 'здійснювати scraping, crawling чи дзеркалювання сайту автоматизованими засобами без письмового дозволу;',
              li2: 'проводити reverse engineering, декомпіляцію чи спроби отримати вихідний код або внутрішню логіку;',
              li3: 'збирати персональні дані команди чи відвідувачів за допомогою будь-яких автоматизованих засобів;',
              li4: 'здійснювати спроби порушити роботу, перевантажити або атакувати інфраструктуру сайту.'
            },
            {
              h2: 'A.4 Інтелектуальна власність',
              p1: 'Весь контент сайту — тексти, код, дизайн, логотип і загальна структура — є власністю Sirio Agency і охороняється авторським правом та суміжними правами.',
              p2: 'Копіювання, повторна публікація чи повторне використання матеріалів сайту без нашого попереднього письмового дозволу заборонені. Допускаються обмежені винятки у рамках fair use: короткі цитати з атрибуцією, research і коментарі.',
              p3: 'Назви та логотипи третіх сторін, згадані на сайті (наприклад, OpenAI, Anthropic, Slack, HubSpot, Salesforce, Cloudflare), є власністю відповідних компаній і згадуються виключно для описових цілей.'
            },
            {
              h2: 'A.5 Посилання на треті сторони',
              p1: 'Сайт може містити посилання на сторонні ресурси — документацію вендорів, продуктові сторінки або сайти партнерів. Ми не контролюємо ці сайти і не відповідаємо за їхній контент, точність чи практики конфіденційності. Перехід за зовнішніми посиланнями — на ваш ризик.'
            },
            {
              h2: 'A.6 Відмова від гарантій',
              p1: 'Сайт надається на засадах «AS IS» та «AS AVAILABLE», без жодних гарантій, прямих чи прихованих. Ми не гарантуємо безперервну роботу, відсутність помилок або абсолютну безпеку. Ми прагнемо максимального uptime через Cloudflare і розумних заходів безпеки, але не обіцяємо 100% доступності.'
            }
          ]
        },
        partB: {
          h2: 'Частина B — Умови надання послуг',
          intro: 'Ця частина застосовується, коли ви залучаєте Sirio до надання професійних послуг. Вона є базовим framework\'ом комерційних відносин між нами і нашими клієнтами.',
          sections: [
            {
              h2: 'B.1 Сфера дії',
              p1: 'Частина B регулює відносини між Sirio і клієнтами, які замовляють наші послуги. Наші послуги охоплюють AI-інтеграції, консалтинг, автоматизацію та кастомні AI-рішення.',
              p2: 'Кожен проєкт оформлюється окремим письмовим <strong>Statement of Work (SoW)</strong>, який визначає конкретний обсяг, deliverables, таймлайн і вартість. У разі розбіжностей між цими Умовами і SoW, підписаним обома Сторонами, <strong>SoW має пріоритет</strong>.'
            },
            {
              h2: 'B.2 Послуги',
              p1: 'Ми надаємо AI-інтеграції, LLM-консалтинг, чат-боти, автоматизацію workflow, AI-агентів і CRM-інтеграції. Кожен проєкт має чітко визначений перелік deliverables і таймлайн, які фіксуються у SoW до початку робіт.'
            },
            {
              h2: 'B.3 Замовлення та оплата',
              p1: 'Умови оплати визначаються у кожному SoW. Типові схеми:',
              li1: 'Fixed-price проєкти: 50% передоплати, 50% після завершення.',
              li2: 'Retainer-формат: місячне виставлення рахунків, оплата протягом періоду, вказаного у SoW.',
              p2: 'Рахунки виставляються у EUR або USD, конкретна валюта узгоджується у SoW. Прострочення оплати понад 30 днів може призвести до призупинення робіт і нарахування пені у розмірі, визначеному SoW.'
            },
            {
              h2: 'B.4 Обов\'язки Клієнта',
              p1: 'Для дотримання таймлайну ми очікуємо від Клієнта:',
              li1: 'своєчасного надання доступів до систем, даних і API credentials безпечним каналом;',
              li2: 'призначення відповідальної контактної особи для рішень і погоджень;',
              li3: 'реакції на milestones, review і запити протягом п\'яти (5) робочих днів.',
              p2: 'Затримки з боку Клієнта призводять до пропорційного зміщення таймлайну проєкту.'
            },
            {
              h2: 'B.5 Інтелектуальна власність і deliverables',
              p1: 'Код, конфігурації та документація, створені спеціально для Клієнта у рамках SoW, переходять у власність Клієнта після повної оплати відповідного рахунку.',
              p2: '<strong>Винятки:</strong> наші pre-existing інструменти, frameworks, шаблони та reusable-компоненти залишаються нашою власністю. Клієнт отримує безстрокову, невиключну, безоплатну ліцензію на використання цих компонентів у складі переданої роботи.',
              p3: 'Сторонні інструменти та сервіси (наприклад, OpenAI API, Anthropic API, Cloudflare, Pinecone) мають власні ліцензії та умови. Клієнт укладає договори з такими вендорами безпосередньо і несе відповідальність за використання та оплату.'
            },
            {
              h2: 'B.6 Конфіденційність',
              p1: 'Обидві Сторони зобов\'язуються зберігати конфіденційність непублічної комерційної, технічної та ділової інформації, отриманої від іншої Сторони у зв\'язку з виконанням робіт. Це зобов\'язання діє протягом трьох (3) років після завершення співпраці.',
              p2: 'Конфіденційність не поширюється на інформацію, яка: є публічно доступною; розроблена незалежно без використання конфіденційної інформації; підлягає розкриттю відповідно до закону.'
            },
            {
              h2: 'B.7 Гарантії та обмеження відповідальності',
              p1: 'Ми гарантуємо, що наші послуги будуть надаватися професійно, з розумною кваліфікацією та старанністю, відповідно до галузевих практик.',
              p2: 'Ми не гарантуємо досягнення конкретних бізнес-результатів — таких як певне зростання доходу, визначена економія витрат або конкретний conversion rate, — оскільки вони залежать від факторів поза нашим контролем.',
              p3: 'Наша максимальна сукупна відповідальність за будь-яким проєктом обмежується <strong>сумою, сплаченою за цей конкретний проєкт</strong> (для retainer-формату — сумою, сплаченою за попередні три (3) місяці). Ми не відповідаємо за непрямі, побічні чи спеціальні збитки, включно з упущеною вигодою, втраченими можливостями або репутаційною шкодою.'
            },
            {
              h2: 'B.8 Обробка даних і GDPR',
              p1: 'Якщо під час виконання робіт ми обробляємо персональні дані Клієнта або його кінцевих користувачів, Сторони укладають окремий Data Processing Agreement (DPA), який визначає ролі, заходи безпеки, sub-processors і права субʼєктів даних відповідно до GDPR ЄС.',
              p2: 'Стандартний шаблон DPA надається за запитом на <a href="mailto:legal@sirio.agency">legal@sirio.agency</a>.'
            },
            {
              h2: 'B.9 Припинення',
              p1: 'Будь-яка зі Сторін може припинити співпрацю шляхом письмового повідомлення іншої Сторони за тридцять (30) днів.',
              p2: 'Будь-яка зі Сторін може припинити співпрацю негайно у разі істотного порушення — зокрема неоплати рахунку понад шістдесят (60) днів або істотного порушення конфіденційності.',
              p3: 'Після припинення ми виставляємо рахунок за виконану на дату припинення роботу і передаємо відповідні deliverables після оплати цього рахунку.'
            },
            {
              h2: 'B.10 Застосовне право та вирішення спорів',
              p1: 'Ці Умови та будь-який проєкт у їх рамках регулюються законодавством України.',
              p2: 'Сторони спочатку намагатимуться вирішити будь-який спір шляхом сумлінних переговорів протягом тридцяти (30) днів з дати письмового повідомлення про спір.',
              p3: 'Якщо amicable resolution не досягнуто: для міжнародних клієнтів спори передаються до Міжнародного комерційного арбітражного суду при ТПП України; для українських клієнтів спори підлягають розгляду у компетентних судах м. Львова, Україна.'
            }
          ]
        },
        general: {
          changes: {
            h2: 'Зміни до цих Умов',
            p1: 'Ми можемо час від часу оновлювати ці Умови. Дата «Останнє оновлення» вгорі сторінки відображає найсвіжішу редакцію. Продовжене використання сайту або продовження співпраці після оновлення означає вашу згоду з оновленими Умовами. Про суттєві зміни ми повідомимо через сайт або, для активних клієнтів, електронним листом.'
          },
          contact: {
            h2: 'Контакти',
            p1: 'Юридичні запити: <a href="mailto:legal@sirio.agency">legal@sirio.agency</a> (резервна адреса: <a href="mailto:privacy@sirio.agency">privacy@sirio.agency</a>).',
            p2: 'Ділові запити: <a href="/ua/contact-us/">сторінка контактів</a>.'
          }
        },
        disclaimer: 'Ці Умови надаються як загальний шаблон виключно для інформаційних цілей. Для договорів зі значною бізнес-вартістю або специфічними юридичними ризиками рекомендуємо проконсультуватися з кваліфікованим комерційним юристом у вашій юрисдикції. Індивідуальні Statements of Work (SoW) клієнта мають пріоритет над цими загальними Умовами.'
      },
      aiIntegrations: {
        breadcrumbCurrent: 'AI-інтеграції',
        hero: {
          chip: 'Sirio · AI-інтеграції',
          h1: 'AI-інтеграції для mid-market компаній',
          sub: 'LLM, чат-боти, автоматизація workflow і AI-агенти — підключені до вашого CRM, месенджерів і даних. Production-grade системи за 4–12 тижнів, не 6 місяців. Фіксована ціна, вимірюваний ROI, для команд 50–500.',
          ctaPrimary: 'Безкоштовний аудит',
          ctaSecondary: 'Переглянути кейси',
          trust1: 'Production за 4–12 тижнів',
          trust2: 'Full-stack, не лише боти',
          trust3: 'Працює з вашим стеком',
          trust4: 'ЄС, GDPR-ready'
        },
        problem: {
          label: 'Реальність',
          title: 'Чому AI-інтеграції у mid-market зриваються',
          sub: 'Більшість mid-market AI-проєктів застрягають не через слабкі моделі, а через недооцінену інтеграцію. Три патерни, які ми бачимо регулярно:',
          items: [
            { title: 'Застрягли в «pilot purgatory»',              desc: 'Побудували яскраве демо, керівництво кивнуло, потім — нічого. Тому що ніхто не підключив його до CRM, auth-шару чи pipeline даних, який реально годує бізнес.' },
            { title: 'Точкові інструменти, що не говорять між собою', desc: 'Одна команда запускає Slack-бот, інша — Zapier-flow, третя тестує RAG у notebook. Дублі, неузгоджені виходи, ні спільної observability, ні контролю витрат.' },
            { title: 'Scope drift і сюрпризні рахунки',             desc: 'Агенції на погодинній оплаті перетворюють 6-тижневий build на 6 місяців. Ми розписуємо scope по тижнях і фіксуємо ціну.' }
          ]
        },
        services: {
          label: 'Що інтегруємо',
          title: 'Full-stack AI-інтеграція, а не лише чат-боти',
          sub: 'Шість областей компетенції. Більшість проєктів комбінує дві-три.',
          items: [
            { tag: 'Core',             name: 'LLM-інтеграція',                      desc: 'OpenAI, Anthropic Claude і Google Gemini підключені до вашого продукту чи внутрішніх інструментів. Benchmark моделей на ваших даних, prompt engineering, structured outputs, cost controls, fallback routing.' },
            { tag: 'Найбільший попит', name: 'AI-чат-боти та асистенти',            desc: 'Production-боти для Slack, WhatsApp, Telegram, Microsoft Teams і Discord. Multi-turn memory, tool calling, ескалація на людину, повні логи діалогів. Розгортаються за вашою авторизацією, не на стороні SaaS.' },
            { tag: 'Автоматизація',    name: 'AI Workflow Automation',              desc: 'Коли Zapier або Make упираються в стелю — будуємо наступний шар: n8n, кастомні webhooks, queue-backed воркери, stateful flows. Помилки ретраяться, довгі задачі виконуються асинхронно, кожен крок логується.' },
            { tag: 'Просунуте',        name: 'AI-агенти та кастомні рішення',       desc: 'Автономні агенти, які планують, викликають tools і виконують multi-step задачі: тріаж тікетів, генерація proposals, звірка інвойсів. Human-in-the-loop на кожному критичному рішенні.' },
            { tag: 'CRM',              name: 'CRM AI-інтеграція',                   desc: 'AI всередині HubSpot, Salesforce і Pipedrive — lead scoring, intent detection, call summaries, next-best-action. Записує назад у CRM, щоб менеджери бачили AI-output там, де вже працюють.' },
            { tag: 'Knowledge',        name: 'RAG і knowledge-системи',             desc: 'Retrieval-augmented generation по ваших внутрішніх документах, тікетах і wiki. Pinecone, Weaviate або Supabase pgvector — обираємо за об\'ємом даних і compliance. Reranking, citation, freshness-контроль входять.' }
          ]
        },
        tools: {
          label: 'Розбір стеку',
          title: 'Як ми використовуємо кожен інструмент',
          sub: 'Короткі нотатки про те, що кожна платформа робить для нас і коли ми до неї звертаємось.',
          items: [
            { cat: 'AI-моделі',     desc: 'GPT-4o для tool calling, structured outputs і найширшої SDK-екосистеми. Наш дефолтний LLM, коли агенту потрібні надійні function calls і швидка ітерація.' },
            { cat: 'AI-моделі',     desc: 'Claude для reasoning-задач з довгим контекстом, акуратних відмов і multi-step аналізу. Перший вибір для документно-важких workflows, ревʼю договорів і compliance-чутливих задач.' },
            { cat: 'AI-моделі',     desc: 'Gemini, коли use-case близький до Google Workspace — Docs, Sheets, Gmail. Сильна нативна multimodal-обробка для зображень і PDF.' },
            { cat: 'Месенджери',    desc: 'Дім для внутрішніх AI-асистентів: triage-боти, пошук по Notion або Confluence, підсумки алертів. Розгортаємо через Events API у вашому workspace, не на стороні SaaS.' },
            { cat: 'Месенджери',    desc: 'Клієнтські чат-боти через WhatsApp Cloud API. Беремо на себе template approval, онбординг номера, opt-in потоки і аналітику діалогів.' },
            { cat: 'Месенджери',    desc: 'Швидкі прості боти для запису, нотифікацій і FAQ-тріажу. Популярний у ЄС і Україні для SMB, де Telegram — дефолтний месенджер.' },
            { cat: 'CRM',           desc: 'AI всередині HubSpot для lead scoring, call summaries, next-best-action і авто-чернеток фоловапів, записаних у контакт-картку. Нативний додаток або API.' },
            { cat: 'CRM',           desc: 'Enterprise AI-інтеграція через Apex callouts, Flow automation і Service Cloud bots. Щільна підгонка для команд на Sales або Service Cloud.' },
            { cat: 'Автоматизація', desc: 'Швидке прототипування на 6 000+ застосунків. Використовуємо для пілотів і легких workflows до міграції складної логіки на n8n або код.' },
            { cat: 'Автоматизація', desc: 'Візуальний scenario-builder з кращим state-handling і розгалуженнями, ніж Zapier. Наш вибір для data transformations і умовних flows.' },
            { cat: 'Автоматизація', desc: 'Self-hosted, code-capable, без vendor lock-in. Наш дефолтний workflow-engine, коли росте обʼєм, потрібна кастомна логіка або важлива data residency.' },
            { cat: 'Vector DB',     desc: 'Managed vector database для production-scale RAG. Низька latency retrieval, metadata filtering, hybrid search і multi-region реплікація.' },
            { cat: 'Vector DB',     desc: 'Open-source з вбудованим hybrid search і модульними vectorizers. Self-host або managed cloud — GDPR-friendly для ЄС-деплоїв.' },
            { cat: 'База даних',    desc: 'Postgres плюс pgvector для команд, що хочуть одну базу для app-даних і embeddings. Auth, storage, Edge Functions — в одному стеку.' },
            { cat: 'Хостинг',       desc: 'Куди деплоїмо AI-фронтенди, дашборди і Edge Functions для low-latency API-роутів близько до користувача. Preview deploys на кожен pull request.' }
          ]
        },
        useCases: {
          label: 'У продакшні',
          title: 'Реальні AI-інтеграції',
          sub: 'Анонімізовані знімки того, що поставлено в роботу і що це зсунуло.',
          items: [
            { industry: 'SaaS · 180 співробітників',        title: 'Support-бот у Slack + WhatsApp, tier-1 тріаж',                             metrics: [{ val: '−60%',       lbl: 'response time' },     { val: '72%',   lbl: 'авто-resolved' }] },
            { industry: 'B2B Sales · 220 співробітників',   title: 'LLM sales-асистент у HubSpot — lead scoring і call summaries',             metrics: [{ val: '+35%',       lbl: 'lead-to-meeting' },   { val: '8 год/тиж', lbl: 'економія на rep' }] },
            { industry: 'Operations · 90 співробітників',   title: 'Document AI workflow — витягування інвойсів, маршрутизація, апрув',        metrics: [{ val: '−15 год/тиж', lbl: 'на команду' },        { val: '98.2%', lbl: 'точність полів' }] }
          ]
        },
        faq: {
          title: 'Часті запитання',
          items: [
            { q: 'Скільки часу займає AI-інтеграція?',                          a: 'Більшість mid-market інтеграцій виходять у продакшн за 4–12 тижнів. Фокусний чат-бот або один CRM-workflow — 4–6 тижнів. Multi-system інтеграції з агентами, RAG і кастомним UI — 8–12. Таймлайн ми розписуємо по тижнях наперед: він фіксований, не open-ended.' },
            { q: 'Ви працюєте з нашим наявним CRM?',                            a: 'Так. Нативно інтегруємось з HubSpot, Salesforce, Pipedrive і Zoho через їхні API. Для менш поширених інструментів пишемо адаптери. Ми не просимо клієнтів мігрувати CRM під нас — AI додається до вашої системи, а не навколо неї.' },
            { q: 'Скільки це зазвичай коштує?',                                 a: 'Точкова інтеграція (один чат-бот або один workflow) — €4 000–12 000. Multi-system з агентами і RAG — €12 000–40 000. Ми публікуємо фіксовані діапазони і даємо письмовий quote після 1-годинного audit-дзвінка. Без погодинної оплати і сюрпризів зі scope.' },
            { q: 'AI може замінити нашу команду підтримки?',                    a: 'Ні, і ми б не радили. AI надійно обробляє рутинні tier-1 запити, що звільняє команду для складних кейсів, де потрібне людське judgement. На практиці response time падає на 50–70%, а CSAT тримається або росте — бо агенти працюють над реальними проблемами.' },
            { q: 'Яка різниця між AI-інтеграцією та AI-розробкою?',             a: 'AI-розробка — це тренування моделі з нуля, що для mid-market майже ніколи не потрібно. AI-інтеграція — підключення готових моделей (OpenAI, Claude, Gemini) до ваших інструментів і даних, плюс інженерія промптів, retrieval і guardrails. 95% бізнес-цінності створюється саме в інтеграції.' },
            { q: 'Які LLM ви використовуєте?',                                  a: 'Вибираємо під задачу. Claude — для складних reasoning-задач і довгого контексту. OpenAI — для tool use і зрілої екосистеми. Gemini — коли центральні дані у Google Workspace. Open-source (Llama, Mistral) — коли compliance вимагає self-hosting. Benchmark на ваших даних перед вибором.' },
            { q: 'Як ви забезпечуєте приватність даних і GDPR?',                a: 'Ми базовані в ЄС і GDPR-сумісні за замовчуванням. Надаємо перевагу вендорам з EU data residency (Anthropic EU, Azure OpenAI EU region). Для чутливих даних підтримуємо self-hosted моделі і on-prem vector stores. DPA і список sub-processors надаємо до старту.' },
            { q: 'Чи можна почати з невеликого пілота?',                        a: 'Так — більшість проєктів так і починаються. Пілот на 2–4 тижні на одному workflow або каналі дозволяє перевірити ROI перед повним rollout. Ціну пілота фіксуємо заздалегідь, а висновки переходять у план Фази 2, якщо вирішите продовжувати.' }
          ]
        },
        finalCta: {
          title: 'Готові інтегрувати AI у ваш бізнес?',
          sub: 'Запишіться на безкоштовний 30-хвилинний аудит. Подивимось на ваш стек, назвемо 3 інтеграції з найсильнішим ROI і чесно скажемо, які можемо поставити — а яких не варто купувати.'
        }
      }
    }
  }
};
