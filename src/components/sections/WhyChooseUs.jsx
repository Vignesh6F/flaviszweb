import SectionBackground from "@/components/ui/section-background";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section" aria-labelledby="why-title">
      <SectionBackground />
      <div className="container">
    
        <div className="section-header">
          <div className="tag">Why Flaviz Web Company</div>
          <h2 className="section-title" id="why-title">
            What Sets Us <span className="gradient-text">Apart</span>
          </h2>
          <p className="section-desc">We don't just build websites — we craft digital solutions designed to perform.</p>
        </div>
    
        <div className="why-grid">
          <div className="why-card reveal">
            <div className="why-icon why-icon-blue" aria-hidden="true">🧩</div>
            <h3 className="why-title">Complete Digital Solutions</h3>
            <p className="why-desc">From initial design to development and digital marketing, we bring everything together under one roof — so you get a cohesive, powerful digital presence.</p>
          </div>
    
          <div className="why-card reveal reveal-delay-2">
            <div className="why-icon why-icon-purple" aria-hidden="true">⚡</div>
            <h3 className="why-title">Performance & Speed</h3>
            <p className="why-desc">We build fast, responsive and optimized digital experiences that load instantly, rank higher, and convert visitors into loyal customers.</p>
          </div>
    
          <div className="why-card reveal reveal-delay-3">
            <div className="why-icon why-icon-yellow" aria-hidden="true">💡</div>
            <h3 className="why-title">Quality & Innovation</h3>
            <p className="why-desc">We combine creativity, modern technology and strategic thinking to deliver quality solutions that set your business apart from the competition.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
