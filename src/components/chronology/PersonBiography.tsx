"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import type { Person } from "@/types/chronology";
import { PersonCard } from "./PersonCard";

type Props = {
  person: Person;
  description?: string;
  featured?: boolean;
};

export function PersonBiography({ person, description, featured = false }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const backdrop = dialog?.querySelector<HTMLElement>(".person-biography-dialog__backdrop");
    const panel = dialog?.querySelector<HTMLElement>(".person-biography-dialog__panel");
    if (!dialog || !backdrop || !panel) return;

    dialog.showModal();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeline = gsap.timeline({ paused: true });
    timeline
      .fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: reducedMotion ? 0.01 : 0.24, ease: "power1.out" }, 0)
      .fromTo(panel, { y: reducedMotion ? 0 : 24, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        duration: reducedMotion ? 0.01 : 0.36,
        ease: "power3.out"
      }, 0);
    animationRef.current = timeline;
    timeline.play();

    return () => {
      timeline.kill();
      animationRef.current = null;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  function closeBiography() {
    const dialog = dialogRef.current;
    const timeline = animationRef.current;
    if (!dialog?.open || !timeline) {
      setIsOpen(false);
      return;
    }

    timeline.eventCallback("onReverseComplete", () => {
      if (dialog.open) dialog.close();
      animationRef.current = null;
      setIsOpen(false);
    });
    timeline.reverse();
  }

  return <>
    <div className="epoch-timeline__person">
      <h3>{person.name}</h3>
      {(description || person.description) && <p>{description || person.description}</p>}
      <button className="epoch-timeline__more" type="button" onClick={() => setIsOpen(true)}>
        Биография
      </button>
    </div>
    {isOpen && <dialog
      ref={dialogRef}
      className="person-biography-dialog"
      aria-labelledby={`person-biography-title-${person.id}`}
      onCancel={event => { event.preventDefault(); closeBiography(); }}
    >
      <div className="person-biography-dialog__panel">
        <div className="person-biography-dialog__backdrop" aria-hidden="true" />
        <header className="person-biography-dialog__header">
          <h2 id={`person-biography-title-${person.id}`}>Биография</h2>
          <button className="person-biography-dialog__close" type="button" aria-label="Закрыть биографию" onClick={closeBiography}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </header>
        <div className="person-biography-dialog__body">
          <PersonCard person={person} description={description} featured={featured} contemporariesAsContent />
        </div>
      </div>
    </dialog>}
  </>;
}
