/**
 * Flaviz Web Company — Premium Digital Agency
 * JavaScript: Animations, Interactions & Scroll Behaviors
 */

'use strict';

/* ============================================================
   1. DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initServiceTabs();
  initScrollReveal();
  initCounterAnimations();
  initMetricBars();
  initFormHandler();
  initSmoothScroll();
  initActiveNavLinks();
  initParallaxOrbs();
});


/* ============================================================
   2. NAVBAR — Scroll Behaviour
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once on load
}


/* ============================================================
   3. MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  const mobileLinks = menu.querySelectorAll('.mobile-link, .btn');

  const openMenu = () => {
    toggle.classList.add('open');
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggle.classList.remove('open');
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    toggle.classList.contains('open') ? closeMenu() : openMenu();
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });
}


/* ============================================================
   4. SERVICE TABS
   ============================================================ */
function initServiceTabs() {
  const tabs = document.querySelectorAll('.service-tab');
  const panels = document.querySelectorAll('.services-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(`panel-${target}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
        // Re-trigger reveals within the new panel
        const reveals = targetPanel.querySelectorAll('.reveal');
        reveals.forEach((el, i) => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(32px)';
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
          }, 20);
        });
      }
    });
  });
}


/* ============================================================
   5. SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* ============================================================
   6. COUNTER ANIMATIONS (Hero Stats)
   ============================================================ */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  if (!counters.length) return;

  const suffixes = { 150: '+', 98: '%', 5: '+' };

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = suffixes[target] || '';
    const duration = 1800;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease out effect
      const progress = frame / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(target * eased);

      el.textContent = current + suffix;

      if (frame >= steps) {
        el.textContent = target + suffix;
        clearInterval(timer);
      }
    }, duration / steps);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}


/* ============================================================
   7. METRIC BAR ANIMATIONS (About Section)
   ============================================================ */
function initMetricBars() {
  const bars = document.querySelectorAll('.metric-fill[data-fill]');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.dataset.fill;
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 300);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => observer.observe(bar));
}


/* ============================================================
   8. CONTACT FORM HANDLER
   ============================================================ */
function initFormHandler() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const projectDesc = form.projectDesc.value.trim();

    // Simple validation
    if (!fullName || !email || !service || !projectDesc) {
      showFormError('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      showFormError('Please enter a valid email address.');
      return;
    }

    // Simulate submission
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="animation:spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
      Sending...
    `;

    // Inject spin keyframe
    if (!document.getElementById('spin-style')) {
      const style = document.createElement('style');
      style.id = 'spin-style';
      style.textContent = '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}';
      document.head.appendChild(style);
    }

    setTimeout(() => {
      showFormSuccess(form, submitBtn);
    }, 1600);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormError(message) {
  removeFormMessages();
  const err = document.createElement('p');
  err.className = 'form-error-msg';
  err.style.cssText = `
    color: #ff6b6b;
    font-size: 14px;
    margin-bottom: 12px;
    padding: 12px 16px;
    background: rgba(255,107,107,0.1);
    border: 1px solid rgba(255,107,107,0.3);
    border-radius: 8px;
  `;
  err.textContent = message;
  const form = document.getElementById('contactForm');
  form.insertBefore(err, document.getElementById('submitBtn'));
}

function showFormSuccess(form, submitBtn) {
  form.innerHTML = `
    <div style="text-align:center; padding: 40px 20px;">
      <div style="font-size:56px; margin-bottom:20px;">🎉</div>
      <h3 style="font-family:'Playfair Display',Georgia,serif; font-size:24px; font-weight:700; margin-bottom:12px; background:linear-gradient(135deg,#7B3FA0,#3B0A6B); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">
        Enquiry Sent Successfully!
      </h3>
      <p style="color:#a0a0a0; font-size:16px; line-height:1.7;">
        Thank you for reaching out! We'll review your project details and get back to you within 24 hours.
      </p>
      <a href="https://wa.me/919876543210?text=Hi%20Flaviz%20Web%20Company!%20I%20just%20submitted%20an%20enquiry." 
         target="_blank" rel="noopener noreferrer"
         style="display:inline-flex;align-items:center;gap:10px;margin-top:24px;padding:14px 28px;background:#25D366;color:white;border-radius:100px;text-decoration:none;font-weight:600;font-size:15px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Follow Up on WhatsApp
      </a>
    </div>
  `;
}

function removeFormMessages() {
  const existing = document.querySelector('.form-error-msg, .form-success-msg');
  if (existing) existing.remove();
}


/* ============================================================
   9. SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}


/* ============================================================
   10. ACTIVE NAV LINKS ON SCROLL
   ============================================================ */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: '-80px 0px -40% 0px',
    }
  );

  sections.forEach(s => observer.observe(s));
}


/* ============================================================
   11. PARALLAX ORBS (Subtle mouse follow)
   ============================================================ */
function initParallaxOrbs() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  const orbs = document.querySelectorAll('.hero-orb');
  if (!orbs.length) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = [0, 0, 0];
  let currentY = [0, 0, 0];
  const speeds = [0.015, 0.01, 0.02];
  let animFrame;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 60;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 60;
  }, { passive: true });

  const animate = () => {
    orbs.forEach((orb, i) => {
      currentX[i] += (mouseX * speeds[i] - currentX[i]) * 0.08;
      currentY[i] += (mouseY * speeds[i] - currentY[i]) * 0.08;
      orb.style.transform = `translate(${currentX[i]}px, ${currentY[i]}px)`;
    });
    animFrame = requestAnimationFrame(animate);
  };

  animate();

  // Stop animation when hero is out of view
  const hero = document.getElementById('hero');
  if (hero) {
    new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          cancelAnimationFrame(animFrame);
        } else {
          animate();
        }
      },
      { threshold: 0 }
    ).observe(hero);
  }
}


/* ============================================================
   12. PORTFOLIO CARD 3D TILT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  const cards = document.querySelectorAll('.portfolio-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -5;
      const rotY = ((x - cx) / cx) * 5;
      card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease';
      setTimeout(() => {
        card.style.transition = '';
      }, 400);
    });
  });
});


/* ============================================================
   13. TECH PILL WAVE EFFECT ON HOVER
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const techPills = document.querySelectorAll('.tech-pill');
  techPills.forEach((pill, i) => {
    pill.style.transitionDelay = `${i * 0.03}s`;
  });
});


/* ============================================================
   14. PROCESS STEP HOVER SEQUENCE
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.process-step');
  steps.forEach((step, i) => {
    step.addEventListener('mouseenter', () => {
      steps.forEach((s, j) => {
        if (j <= i) {
          s.querySelector('.process-num').style.background = 'linear-gradient(135deg, #7B3FA0, #3B0A6B)';
          s.querySelector('.process-num').style.color = 'white';
          s.querySelector('.process-num').style.borderColor = 'transparent';
        }
      });
    });

    step.addEventListener('mouseleave', () => {
      steps.forEach(s => {
        const num = s.querySelector('.process-num');
        num.style.background = '';
        num.style.color = '';
        num.style.borderColor = '';
      });
    });
  });
});


/* ============================================================
   15. SCROLL PROGRESS INDICATOR
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, #C084FC, #7B3FA0, #3B0A6B);
    z-index: 9999;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.1s linear;
    pointer-events: none;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
    progressBar.style.width = `${progress * 100}%`;
    progressBar.style.transform = 'scaleX(1)';
  }, { passive: true });
});


/* ============================================================
   16. HERO BADGE — Typing Effect
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const badge = document.querySelector('.hero-badge');
  if (!badge) return;

  const texts = [
    'Available for new projects',
    'Web Design Experts',
    'Full-Stack Developers',
    'Digital Marketing Pros',
  ];

  let currentIndex = 0;
  const textNode = badge.childNodes[badge.childNodes.length - 1];

  setInterval(() => {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(4px)';
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      badge.lastChild.textContent = ' ' + texts[currentIndex];
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }, 300);
  }, 3500);

  badge.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});
