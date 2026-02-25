/**
 * i18n.js — Bilingual (FR / EN) translation engine
 * Usage: add data-i18n="key" on any element.
 * The switcher buttons: <button class="lang-btn" data-lang="fr">FR</button>
 *
 * ContentLoader will read I18n.get() to filter/label content.
 */
window.I18n = (() => {
  const STORAGE_KEY = 'sab_lang';

  // ─── Translation strings ─────────────────────────────────────────────────
  const t = {
    fr: {
      /* Navigation */
      'nav.home':     'Accueil',
      'nav.about':    'À propos',
      'nav.projects': 'Projets',
      'nav.blog':     'Blog',
      'nav.contact':  'Contact',

      /* Hero */
      'hero.role': 'Aspirant Chercheur · AI & Machine Learning · Développeur de solutions innovantes',
      'hero.bio':  "Étudiant en data science et intelligence artificielle à l'IFRI-UAC (Bénin). Je construis des systèmes ML appliqués à la santé, au droit africain, à la vision par ordinateur et à l'optimisation.",
      'hero.cta.projects': 'Voir les projets',
      'hero.cta.about':    'À propos',

      /* Contact section */
      'contact.title':    'Restons en Contact',
      'contact.subtitle': "Discutons d'IA, de recherche ou de collaboration",

      /* About page */
      'about.title':           'À propos',
      'about.role':            'Aspirant Chercheur | AI & Machine Learning',
      'about.bio1':            "Passionné par l'application de l'intelligence artificielle à des défis concrets : sécurité publique, santé, optimisation de ressources et traitement du langage naturel. Mon objectif est d'explorer et de développer des solutions IA qui améliorent l'efficacité, la prise de décision et l'accessibilité.",
      'about.bio2':            "Actuellement en 3e année de Licence Informatique (option IA) à l'IFRI-UAC (Université d'Abomey-Calavi, Bénin), avec des expériences pratiques en développement backend, ingénierie IA et solutions de télémédecine.",
      'about.research.title':  'Intérêts',
      'about.formation.title': 'Formation',

      /* Interest chips */
      'chip.ml':      'Machine Learning',
      'chip.nlp':     'NLP & LLMs',
      'chip.cv':      'Computer Vision',
      'chip.asr':     'ASR & Speech',
      'chip.opt':     'Optimisation Combinatoire',
      'chip.health':  'IA pour la Santé',
      'chip.rag':     'RAG Systems',
      'chip.mlops':   'MLOps',
      'chip.backend': 'Django & Backend',
      'chip.web':     'Développement Web',
      'about.xp.title':        'Expériences',
      'about.awards.title':    'Distinctions & Certifications',
      'about.orgs.title':      'Organisations',

      /* Education entries */
      'edu.ifri.degree':  'Licence en Informatique — option Intelligence Artificielle',
      'edu.ifri.period':  '2022 — Présent',
      'edu.ifri.school':  "IFRI — Université d'Abomey-Calavi, Bénin",
      'edu.ifri.desc':    "3e année. Modules principaux : Machine Learning, NLP, Computer Vision, Data Analysis, Optimisation, Calcul, Algèbre linéaire, Statistiques, Probabilités, Structures Algébriques, POO, Structures de Données, Développement d'applications.",
      'edu.bac.degree':   'Baccalauréat — Série C (Sciences)',
      'edu.bac.period':   '2022',
      'edu.bac.school':   'CEG Pahou, Bénin',
      'edu.bac.desc':     'Mention Très Bien (16,27/20)',

      /* Experience entries */
      'xp.sharay.title':   'Backend Developer & AI Engineer',
      'xp.sharay.type':    'Stage',
      'xp.sharay.period':  'Nov 2025 — Jan 2026',
      'xp.sharay.org':     'SharayTalent',
      'xp.sharay.desc':    "Développement d'un backend Django pour une plateforme de gestion de talents propulsée par IA. Implémentation des fonctionnalités IA : extraction automatique de CV, analyse psychométrique et génération de quiz. Contribution à la conception des API, la gestion de la base de données et l'architecture système.",

      'xp.adjibola.title':   'AI Engineer',
      'xp.adjibola.type':    'Stage',
      'xp.adjibola.period':  'Jun 2025 — Sep 2025',
      'xp.adjibola.org':     'AdjibolaTech, Bénin',
      'xp.adjibola.desc':    "Travail sur des solutions de télémédecine basées sur l'IA : transcription en temps réel et assistance médicale contextuelle. Développement d'un modèle ASR adapté aux accents français béninois, spécialisé dans le domaine médical. Réduction du Word Error Rate de 109,6 % à 20 % sur les échantillons de test.",

      'xp.jilmonde.title':   'Backend Developer',
      'xp.jilmonde.type':    'Stage',
      'xp.jilmonde.period':  'Jul 2024 — Sep 2024',
      'xp.jilmonde.org':     'Cabinet Jilmonde Consulting, Abomey-Calavi',
      'xp.jilmonde.desc':    "Construction d'un portail web pour une entreprise de vente et production d'articles de presse.",

      /* Organizations */
      'org.amld.title':   'Ambassadeur AMLD Africa',
      'org.amld.period':  '2025 — 2026',
      'org.amld.org':     'AMLD Africa',
      'org.amld.desc':    "Organisation d'événements AMLD au Bénin pour promouvoir une éducation IA inclusive.",

      /* Awards */
      'award.ohada.title':  'Vainqueur — LLMs for OHADA Law Innovation Competition',
      'award.ohada.period': 'Mai 2025',
      'award.ohada.org':    'Force-N, Sénégal',

      'cert.llm.title':   'Large Language Models',
      'cert.llm.period':  'Avr 2025',
      'cert.llm.org':     'Force-N, Sénégal',

      'cert.neuroai.title':   'NeuroAI',
      'cert.neuroai.period':  'Jul 2025',
      'cert.neuroai.org':     'Neuromatch Academy',

      'cert.acp.title':   'ACP Summer School 2025',
      'cert.acp.period':  'Août 2025',
      'cert.acp.org':     'Association of Constraints Programming',

      /* Projects page */
      'projects.title':    'Projets',
      'projects.subtitle': 'Explorations en machine learning, data science et intelligence artificielle',
      'filter.all':    'Tous',
      'filter.nlp':    'NLP',
      'filter.ml':     'Machine Learning',
      'filter.cv':     'Vision',
      'filter.ds':     'Data Science',
      'filter.opt':    'Optimisation',
      'filter.web':    'Web',
      'filter.speech': 'Speech',

      /* Blog page */
      'blog.title':    'Articles & Réflexions',
      'blog.subtitle': 'Explorations en intelligence artificielle, machine learning et recherche',
      'blog.read':     'Lire l\'article →',

      /* Post / Project detail */
      'back.blog':     '← Retour aux articles',
      'back.projects': '← Retour aux projets',

      /* Empty states */
      'no.projects': 'Aucun projet disponible pour l\'instant.',
      'no.posts':    'Aucun article pour l\'instant. Revenez bientôt !',

      /* Footer */
      'footer.copy': '© 2026 Stéphane AHOLOU-BAH. Tous droits réservés.',
    },

    en: {
      /* Navigation */
      'nav.home':     'Home',
      'nav.about':    'About',
      'nav.projects': 'Projects',
      'nav.blog':     'Blog',
      'nav.contact':  'Contact',

      /* Hero */
      'hero.role': 'Aspiring Researcher · AI & Machine Learning · Developer of Innovative Solutions',
      'hero.bio':  'Data science and AI student at IFRI-UAC (Benin). I build ML systems applied to healthcare, African law, computer vision and combinatorial optimization.',
      'hero.cta.projects': 'View projects',
      'hero.cta.about':    'About me',

      /* Contact section */
      'contact.title':    "Let's Stay in Touch",
      'contact.subtitle': "Let's talk about AI, research, or collaboration",

      /* About page */
      'about.title':           'About',
      'about.role':            'Aspiring Researcher | AI & Machine Learning',
      'about.bio1':            'Particularly interested in applying artificial intelligence to real-world challenges, including public safety, healthcare, resource optimization, and language processing. My goal is to explore and develop AI-based solutions that improve efficiency, decision-making, and accessibility.',
      'about.bio2':            "Currently in my 3rd year of a Computer Science degree (AI track) at IFRI-UAC (University of Abomey-Calavi, Benin), with hands-on experience in backend development, AI engineering, and telemedicine solutions.",
      'about.research.title':  'Interests',
      'about.formation.title': 'Education',

      /* Interest chips */
      'chip.ml':      'Machine Learning',
      'chip.nlp':     'NLP & LLMs',
      'chip.cv':      'Computer Vision',
      'chip.asr':     'ASR & Speech',
      'chip.opt':     'Combinatorial Optimization',
      'chip.health':  'AI for Healthcare',
      'chip.rag':     'RAG Systems',
      'chip.mlops':   'MLOps',
      'chip.backend': 'Django & Backend',
      'chip.web':     'Web Development',
      'about.xp.title':        'Experience',
      'about.awards.title':    'Awards & Certifications',
      'about.orgs.title':      'Organizations',

      /* Education entries */
      'edu.ifri.degree':  "Bachelor's Degree in Computer Science — Artificial Intelligence",
      'edu.ifri.period':  '2022 — Present',
      'edu.ifri.school':  'IFRI — University of Abomey-Calavi, Benin',
      'edu.ifri.desc':    '3rd year AI track. Core modules: Machine Learning, NLP, Computer Vision, Data Analysis, Optimization, Calculus, Linear Algebra, Statistics, Probability, Algebraic Structures, OOP, Data Structures, Application Development.',
      'edu.bac.degree':   'Baccalaureate — Science Track (Série C)',
      'edu.bac.period':   '2022',
      'edu.bac.school':   'CEG Pahou, Benin',
      'edu.bac.desc':     'Highest Honours (16.27/20)',

      /* Experience entries */
      'xp.sharay.title':   'Backend Developer & AI Engineer',
      'xp.sharay.type':    'Internship',
      'xp.sharay.period':  'Nov 2025 — Jan 2026',
      'xp.sharay.org':     'SharayTalent',
      'xp.sharay.desc':    'Developed a Django-based backend for an AI-powered talent management platform, streamlining recruitment processes. Implemented core AI functionalities including automated CV extraction, psychometric assessment analysis, and quiz generation. Contributed to API design, database management, and system architecture.',

      'xp.adjibola.title':   'AI Engineer',
      'xp.adjibola.type':    'Internship',
      'xp.adjibola.period':  'Jun 2025 — Sep 2025',
      'xp.adjibola.org':     'AdjibolaTech, Benin',
      'xp.adjibola.desc':    'Worked on AI-based telemedicine solutions, including real-time transcription and contextual medical assistance. Developed an ASR model adapted to Beninese French accents specialized in the medical field. Reduced Word Error Rate from 109.6% to 20% on test samples.',

      'xp.jilmonde.title':   'Backend Developer',
      'xp.jilmonde.type':    'Internship',
      'xp.jilmonde.period':  'Jul 2024 — Sep 2024',
      'xp.jilmonde.org':     'Cabinet Jilmonde Consulting, Abomey-Calavi',
      'xp.jilmonde.desc':    'Built a web portal for a company that sells and produces newspaper articles.',

      /* Organizations */
      'org.amld.title':   'AMLD Africa Ambassador',
      'org.amld.period':  '2025 — 2026',
      'org.amld.org':     'AMLD Africa',
      'org.amld.desc':    'Organized AMLD events in Benin to promote inclusive AI education.',

      /* Awards */
      'award.ohada.title':  'Winner — LLMs for OHADA Law Innovation Competition',
      'award.ohada.period': 'May 2025',
      'award.ohada.org':    'Force-N, Senegal',

      'cert.llm.title':   'Large Language Models',
      'cert.llm.period':  'Apr 2025',
      'cert.llm.org':     'Force-N, Senegal',

      'cert.neuroai.title':   'NeuroAI',
      'cert.neuroai.period':  'Jul 2025',
      'cert.neuroai.org':     'Neuromatch Academy',

      'cert.acp.title':   'ACP Summer School 2025',
      'cert.acp.period':  'Aug 2025',
      'cert.acp.org':     'Association of Constraints Programming',

      /* Projects page */
      'projects.title':    'Projects',
      'projects.subtitle': 'Explorations in machine learning, data science and artificial intelligence',
      'filter.all':    'All',
      'filter.nlp':    'NLP',
      'filter.ml':     'Machine Learning',
      'filter.cv':     'Vision',
      'filter.ds':     'Data Science',
      'filter.opt':    'Optimization',
      'filter.web':    'Web',
      'filter.speech': 'Speech',

      /* Blog page */
      'blog.title':    'Articles & Reflections',
      'blog.subtitle': 'Explorations in artificial intelligence, machine learning and research',
      'blog.read':     'Read article →',

      /* Post / Project detail */
      'back.blog':     '← Back to articles',
      'back.projects': '← Back to projects',

      /* Empty states */
      'no.projects': 'No projects available yet.',
      'no.posts':    'No articles yet. Check back soon!',

      /* Footer */
      'footer.copy': '© 2026 Stéphane AHOLOU-BAH. All rights reserved.',
    },
  };

  let current = localStorage.getItem(STORAGE_KEY) || 'fr';

  // ─── Apply translations to DOM ───────────────────────────────────────────
  function apply(lang) {
    if (!t[lang]) return;
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t[lang][el.dataset.i18n];
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = t[lang][el.dataset.i18nHtml];
      if (val !== undefined) el.innerHTML = val;
    });

    // Sync switcher button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Notify content-loader to re-render with new lang
    if (window.ContentLoader && window.ContentLoader.refresh) {
      window.ContentLoader.refresh();
    }
  }

  // ─── Init: wire buttons + apply saved preference ─────────────────────────
  function init() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => apply(btn.dataset.lang));
    });
    apply(current);
  }

  // ─── Translate a single key (used by content-loader) ────────────────────
  function tr(key) {
    return (t[current] && t[current][key]) || key;
  }

  // ─── Get current language ────────────────────────────────────────────────
  function get() {
    return current;
  }

  return { apply, init, tr, get };
})();