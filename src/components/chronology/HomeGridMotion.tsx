"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export function HomeGridMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const grid = entry.target;
        observer.unobserve(grid);
        const cards = grid.querySelectorAll<HTMLElement>(":scope > .epoch-card, :scope > .collection-card");
        gsap.fromTo(cards,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.075, ease: "power2.out", clearProps: "transform,opacity,visibility" }
        );
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    document.querySelectorAll<HTMLElement>(".home-page .epoch-grid, .home-page .collection-grid").forEach(grid => observer.observe(grid));
    return () => observer.disconnect();
  }, []);

  return null;
}
