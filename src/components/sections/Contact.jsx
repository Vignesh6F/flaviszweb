import { useState } from "react";
import SectionBackground from "@/components/ui/section-background";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("fullName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const service = formData.get("service");
    const description = formData.get("projectDesc")?.toString().trim();

    if (!name || !email || !service || !description) {
      setStatus("error:Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error:Please enter a valid email address.");
      return;
    }
    setStatus("success:Thanks for reaching out. We will review your project details and get back to you within 24 hours.");
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <SectionBackground />
      <div className="contact-bg-orb" aria-hidden="true"></div>
      <div className="container">
    
        <div className="contact-inner">
    
          
          <div className="contact-info reveal">
            <div className="tag">Get In Touch</div>
            <h2 className="contact-heading" id="contact-title">
              Have an Idea?<br />
              Let's Build<br />
              <span className="gradient-text">Something Great.</span>
            </h2>
            <p className="contact-desc">Tell us about your project. Let's discuss how we can turn your vision into a powerful digital solution.</p>
    
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">📧</div>
                <div>
                  <div className="contact-item-label">Email Us</div>
                  <div className="contact-item-value">hello@flavizweb.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">📞</div>
                <div>
                  <div className="contact-item-label">Call Us</div>
                  <div className="contact-item-value">+91 98765 43210</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">📍</div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">India — Working Globally</div>
                </div>
              </div>
            </div>
    
            <a href="https://wa.me/919876543210?text=Hi%20Flaviz%20Web%20Company!%20I%20have%20a%20project%20idea." className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
    
          
          <div className="contact-form reveal reveal-delay-2">
            <form id="contactForm" aria-label="Project enquiry form" noValidate onSubmit={handleSubmit}>
    
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name *</label>
                  <input className="form-input" type="text" id="fullName" name="fullName" placeholder="John Doe" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input className="form-input" type="email" id="email" name="email" placeholder="john@company.com" required autoComplete="email" />
                </div>
              </div>
    
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input className="form-input" type="tel" id="phone" name="phone" placeholder="+91 98765 43210" autoComplete="tel" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="service">Service Required *</label>
                  <select className="form-select" id="service" name="service" required>
                    <option value="" disabled>Select a service</option>
                    <option value="web-design">Website Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="full-stack">Full-Stack Development</option>
                    <option value="ecommerce">E-Commerce Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo">SEO</option>
                    <option value="branding">Branding</option>
                    <option value="complete">Complete Digital Package</option>
                  </select>
                </div>
              </div>
    
              <div className="form-group">
                <label className="form-label" htmlFor="budget">Project Budget</label>
                <select className="form-select" id="budget" name="budget">
                  <option value="" disabled>Select budget range</option>
                  <option value="under-1k">Under ₹50,000</option>
                  <option value="1k-5k">₹50,000 – ₹2,00,000</option>
                  <option value="5k-10k">₹2,00,000 – ₹5,00,000</option>
                  <option value="10k-50k">₹5,00,000 – ₹20,00,000</option>
                  <option value="over-50k">₹20,00,000+</option>
                </select>
              </div>
    
              <div className="form-group">
                <label className="form-label" htmlFor="projectDesc">Project Description *</label>
                <textarea className="form-textarea" id="projectDesc" name="projectDesc" placeholder="Tell us about your project, your goals, timeline, and any specific requirements..." required></textarea>
              </div>
    
              {status && <p className={status.startsWith("error:") ? "form-error-msg" : "form-success-msg"} role="status">{status.replace(/^(error:|success:)/, "")}</p>}

              <button type="submit" className="btn btn-primary form-submit" id="submitBtn" disabled={status.startsWith("success:")}>
                {status.startsWith("success:") ? "Enquiry Sent" : "Send Project Enquiry"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
              </button>
    
            </form>
          </div>
    
        </div>
      </div>
    </section>
  );
}
