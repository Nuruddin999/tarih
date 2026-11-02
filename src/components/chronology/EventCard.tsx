"use client";

import { useEffect, useRef, useState } from "react";
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
  const visible = expanded ? participants : participants.slice(0, 5);
  const listId = `event-participants-${event.id}`;

  useEffect(() => {
    if (person && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [person]);

  return <article className="event-card">
    {event.start ? <div className="event-card__dates">
      <DateLabel date={event.start} label={event.end ? "Начало" : undefined} />
      {event.end && <DateLabel date={event.end} label="Окончание" />}
    </div> : <p className="event-card__undated">Дата не уточнена</p>}
    <details className="event-card__details">
      <summary><h3>{event.title}</h3><span>Описание и источники</span></summary>
      {event.description && <p>{event.description}</p>}
      {event.dateNote && <p className="event-card__note">{event.dateNote}</p>}
      <ul className="event-card__sources" aria-label="Источники события">
        {event.sources.map((source, index) => <li key={index}>
          {source.url ? <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a> : source.title}
          {source.author && ` · ${source.author}`}
          {source.chapter && ` · ${source.chapter}`}
          {source.volume && ` · том ${source.volume}`}
          {source.page && ` · с. ${source.page}`}
          {source.timestamp && ` · ${source.timestamp}`}
        </li>)}
      </ul>
    </details>
    <div className="event-card__participants">
      <p className="event-card__label">Участники</p>
      {participants.length ? <>
        <ul id={listId}>{visible.map(entry => <li key={entry.personId}>
          <button type="button" onClick={() => setPerson(people[entry.personId])}>{people[entry.personId].name}</button>
          {entry.role && <span>{entry.role}</span>}
        </li>)}</ul>
        {participants.length > 5 && <button className="event-card__more" type="button" aria-expanded={expanded} aria-controls={listId} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Свернуть участников" : `Все участники · ${participants.length}`}
        </button>}
        <p className="event-card__note">Список участников дополняется по источникам.</p>
      </> : <p className="event-card__note">Связи с карточками участников пока не добавлены.</p>}
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
