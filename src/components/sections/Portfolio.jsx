import SectionBackground from "@/components/ui/section-background";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" aria-labelledby="portfolio-title">
      <SectionBackground />
      <div className="container">
    
        <div className="section-header">
          <div className="tag">Our Work</div>
          <h2 className="section-title" id="portfolio-title">
            Projects That <span className="gradient-text">Define Results</span>
          </h2>
          <p className="section-desc">A curated showcase of our finest digital work — from concept to launch.</p>
        </div>
    
        <div className="portfolio-grid">
    
          
          <article className="portfolio-card reveal">
            <div className="portfolio-preview">
              <div className="portfolio-browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <div className="browser-url">nexagroup.io</div>
              </div>
              <img
                src="/assets/images/portfolio-corporate.jpg"
                alt="NexaGroup Corporate Website Landing Page"
                className="portfolio-mockup"
                loading="lazy" />
              <div className="portfolio-overlay">
                <a href="#contact" className="btn btn-primary btn-sm">View Project</a>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-category">Corporate Website</div>
              <h3 className="portfolio-title">NexaGroup Corporate</h3>
              <p className="portfolio-desc">Premium corporate website with dynamic content management and multilingual support.</p>
              <a href="#contact" className="portfolio-link" aria-label="View NexaGroup Corporate project">
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
    
          
          <article className="portfolio-card reveal reveal-delay-1">
            <div className="portfolio-preview">
              <div className="portfolio-browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <div className="browser-url">luxeshop.style</div>
              </div>
              <img
                src="/assets/images/portfolio-ecommerce.jpg"
                alt="LuxeShop E-Commerce Store Landing Page"
                className="portfolio-mockup"
                loading="lazy" />
              <div className="portfolio-overlay">
                <a href="#contact" className="btn btn-primary btn-sm">View Project</a>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-category">E-Commerce</div>
              <h3 className="portfolio-title">LuxeShop E-Commerce</h3>
              <p className="portfolio-desc">Full-featured e-commerce platform with real-time inventory and seamless checkout.</p>
              <a href="#contact" className="portfolio-link" aria-label="View LuxeShop E-Commerce project">
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
    
          
          <article className="portfolio-card reveal reveal-delay-2">
            <div className="portfolio-preview">
              <div className="portfolio-browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <div className="browser-url">cloudflow.app</div>
              </div>
              <img
                src="/assets/images/portfolio-saas.jpg"
                alt="CloudFlow Dashboard Web App"
                className="portfolio-mockup"
                loading="lazy" />
              <div className="portfolio-overlay">
                <a href="#contact" className="btn btn-primary btn-sm">View Project</a>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-category">SaaS Platform</div>
              <h3 className="portfolio-title">CloudFlow Dashboard</h3>
              <p className="portfolio-desc">Analytics SaaS dashboard with real-time data visualization and team collaboration tools.</p>
              <a href="#contact" className="portfolio-link" aria-label="View CloudFlow Dashboard project">
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
    
          
          <article className="portfolio-card reveal reveal-delay-1">
            <div className="portfolio-preview">
              <div className="portfolio-browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <div className="browser-url">archedge.studio</div>
              </div>
              <img
                src="/assets/images/portfolio-architecture.jpg"
                alt="ArchEdge Architects Agency Website"
                className="portfolio-mockup"
                loading="lazy" />
              <div className="portfolio-overlay">
                <a href="#contact" className="btn btn-primary btn-sm">View Project</a>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-category">Business Website</div>
              <h3 className="portfolio-title">ArchEdge Architects</h3>
              <p className="portfolio-desc">Elegant architecture firm website showcasing projects with immersive visuals.</p>
              <a href="#contact" className="portfolio-link" aria-label="View ArchEdge Architects project">
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
    
          
          <article className="portfolio-card reveal reveal-delay-2">
            <div className="portfolio-preview">
              <div className="portfolio-browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <div className="browser-url">launchpadpro.tech</div>
              </div>
              <img
                src="/assets/images/portfolio-landing.jpg"
                alt="LaunchPad Pro Product Landing Page"
                className="portfolio-mockup"
                loading="lazy" />
              <div className="portfolio-overlay">
                <a href="#contact" className="btn btn-primary btn-sm">View Project</a>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-category">Landing Page</div>
              <h3 className="portfolio-title">LaunchPad Pro</h3>
              <p className="portfolio-desc">High-converting product launch landing page with animated storytelling.</p>
              <a href="#contact" className="portfolio-link" aria-label="View LaunchPad Pro project">
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
    
          
          <article className="portfolio-card reveal reveal-delay-3">
            <div className="portfolio-preview">
              <div className="portfolio-browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <div className="browser-url">healthtrack.life</div>
              </div>
              <img
                src="/assets/images/portfolio-wellness.jpg"
                alt="HealthTrack App Platform Showcase"
                className="portfolio-mockup"
                loading="lazy" />
              <div className="portfolio-overlay">
                <a href="#contact" className="btn btn-primary btn-sm">View Project</a>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-category">Digital Platform</div>
              <h3 className="portfolio-title">HealthTrack App</h3>
              <p className="portfolio-desc">Custom health & wellness web application with wearable device integrations.</p>
              <a href="#contact" className="portfolio-link" aria-label="View HealthTrack App project">
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
    
        </div>
      </div>
    </section>
  );
}
