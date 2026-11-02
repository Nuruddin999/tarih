"use client";

import { useEffect, useId, useRef, useState } from "react";
import { people } from "@/data/chronology";
import type { HistoricalEvent, Person } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
import { PersonCard } from "./PersonCard";

export function EventCard({ event }: { event: HistoricalEvent }) {
  const [expanded, setExpanded] = useState(false);
  const [person, setPerson] = useState<Person | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const participants = [...event.participants].sort((a, b) => a.sortOrder - b.sortOrder)
    .filter(entry => people[entry.personId]);
  const detailsId = useId();

  useEffect(() => {
    if (person && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [person]);

  return <article className="event-card">
    {event.start ? <div className="event-card__dates">
      <DateLabel date={event.start} label={event.end ? "Начало" : undefined} />
      {event.end && <DateLabel date={event.end} label="Окончание" />}
    </div> : <p className="event-card__undated">Дата не уточнена</p>}
    <h3 className="event-card__heading">
      <button className="event-card__toggle" type="button" aria-expanded={expanded} aria-controls={detailsId}
        onClick={() => setExpanded(value => !value)}>
        <span>{event.title}</span>
        <svg className="event-card__chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </h3>
    {participants.length > 0 && <div className="event-card__participants">
      <span className="event-card__label">Участники:</span>
      <ul>{participants.map(entry => <li key={entry.personId}>
        <button type="button" onClick={() => setPerson(people[entry.personId])}>{people[entry.personId].name}</button>
      </li>)}</ul>
    </div>}
    <div className="event-card__details" id={detailsId} hidden={!expanded}>
      {event.description && <p>{event.description}</p>}
      {event.dateNote && <p className="event-card__note">{event.dateNote}</p>}
      {participants.some(entry => entry.role) && <div className="event-card__roles">
        <p className="event-card__label">Роли участников</p>
        <ul>{participants.filter(entry => entry.role).map(entry => <li key={entry.personId}>
          <strong>{people[entry.personId].name}</strong> — {entry.role}
        </li>)}</ul>
      </div>}
      {!participants.length && <p className="event-card__note">Связи с карточками участников пока не добавлены.</p>}
    </div>
    <dialog className="event-person-dialog" ref={dialogRef} aria-label={person ? `Личность: ${person.name}` : "Карточка личности"}
      onClose={() => setPerson(null)} onClick={e => { if (e.target === e.currentTarget) dialogRef.current?.close(); }}>
      <div className="event-person-dialog__content">
        <form method="dialog"><button type="submit" autoFocus aria-label="Закрыть карточку личности">Закрыть ×</button></form>
        {person && <PersonCard person={person} />}
      </div>
    </dialog>
  </article>;
}
