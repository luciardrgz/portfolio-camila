import React from 'react';
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

export default function PortfolioCami() {
  const services = [
    {
      title: "Translation & Localization",
      icon: <Globe className="sv-icon" />,
      description: "Adapting text seamlessly for Spanish-speaking regions while maintaining cultural nuances, tone, and original intent."
    },
    {
      title: "Subtitling & Captioning",
      icon: <Captions className="sv-icon" />,
      description: "Creating time-synced, highly accurate subtitles and captions optimized for readability and cinematic flow."
    },
    {
      title: "Editing & Proofreading",
      icon: <FileText className="sv-icon" />,
      description: "Polishing existing Spanish content to improve natural phrasing, accurate syntax, terminology, and stylistic consistency."
    },
    {
      title: "Voice-over & Dubbing Coordination",
      icon: <Tv className="sv-icon" />,
      description: "Ensuring script synchronization, localized voice casting, and technical adaptation for multimedia and video assets."
    },
    {
      title: "Audio Description",
      icon: <Sparkles className="sv-icon" />,
      description: "Crafting vivid narrative tracks for visually impaired audiences, describing essential visual elements during natural pauses."
    },
    {
      title: "Desktop Publishing (DTP)",
      icon: <FileText className="sv-icon" />,
      description: "Formatting and adjusting layouts to match source files perfectly, dealing with text expansion typical in Spanish translations."
    },
  ];

  const industries = [
    { name: "Film, TV & Streaming", icon: <Clapperboard className="ind-icon" /> },
    { name: "eLearning & Training Videos", icon: <GraduationCap className="ind-icon" /> },
    { name: "Video Games", icon: <Gamepad2 className="ind-icon" /> },
    { name: "Websites & Mobile Apps", icon: <MonitorSmartphone className="ind-icon" /> },
    { name: "Corporate & Marketing Content", icon: <Briefcase className="ind-icon" /> }
  ];

  return (
    <div className="portfolio-red">

      {/* --- NAVBAR EDITORIAL --- */}
      <nav className="main-nav">
        <div className="nav-logo">
          CG<span className="yellow-dot">.</span>TRANSLATIONS
        </div>
        <div className="nav-menu">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#contact" className="nav-cta">Get Started</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero-modern">
        <div className="hero-meta">
          <span className="meta-tag-yellow">AUDIOVISUAL</span>
          <span className="meta-separator">&</span>
          <span className="meta-tag-white">TECHNICAL-SCIENTIFIC TRANSLATION</span>
        </div>
        <h1 className="hero-headline">
          Bring your story to <span className="text-stroke">Spanish-speaking</span> audiences.
        </h1>
        <p className="hero-sub">
          You’ve got something powerful to say—let me help you make it resonate in Spanish. Expert Translation and Subtitling Services for Film, Streaming, eLearning, and More.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-main">
            Request free quote <ArrowUpRight className="btn-arrow" />
          </a>
          <a href="#services" className="btn-link">Explore Services</a>
        </div>
      </header>

      {/* --- QUOTE --- */}
      <div className="broadway-marquee-wrapper">
        <div className="broadway-lights-border"></div>
        <section className="cinema-quote-section">
          <div className="quote-wrapper">
            <p className="manifesto-text">
              Language is not universal, but <b>entertainment is</b>. <br/> Whether is films, tv or streaming events, we can all enjoy a good show no matter where we are from or what language we speak!
            </p>
          </div>
        </section>
      </div>

    {/* --- ABOUT & WHY US --- */}
      <section id="about" className="about-editorial-section">
        <div className="editorial-grid">
          
          <div className="grid-left">
            <div className="about-image-wrapper">
              <img 
                src="/Camila.jpg" 
                alt="Camila Terminiello" 
                className="about-profile-img" 
              />
              <div className="image-technical-frame"></div>
            </div>

            <div className="about-text-block">
              <span className="section-tag">// IDENTITY</span>
              <h2>About CG Translations</h2>
              <p>We craft translations and subtitles that sound right—capturing the tone, emotion, and intent of your original message.</p>
            </div>
          </div>

          <div className="grid-right">
            <span className="section-tag">// VALUE PROPOSITION</span>
            <h2>Why CG Translations?</h2>
            <ul className="modern-list">
              <li><span className="list-num-yellow">01 /</span> Native-speaking translators</li>
              <li><span className="list-num-white">02 /</span> Deep industry knowledge</li>
              <li><span className="list-num-yellow">03 /</span> Commitment to confidentiality</li>
              <li><span className="list-num-white">04 /</span> Meticulous quality control</li>
              <li><span className="list-num-yellow">05 /</span> Human touch in every project</li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="services-modern-section">
        <div className="section-title-wrapper">
          <span className="section-tag">// EXPERTISE</span>
          <h2>Our Services</h2>
        </div>
        <div className="services-modern-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-modern-card">
              <div className="card-header">
                <span className="card-number">[ 0{idx + 1} ]</span>
                <div className="icon-box-accent">{service.icon}</div>
              </div>

              {/* Contenedor dinámico de texto controlado por CSS */}
              <div className="card-body-text">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INDUSTRIES --- */}
      <section id="industries" className="industries-modern-section">
        <div className="section-title-wrapper">
          <span className="section-tag">// TARGET SECTORS</span>
          <h2>Industries We Serve</h2>
        </div>
        <div className="industries-list-modern">
          {industries.map((industry, idx) => (
            <div key={idx} className="industry-row">
              <span className="row-idx">* 0{idx + 1}</span>
              <span className="row-text">{industry.name}</span>
              <div className="row-meta-icon">
                {industry.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="cta-modern">
        <div className="cta-container">
          <span className="section-tag">// WORK WITH ME</span>
          <h2>Ready to go global?</h2>
          <p>Let’s talk about your content and how I can help it shine in Spanish. From quick clips to full-length features, I’ll deliver a solution tailored to your goals—and your budget.</p>

          <div className="cta-highlight-box">
            <h4 className="cta-box-title">Do you produce any of these contents?</h4>
            <p>Let me help you reach millions of Latin American people that could enjoy your content.</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="contact-modern-section">
        <div className="contact-grid">
          <div className="contact-info-block">
            <span className="section-tag">// CONNECT</span>
            <h2>Contact Details</h2>
          </div>
          <div className="contact-links-block">
            <a href="mailto:camila.terminiello.translator@gmail.com" className="contact-row-link link-email">
              <Mail className="contact-icon" />
              <span className="contact-label">Email:</span>
              <span className="contact-value">camila.terminiello.translator@gmail.com</span>
            </a>

            <a href="https://wa.me/542235565576" target="_blank" rel="noreferrer" className="contact-row-link link-phone">
              <Phone className="contact-icon" />
              <span className="contact-label">WhatsApp:</span>
              <span className="contact-value">
                +54 223 556-5576 <span className="timezone-badge">GMT-3</span>
              </span>
            </a>

            <a href="https://www.linkedin.com/in/camilaterminiello01" target="_blank" rel="noreferrer" className="contact-row-link link-linkedin">
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="contact-label">LinkedIn:</span>
              <span className="contact-value">camila.terminiello.translator@gmail.com</span>
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