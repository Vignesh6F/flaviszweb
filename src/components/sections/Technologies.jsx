import SectionBackground from "@/components/ui/section-background";

export default function Technologies() {
  return (
    <section id="technologies" className="section" aria-labelledby="tech-title">
      <SectionBackground />
      <div className="container">
    
        <div className="section-header">
          <div className="tag">Our Stack</div>
          <h2 className="section-title" id="tech-title">
            Technologies We <span className="gradient-text">Use</span>
          </h2>
          <p className="section-desc">We work with modern, proven technologies to build fast, scalable and reliable digital solutions.</p>
        </div>
    
        <div className="tech-categories reveal">
    
          <div className="tech-category">
            <div className="tech-category-title">Frontend</div>
            <div className="tech-pills" role="list">
              <div className="tech-pill" role="listitem"><span>⚛️</span> React.js</div>
              <div className="tech-pill" role="listitem"><span>▲</span> Next.js</div>
              <div className="tech-pill" role="listitem"><span>🅰️</span> Angular</div>
              <div className="tech-pill" role="listitem"><span>🌐</span> HTML5</div>
              <div className="tech-pill" role="listitem"><span>🎨</span> CSS3</div>
              <div className="tech-pill" role="listitem"><span>🟡</span> JavaScript</div>
            </div>
          </div>
    
          <div className="tech-category">
            <div className="tech-category-title">Backend</div>
            <div className="tech-pills" role="list">
              <div className="tech-pill" role="listitem"><span>🟢</span> Node.js</div>
              <div className="tech-pill" role="listitem"><span>🚂</span> Express.js</div>
            </div>
          </div>
    
          <div className="tech-category">
            <div className="tech-category-title">Database</div>
            <div className="tech-pills" role="list">
              <div className="tech-pill" role="listitem"><span>🍃</span> MongoDB</div>
              <div className="tech-pill" role="listitem"><span>🐘</span> PostgreSQL</div>
              <div className="tech-pill" role="listitem"><span>🐬</span> MySQL</div>
            </div>
          </div>
    
          <div className="tech-category">
            <div className="tech-category-title">Cloud & DevOps</div>
            <div className="tech-pills" role="list">
              <div className="tech-pill" role="listitem"><span>☁️</span> AWS</div>
              <div className="tech-pill" role="listitem"><span>🐳</span> Docker</div>
              <div className="tech-pill" role="listitem"><span>🔧</span> Jenkins</div>
              <div className="tech-pill" role="listitem"><span>🐧</span> Linux</div>
            </div>
          </div>
    
          <div className="tech-category">
            <div className="tech-category-title">Marketing & Analytics</div>
            <div className="tech-pills" role="list">
              <div className="tech-pill" role="listitem"><span>📊</span> Google Analytics</div>
              <div className="tech-pill" role="listitem"><span>📢</span> Google Ads</div>
              <div className="tech-pill" role="listitem"><span>🔍</span> Search Console</div>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
}
