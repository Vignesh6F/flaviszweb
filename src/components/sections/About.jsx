import SectionBackground from "@/components/ui/section-background";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <SectionBackground />
      <div className="container">
        <div className="about-inner">
    
          <div className="about-content reveal">
            <div className="tag">About Flaviz Web Company</div>
            <h2 className="about-title" id="about-title">
              Creativity Meets<br />
              <span className="gradient-text">Technology.</span>
            </h2>
            <p className="about-desc">
              We are a digital solutions team passionate about creating meaningful online experiences. We combine creative design, modern development technologies and digital marketing strategies to help businesses build their digital presence and achieve sustainable growth.
            </p>
    
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon" aria-hidden="true">🎯</div>
                <div className="about-feature-text">
                  <strong>Goal-Oriented Approach</strong>
                  <span>We align every design and development decision with your business goals.</span>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon" aria-hidden="true">🤝</div>
                <div className="about-feature-text">
                  <strong>Collaborative Partnership</strong>
                  <span>Transparent communication and close collaboration throughout every project.</span>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon" aria-hidden="true">📐</div>
                <div className="about-feature-text">
                  <strong>Pixel-Perfect Standards</strong>
                  <span>We obsess over details so your digital presence stands out from the crowd.</span>
                </div>
              </div>
            </div>
    
            <a href="#contact" className="btn btn-primary">Work With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
    
          <div className="about-visual reveal reveal-delay-2">
            <div className="about-cards-stack" aria-label="Company metrics">
    
              <div className="about-metric-card amc-1">
                <div className="metric-value" data-count-metric="150">150+</div>
                <div className="metric-label">Successful Projects Delivered</div>
                <div className="metric-bar">
                  <div className="metric-fill" style={{width: "0%"}} data-fill="92%"></div>
                </div>
              </div>
    
              <div className="about-metric-card amc-2">
                <div className="metric-value" data-count-metric="98">98%</div>
                <div className="metric-label">Client Satisfaction Rate</div>
                <div className="metric-bar">
                  <div className="metric-fill" data-fill="98%" style={{width: "0%", background: "linear-gradient(90deg,#3B0A6B,#9B59B6)"}}></div>
                </div>
              </div>
    
              <div className="about-metric-card amc-3">
                <div className="metric-value" data-count-metric="5">5+</div>
                <div className="metric-label">Years of Digital Excellence</div>
                <div className="metric-bar">
                  <div className="metric-fill" data-fill="75%" style={{width: "0%", background: "linear-gradient(90deg,#9B59B6,#6C3483)"}}></div>
                </div>
              </div>
    
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
}
