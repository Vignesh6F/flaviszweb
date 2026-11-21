export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title">
    
      
      <div className="hero-bg" aria-hidden="true">
        <video className="hero-video-bg" autoPlay muted loop playsInline preload="metadata">
          <source src="/assets/videos/Panther_morphing_into_robot_2f88bf75.mp4" type="video/mp4" />
        </video>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
    
      </div>
    
      <div className="container">
        <div className="hero-inner">
    
          
          <div className="hero-content">
            <div className="hero-badge" aria-label="Status indicator">
              <span className="dot" aria-hidden="true"></span>
              Available for new projects
            </div>
    
            <h1 className="hero-title" id="hero-title">
              <span className="line">We Build</span>
              <span className="line grad">Digital Experiences</span>
              <span className="line">That Grow</span>
              <span className="line accent">Businesses.</span>
            </h1>
    
            <p className="hero-desc">
              From creative website design to powerful web development and result-driven digital marketing, we help businesses transform their ideas into meaningful digital experiences.
            </p>
    
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary" id="hero-cta-primary">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#portfolio" className="btn btn-secondary" id="hero-cta-secondary">
                Explore Our Work
              </a>
            </div>
    
            <div className="hero-stats" aria-label="Company statistics">
              <div className="stat-item">
                <div className="stat-num" data-count="150">0</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" data-count="98">0</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" data-count="5">0</div>
                <div className="stat-label">Years of Expertise</div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    
    </section>
  );
}
