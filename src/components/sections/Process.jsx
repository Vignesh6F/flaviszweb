import SectionBackground from "@/components/ui/section-background";

export default function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <SectionBackground />
      <div className="container">
    
        <div className="section-header">
          <div className="tag">How We Work</div>
          <h2 className="section-title" id="process-title">
            Our <span className="gradient-text">Working Process</span>
          </h2>
          <p className="section-desc">A streamlined, transparent process designed to deliver exceptional results on time.</p>
        </div>
    
        <div className="process-timeline" role="list">
    
          <div className="process-step reveal" role="listitem">
            <div className="process-num" aria-hidden="true">01</div>
            <h3 className="process-title">Discover</h3>
            <p className="process-desc">Understand the client's business, goals and project requirements in depth.</p>
          </div>
    
          <div className="process-step reveal reveal-delay-1" role="listitem">
            <div className="process-num" aria-hidden="true">02</div>
            <h3 className="process-title">Design</h3>
            <p className="process-desc">Create attractive, user-friendly designs aligned with the brand and goals.</p>
          </div>
    
          <div className="process-step reveal reveal-delay-2" role="listitem">
            <div className="process-num" aria-hidden="true">03</div>
            <h3 className="process-title">Develop</h3>
            <p className="process-desc">Transform approved designs into functional websites and applications.</p>
          </div>
    
          <div className="process-step reveal reveal-delay-3" role="listitem">
            <div className="process-num" aria-hidden="true">04</div>
            <h3 className="process-title">Test</h3>
            <p className="process-desc">Ensure quality, responsiveness, security and performance at every level.</p>
          </div>
    
          <div className="process-step reveal reveal-delay-4" role="listitem">
            <div className="process-num" aria-hidden="true">05</div>
            <h3 className="process-title">Launch</h3>
            <p className="process-desc">Deploy the project and make it live with zero downtime and full support.</p>
          </div>
    
          <div className="process-step reveal reveal-delay-5" role="listitem">
            <div className="process-num" aria-hidden="true">06</div>
            <h3 className="process-title">Grow</h3>
            <p className="process-desc">Support ongoing improvements, SEO and digital marketing for growth.</p>
          </div>
    
        </div>
      </div>
    </section>
  );
}
