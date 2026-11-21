import { useEffect, useState } from "react";
import SectionBackground from "@/components/ui/section-background";

export default function Services() {
  const [activeTab, setActiveTab] = useState("design");

  useEffect(() => {
    document.querySelectorAll(`#panel-${activeTab} .reveal`).forEach((item) => {
      item.classList.add("visible");
    });
  }, [activeTab]);

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <SectionBackground />
      <div className="container">
    
        <div className="section-header">
          <div className="tag">What We Do</div>
          <h2 className="section-title" id="services-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-desc">End-to-end digital services crafted to transform your business online.</p>
        </div>
    
        
        <div className="services-tabs" role="tablist" aria-label="Service categories">
          <button className={activeTab === "design" ? "service-tab active" : "service-tab"} data-tab="design" role="tab" aria-selected={activeTab === "design"} aria-controls="panel-design" id="tab-design" onClick={() => setActiveTab("design")}>🎨 Design</button>
          <button className={activeTab === "development" ? "service-tab active" : "service-tab"} data-tab="development" role="tab" aria-selected={activeTab === "development"} aria-controls="panel-development" id="tab-development" onClick={() => setActiveTab("development")}>⚙️ Development</button>
          <button className={activeTab === "marketing" ? "service-tab active" : "service-tab"} data-tab="marketing" role="tab" aria-selected={activeTab === "marketing"} aria-controls="panel-marketing" id="tab-marketing" onClick={() => setActiveTab("marketing")}>📈 Digital Marketing</button>
        </div>
    
        
        <div className={activeTab === "design" ? "services-panel active" : "services-panel"} id="panel-design" role="tabpanel" aria-labelledby="tab-design" hidden={activeTab !== "design"}>
          <div className="services-grid">
    
            <div className="service-card reveal">
              <div className="service-icon" aria-hidden="true">🖌️</div>
              <h3 className="service-name">UI/UX Design</h3>
              <p className="service-desc">User-centred interface design that balances aesthetics with intuitive usability and deep user research.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon" aria-hidden="true">🖥️</div>
              <h3 className="service-name">Website Design</h3>
              <p className="service-desc">Stunning, conversion-focused website designs that make powerful first impressions and represent your brand.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon" aria-hidden="true">📱</div>
              <h3 className="service-name">Responsive Web Design</h3>
              <p className="service-desc">Pixel-perfect designs that look and work flawlessly across all screen sizes and devices.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon" aria-hidden="true">🚀</div>
              <h3 className="service-name">Landing Page Design</h3>
              <p className="service-desc">High-converting landing pages built to capture leads, drive sales, and maximise campaign ROI.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon" aria-hidden="true">✨</div>
              <h3 className="service-name">Branding & Visual Identity</h3>
              <p className="service-desc">Complete brand identity systems — logos, colour palettes, typography and brand guidelines that tell your story.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
          </div>
        </div>
    
        
        <div className={activeTab === "development" ? "services-panel active" : "services-panel"} id="panel-development" role="tabpanel" aria-labelledby="tab-development" hidden={activeTab !== "development"}>
          <div className="services-grid">
    
            <div className="service-card reveal">
              <div className="service-icon" aria-hidden="true">💻</div>
              <h3 className="service-name">Frontend Development</h3>
              <p className="service-desc">Modern, performant frontends using React, Next.js and cutting-edge web technologies.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon" aria-hidden="true">🗄️</div>
              <h3 className="service-name">Backend Development</h3>
              <p className="service-desc">Robust, scalable backend systems with Node.js, Express, and secure database architectures.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon" aria-hidden="true">🔗</div>
              <h3 className="service-name">Full-Stack Development</h3>
              <p className="service-desc">Complete web applications from database to UI — we handle the entire technology stack.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon" aria-hidden="true">🛒</div>
              <h3 className="service-name">E-Commerce Development</h3>
              <p className="service-desc">Feature-rich online stores with secure payment gateways, inventory management and analytics.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon" aria-hidden="true">⚙️</div>
              <h3 className="service-name">Custom Web Applications</h3>
              <p className="service-desc">Bespoke web applications tailored to your unique business workflows and requirements.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-3">
              <div className="service-icon" aria-hidden="true">🔌</div>
              <h3 className="service-name">API Integration</h3>
              <p className="service-desc">Seamless third-party API integrations — payment gateways, CRMs, analytics platforms and more.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
          </div>
        </div>
    
        
        <div className={activeTab === "marketing" ? "services-panel active" : "services-panel"} id="panel-marketing" role="tabpanel" aria-labelledby="tab-marketing" hidden={activeTab !== "marketing"}>
          <div className="services-grid">
    
            <div className="service-card reveal">
              <div className="service-icon" aria-hidden="true">🔍</div>
              <h3 className="service-name">Search Engine Optimisation</h3>
              <p className="service-desc">Data-driven SEO strategies that boost your organic rankings, traffic and long-term visibility.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon" aria-hidden="true">📊</div>
              <h3 className="service-name">Google Ads Management</h3>
              <p className="service-desc">Targeted paid advertising campaigns that deliver measurable ROI and qualified leads.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon" aria-hidden="true">📱</div>
              <h3 className="service-name">Social Media Marketing</h3>
              <p className="service-desc">Strategic social media presence that builds brand awareness, community and customer loyalty.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon" aria-hidden="true">✍️</div>
              <h3 className="service-name">Content Marketing</h3>
              <p className="service-desc">Compelling content strategies that attract, engage and convert your ideal audience.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon" aria-hidden="true">📉</div>
              <h3 className="service-name">Website Analytics</h3>
              <p className="service-desc">In-depth analytics setup and reporting — understand your visitors and optimise for growth.</p>
              <a href="#contact" className="service-link">Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
    
          </div>
        </div>
    
      </div>
    </section>
  );
}
