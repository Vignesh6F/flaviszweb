import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 60);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    const onKeyDown = (event) => { if (event.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      document.removeEventListener("keydown", onKeyDown);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header id="navbar" className={scrolled ? "scrolled" : ""} role="banner" aria-label="Main navigation">
        <div className="container">
          <nav className="nav-inner" aria-label="Site navigation">
      
            
            <a href="#hero" className="nav-logo" aria-label="Flaviz Web Company Home">
              <div className="logo-mark" aria-hidden="true">F</div>
              <span className="logo-text">Flaviz <span>Web Company</span></span>
            </a>
      
            
            <ul className="nav-links" role="list">
              <li><a href="#hero" className={activeSection === "hero" ? "active" : ""}>Home</a></li>
              <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
              <li><a href="#services" className={activeSection === "services" ? "active" : ""}>Services</a></li>
              <li><a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>Portfolio</a></li>
              <li><a href="#process" className={activeSection === "process" ? "active" : ""}>Our Process</a></li>
              <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
            </ul>
      
            
            <div className="nav-cta">
              <a href="#contact" className="btn btn-primary btn-sm" id="nav-cta-btn">
                Let's Talk
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
      
            <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>
      
      <nav className={menuOpen ? "mobile-menu open" : "mobile-menu"} id="mobileMenu" aria-label="Mobile navigation">
        <a href="#hero" onClick={closeMenu} className="mobile-link">Home</a>
        <a href="#about" onClick={closeMenu} className="mobile-link">About</a>
        <a href="#services" onClick={closeMenu} className="mobile-link">Services</a>
        <a href="#portfolio" onClick={closeMenu} className="mobile-link">Portfolio</a>
        <a href="#process" onClick={closeMenu} className="mobile-link">Our Process</a>
        <a href="#contact" onClick={closeMenu} className="mobile-link">Contact</a>
        <a href="#contact" onClick={closeMenu} className="btn btn-primary" style={{marginTop: "16px", width: "100%", justifyContent: "center"}}>Let's Talk</a>
      </nav>
    </>
  );
}
