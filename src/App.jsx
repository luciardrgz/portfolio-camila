import React, { useState } from 'react';
import {
  ArrowUpRight,
  Globe,
  Mail,
  Phone,
  FileText,
  Captions,
  Tv,
  Sparkles,
  Clapperboard,
  GraduationCap,
  Gamepad2,
  MonitorSmartphone,
  Briefcase
} from 'lucide-react';
import './App.css';

const translations = {
  en: {
    navAbout: "About",
    navServices: "Services",
    navIndustries: "Industries",
    navCta: "Get Started",
    heroMeta1: "AUDIOVISUAL",
    heroMeta2: "TECHNICAL-SCIENTIFIC TRANSLATION",
    heroHeadline: "Bring your story to Spanish-speaking audiences.",
    heroSub: "You’ve got something powerful to say — let me help you make it resonate in Spanish. Expert translation and subtitling services for Film, Streaming, eLearning, and more.",
    heroBtnMain: "Request free quote",
    heroBtnLink: "Explore Services",
    quote: "Language is not universal, but <b>entertainment is</b>. <br/> Whether it is films, tv or streaming events, we can all enjoy a good show no matter where we are from or what language we speak!",
    aboutTag: "// IDENTITY",
    aboutTitle: "About CG Translations",
    aboutText: "We craft translations and subtitles that sound right — capturing the tone, emotion, and intent of your original message.",
    whyTag: "// VALUE PROPOSITION",
    whyTitle: "Why CG Translations?",
    why1: "Native-speaking translators",
    why2: "Deep industry knowledge",
    why3: "Commitment to confidentiality",
    why4: "Meticulous quality control",
    why5: "Human touch in every project",
    servicesTag: "// EXPERTISE",
    servicesTitle: "Our Services",
    servicesData: [
      { title: "Translation & Localization", desc: "Adapting text seamlessly for Spanish-speaking regions while maintaining cultural nuances, tone, and original intent." },
      { title: "Subtitling & Captioning", desc: "Creating time-synced and clever subtitles and captions, optimized for readability and cinematic flow." },
      { title: "Editing & Proofreading", desc: "Polishing existing Spanish content to improve natural phrasing, accurate syntax, terminology, and stylistic consistency." },
      { title: "Voice-over & Dubbing Coordination", desc: "Ensuring script synchronization, localized voice casting, and technical adaptation for multimedia and video assets." },
      { title: "Audio Description", desc: "Crafting vivid narrative tracks for visually impaired audiences, describing essential visual elements during natural pauses." },
      { title: "Desktop Publishing (DTP)", desc: "Formatting and adjusting layouts to match source files perfectly, dealing with text expansion typical in Spanish translations." }
    ],
    indTag: "// TARGET SECTORS",
    indTitle: "Industries We Serve",
    indData: ["Film, TV & Streaming", "eLearning & Training Videos", "Video Games", "Websites & Mobile Apps", "Corporate & Marketing Content"],
    ctaTag: "// WORK WITH ME",
    ctaTitle: "Ready to go global?",
    ctaText: "Let’s talk about your content and how I can help it shine in Spanish. From quick clips to full-length features, I’ll deliver a solution tailored to your goals — and your budget.",
    ctaBoxTitle: "Do you produce any of these contents?",
    ctaBoxText: "Let me help you reach millions of Latin American people that could enjoy your content.",
    contactTag: "// CONNECT",
    contactTitle: "Contact Details"
  },
  es: {
    navAbout: "Sobre mí",
    navServices: "Servicios",
    navIndustries: "Industrias",
    navCta: "Empezar",
    heroMeta1: "TRADUCCIÓN AUDIOVISUAL",
    heroMeta2: "TRADUCCIÓN TÉCNICO-CIENTÍFICA",
    heroHeadline: "Lleve su historia a audiencias hispanohablantes.",
    heroSub: "Tiene algo potente que decir — déjelo en mis manos para que resuene en español. Servicios profesionales de traducción y subtitulado para cine, streaming, eLearning y más.",
    heroBtnMain: "Presupuesto gratuito",
    heroBtnLink: "Ver Servicios",
    quote: "El idioma no es universal, pero el <b>entretenimiento sí</b>. <br/> Ya sean películas, series o streaming, ¡todos podemos disfrutar de un buen show sin importar de dónde seamos!",
    aboutTag: "// IDENTIDAD",
    aboutTitle: "Sobre CG Translations",
    aboutText: "Creamos traducciones y subtítulos que suenan naturales, capturando el tono, la emoción y la intención de su mensaje original.",
    whyTag: "// PROPUESTA DE VALOR",
    whyTitle: "¿Por qué CG Translations?",
    why1: "Traductores nativos",
    why2: "Fuerte conocimiento de la industria",
    why3: "Compromiso absoluto de confidencialidad",
    why4: "Control de calidad meticuloso",
    why5: "Sensibilidad humana en cada proyecto",
    servicesTag: "// EXPERIENCIA",
    servicesTitle: "Nuestros Servicios",
    servicesData: [
      { title: "Traducción y Localización", desc: "Adaptación fluida de textos para regiones de habla hispana, manteniendo matices culturales, tono e intención original." },
      { title: "Subtitulado y Captioning", desc: "Creación de subtítulos sincronizados y precisos, optimizados para una lectura cómoda y un flujo cinematográfico natural." },
      { title: "Edición y Corrección", desc: "Pulido de contenido en español para mejorar la fluidez natural, sintaxis exacta, terminología y consistencia de estilo." },
      { title: "Coordinación de Doblaje y Voice Over", desc: "Sincronización de guiones, casting de voces locales y adaptación técnica para contenidos multimedia." },
      { title: "Audiodescripción", desc: "Redacción de pistas narrativas descriptivas para audiencias con discapacidad visual, aprovechando las pausas naturales del audio." },
      { title: "Desktop Publishing (DTP)", desc: "Maquetación y ajuste de formatos para igualar los archivos originales, resolviendo la expansión de texto típica del español." }
    ],
    indTag: "// SECTORES CLAVE",
    indTitle: "Industrias que Atendemos",
    indData: ["Cine, TV y Streaming", "eLearning y Videos de Capacitación", "Videojuegos", "Sitios Web y Apps Móviles", "Contenido Corporativo y Marketing"],
    ctaTag: "// TRABAJEMOS JUNTOS",
    ctaTitle: "¿Listo para expandirse?",
    ctaText: "Hablemos de su contenido y de cómo puedo lograr que brille en español. Desde clips cortos hasta largometrajes, le daré una solución a la medida de sus objetivos y presupuesto.",
    ctaBoxTitle: "¿Produce alguno de estos contenidos?",
    ctaBoxText: "Le ayudo a llegar a millones de personas en Latinoamérica que están esperando disfrutar de su contenido.",
    contactTag: "// CONECTAR",
    contactTitle: "Datos de Contacto"
  }
};

function NavLink({ href, textEs, textEn, currentLang, className = "" }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const isEs = currentLang === 'es';
  const subtitleText = isEs ? textEn : textEs;

  return (
    <a
      href={href}
      className={`${className} nav-link-editorial`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        textDecoration: 'none',
        position: 'relative'
      }}
    >
      <span className="nav-text-main">
        {isEs ? textEs : textEn}
      </span>

      <span
        className="nav-text-sub"
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: isHovered ? 'translate(-50%, 0)' : 'translate(-50%, -4px)',
          fontSize: '0.7rem',
          fontWeight: '700',
          letterSpacing: '1px',
          color: 'var(--accent-yellow)',
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          paddingTop: '4px',
          whiteSpace: 'nowrap'
        }}
      >
        [{subtitleText.toUpperCase()}]
      </span>
    </a>
  );
}

export default function PortfolioCami() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const serviceIcons = [
    <Globe className="sv-icon" />,
    <Captions className="sv-icon" />,
    <FileText className="sv-icon" />,
    <Tv className="sv-icon" />,
    <Sparkles className="sv-icon" />,
    <MonitorSmartphone className="sv-icon" />
  ];

  const industryIcons = [
    <Clapperboard className="ind-icon" />,
    <GraduationCap className="ind-icon" />,
    <Gamepad2 className="ind-icon" />,
    <MonitorSmartphone className="ind-icon" />,
    <Briefcase className="ind-icon" />
  ];

  return (
    <div className="portfolio-red">

      {/* NAVBAR EDITORIAL */}
      <nav className="main-nav">
        <div className="nav-logo">
          CG<span className="yellow-dot">.</span>TRANSLATIONS
        </div>
        <div className="nav-menu" style={{ alignItems: 'center' }}>
          <NavLink href="#about" textEs="Sobre mí" textEn="About" currentLang={lang} />
          <NavLink href="#services" textEs="Servicios" textEn="Services" currentLang={lang} />
          <NavLink href="#industries" textEs="Industrias" textEn="Industries" currentLang={lang} />
          <NavLink href="#contact" textEs="Empezar" textEn="Get Started" currentLang={lang} className="nav-cta" />

          {/* TOGGLE DE IDIOMA */}
          <div className="lang-selector">
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
            >
              ES
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero-modern">
        <div className="hero-content">
          <div className="hero-meta">
            <span className="meta-tag-yellow">{t.heroMeta1}</span>
            {lang === 'en' ? (
              <>
                <span className="meta-separator">&</span>
                <span className="meta-tag-white">{t.heroMeta2}</span>
              </>
            ) : (
              <>
                <span className="meta-separator">Y</span>
                <span className="meta-tag-white">{t.heroMeta2}</span>
              </>
            )}
          </div>

          <h1 className="hero-headline">
            {lang === 'en' ? (
              <>Bring your story to <span className="text-stroke">Spanish-speaking</span> audiences.</>
            ) : (
              <>Lleve su historia a audiencias <span className="text-stroke">hispanohablantes</span>.</>
            )}
          </h1>

          <p className="hero-sub">{t.heroSub}</p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-main">
              {t.heroBtnMain} <ArrowUpRight className="btn-arrow" />
            </a>
            <a href="#services" className="btn-link">{t.heroBtnLink}</a>
          </div>
        </div>
      </header>

      {/* --- QUOTE --- */}
      <div className="broadway-marquee-wrapper">
        <div className="broadway-lights-border"></div>
        <section className="cinema-quote-section">
          <div className="quote-wrapper">
            <p className="manifesto-text" dangerouslySetInnerHTML={{ __html: t.quote }}></p>
          </div>
        </section>
      </div>

      {/* --- ABOUT & WHY US --- */}
      <section id="about" className="about-editorial-section">
        <div className="editorial-grid">
          <div className="grid-left">
            <div className="about-image-wrapper">
              <img src="/Camila.jpg" alt="Camila Terminiello" className="about-profile-img" />
              <div className="image-technical-frame"></div>
            </div>
            <div className="about-text-block">
              <span className="section-tag">{t.aboutTag}</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
            </div>
          </div>
          <div className="grid-right">
            <span className="section-tag">{t.whyTag}</span>
            <h2>{t.whyTitle}</h2>
            <ul className="modern-list">
              <li><span className="list-num-yellow">01 /</span> {t.why1}</li>
              <li><span className="list-num-white">02 /</span> {t.why2}</li>
              <li><span className="list-num-yellow">03 /</span> {t.why3}</li>
              <li><span className="list-num-white">04 /</span> {t.why4}</li>
              <li><span className="list-num-yellow">05 /</span> {t.why5}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="services-modern-section">
        <div className="section-title-wrapper">
          <span className="section-tag">{t.servicesTag}</span>
          <h2>{t.servicesTitle}</h2>
        </div>
        <div className="services-modern-grid">
          {t.servicesData.map((service, idx) => (
            <div key={idx} className="service-modern-card">
              <div className="card-header">
                <span className="card-number">[ 0{idx + 1} ]</span>
                <div className="icon-box-accent">{serviceIcons[idx]}</div>
              </div>
              <div className="card-body-text">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INDUSTRIES --- */}
      <section id="industries" className="industries-modern-section">
        <div className="section-title-wrapper">
          <span className="section-tag">{t.indTag}</span>
          <h2>{t.indTitle}</h2>
        </div>
        <div className="industries-list-modern">
          {t.indData.map((name, idx) => (
            <div key={idx} className="industry-row">
              <span className="row-idx">* 0{idx + 1}</span>
              <span className="row-text">{name}</span>
              <div className="row-meta-icon">{industryIcons[idx]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="cta-modern">
        <div className="cta-container">
          <span className="section-tag">{t.ctaTag}</span>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <div className="cta-highlight-box">
            <h4 className="cta-box-title">{t.ctaBoxTitle}</h4>
            <p>{t.ctaBoxText}</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="contact-modern-section">
        <div className="contact-grid">
          <div className="contact-info-block">
            <span className="section-tag">{t.contactTag}</span>
            <h2>{t.contactTitle}</h2>
          </div>
          <div className="contact-links-block">
            <a href="mailto:cgt.translations@hotmail.com" className="contact-row-link link-email">
              <Mail className="contact-icon" />
              <span className="contact-label">Email:</span>
              <span className="contact-value">cgt.translations@hotmail.com</span>
            </a>
            <a href="https://wa.me/542235565576" target="_blank" rel="noreferrer" className="contact-row-link link-phone">
              <Phone className="contact-icon" />
              <span className="contact-label">WhatsApp:</span>
              <span className="contact-value">+54 223 556-5576 <span className="timezone-badge">GMT-3</span></span>
            </a>
            <a href="https://www.linkedin.com/in/camilaterminiello01" target="_blank" rel="noreferrer" className="contact-row-link link-linkedin">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="contact-label">LinkedIn:</span>
              <span className="contact-value">camilaterminiello01</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="modern-footer">
        <div>CG TRANSLATIONS</div>
        <div className="footer-credits">2026</div>
      </footer>
    </div>
  );
}