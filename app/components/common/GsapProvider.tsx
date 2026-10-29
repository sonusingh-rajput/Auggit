import { useEffect } from "react";
import { useLocation } from "react-router";

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let isCancelled = false;
    let ctx: { revert: () => void } | undefined;
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;

    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([gsapModule, scrollTriggerModule]) => {
      if (isCancelled) return;

      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Check prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // Configure default GSAP settings
      gsap.defaults({
        ease: "power3.out",
        duration: 0.8,
      });

      ctx = gsap.context(() => {
        // 1. Reveal Section Titles & Subheadings
        const headings = document.querySelectorAll<HTMLElement>(
          "section h2, section h3, .gsap-heading"
        );
        headings.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });

        // 2. Reveal Individual Cards & Elements
        const cards = document.querySelectorAll<HTMLElement>(
          ".gsap-card, .gsap-reveal"
        );
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });

        // 3. Staggered Container Items
        const staggerContainers = document.querySelectorAll<HTMLElement>(
          ".gsap-stagger-container"
        );
        staggerContainers.forEach((container) => {
          const items = container.children;
          if (items.length > 0) {
            gsap.fromTo(
              items,
              { opacity: 0, y: 32 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: container,
                  start: "top 85%",
                  toggleActions: "play none none none",
                  once: true,
                },
              }
            );
          }
        });
      });

      // Refresh ScrollTrigger positions after layout stabilizes
      refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    });

    return () => {
      isCancelled = true;
      if (refreshTimer) clearTimeout(refreshTimer);
      if (ctx) ctx.revert();
    };
  }, [location.pathname]);

  return <>{children}</>;
}

