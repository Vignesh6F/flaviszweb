import { useEffect } from "react";

export function useSiteEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll(".reveal");
    let revealObserver;

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("visible"));
    } else {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealItems.forEach((item) => revealObserver.observe(item));
    }

    const counters = [...document.querySelectorAll(".stat-num[data-count]")];
    let counterObserver;
    if (reducedMotion) {
      counters.forEach((item) => {
        const target = Number(item.dataset.count);
        item.textContent = `${target}${({ 150: "+", 98: "%", 5: "+" })[target] || ""}`;
      });
    } else {
      counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const item = entry.target;
          const target = Number(item.dataset.count);
          const suffix = ({ 150: "+", 98: "%", 5: "+" })[target] || "";
          const started = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - started) / 1800, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            item.textContent = `${Math.round(target * eased)}${suffix}`;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(item);
        });
      }, { threshold: 0.5 });
      counters.forEach((item) => counterObserver.observe(item));
    }

    const bars = document.querySelectorAll(".metric-fill[data-fill]");
    const metricObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.width = entry.target.dataset.fill;
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    bars.forEach((bar) => metricObserver.observe(bar));

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      metricObserver.disconnect();
    };
  }, []);
}
