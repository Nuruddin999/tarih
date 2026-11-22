"use client";

import { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { people } from "@/data/chronology";
import type { HistoricalEvent, Person } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
import { PersonCard } from "./PersonCard";

export function EventCard({ event, timeline = false }: { event: HistoricalEvent; timeline?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [person, setPerson] = useState<Person | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const personDialogRef = useRef<HTMLDialogElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const titleId = useId();
  const participants = [...event.participants].sort((a, b) => a.sortOrder - b.sortOrder)
    .filter(entry => people[entry.personId]);

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

  useEffect(() => {
    if (person && !personDialogRef.current?.open) personDialogRef.current?.showModal();
  }, [person]);

  function closeEvent() {
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

  return <article className="event-card">
    {!timeline && (event.start ? <div className="event-card__dates">
      <DateLabel date={event.start} label={event.end ? "Начало" : undefined} />
      {event.end && <DateLabel date={event.end} label="Окончание" />}
    </div> : <p className="event-card__undated">Дата не уточнена</p>)}

    <h3 className="event-card__heading">{event.title}</h3>
    <button className="epoch-timeline__more event-card__more" type="button" aria-haspopup="dialog"
      onClick={() => setIsOpen(true)}>
      Подробнее
    </button>

    {isOpen && <dialog
      className="person-biography-dialog event-biography-dialog"
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={e => { e.preventDefault(); closeEvent(); }}
    >
      <div className="person-biography-dialog__backdrop" aria-hidden="true" onClick={closeEvent} />
      <div className="person-biography-dialog__panel">
        <header className="person-biography-dialog__header">
          <h2 id={titleId}>{event.title}</h2>
          <button className="person-biography-dialog__close" type="button" aria-label="Закрыть событие" onClick={closeEvent}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </header>
        <div className="person-biography-dialog__body">
          <article className="event-modal__content">
            <div className="event-modal__dates">
              {event.start ? <>
                <DateLabel date={event.start} label={event.end ? "Начало" : undefined} />
                {event.end && <DateLabel date={event.end} label="Окончание" />}
              </> : <p className="event-card__undated">Дата не уточнена</p>}
            </div>
            {event.description && <p className="event-modal__description">{event.description}</p>}
            {event.dateNote && <p className="event-modal__note">{event.dateNote}</p>}
            {participants.length > 0 && <section className="event-modal__participants">
              <h3>Участники</h3>
              <ul>{participants.map(entry => <li key={entry.personId}>
                <button type="button" onClick={() => setPerson(people[entry.personId])}>{people[entry.personId].name}</button>
              </li>)}</ul>
            </section>}
            {participants.some(entry => entry.role) && <section className="event-modal__roles">
              <h3>Роли участников</h3>
              <ul>{participants.filter(entry => entry.role).map(entry => <li key={entry.personId}>
                <strong>{people[entry.personId].name}</strong> — {entry.role}
              </li>)}</ul>
            </section>}
            {!participants.length && <p className="event-modal__note">Связи с карточками участников пока не добавлены.</p>}
          </article>
        </div>
      </div>
    </dialog>}

    <dialog className="event-person-dialog" ref={personDialogRef}
      aria-label={person ? `Личность: ${person.name}` : "Карточка личности"}
      onClose={() => setPerson(null)}>
      <div className="event-person-dialog__content">
        <form method="dialog"><button type="submit" autoFocus aria-label="Закрыть карточку личности">Закрыть ×</button></form>
        {person && <PersonCard person={person} />}
      </div>
    </dialog>
  </article>;
}
