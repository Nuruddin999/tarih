"use client";

import { useEffect, useRef, useState } from "react";

type PeriodLink = { id: string; title: string };

export function MobilePeriodNavigation({ periods }: { periods: PeriodLink[] }) {
  const [activeId, setActiveId] = useState("");
  const navigationRef = useRef<HTMLElement>(null);
  const periodIds = periods.map(period => period.id).join(" ");

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!media.matches) return;
      const sections = periodIds.split(" ").map(id => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
      const threshold = (navigationRef.current?.offsetHeight ?? 68) + 12;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section;
        else break;
      }
      setActiveId(current?.id ?? "");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    const results = navigationRef.current?.parentElement;
    if (results) observer.observe(results);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [periodIds]);

  useEffect(() => {
    const navigation = navigationRef.current;
    const active = Array.from(navigation?.querySelectorAll("a") ?? []).find(link => link.getAttribute("href") === `#${activeId}`);
    if (!navigation || !active) return;
    const viewport = navigation.getBoundingClientRect();
    const item = active.getBoundingClientRect();
    if (item.left < viewport.left || item.right > viewport.right) {
      navigation.scrollTo({ left: navigation.scrollLeft + item.left - viewport.left - (viewport.width - item.width) / 2,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  }, [activeId]);

  if (!periods.length) return null;
  return <nav ref={navigationRef} className="mobile-period-strip" aria-label="Переход к эпохе">
    {periods.map(period => <a key={period.id} href={`#${period.id}`} aria-current={activeId === period.id ? "location" : undefined}
      onClick={event => {
        event.preventDefault();
        const section = document.getElementById(period.id);
        if (!section) return;
        section.querySelector("details")?.setAttribute("open", "");
        const top = window.scrollY + section.getBoundingClientRect().top - (navigationRef.current?.offsetHeight ?? 68) - 12;
        window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }}>{period.title}</a>)}
  </nav>;
}
