"use client";

import { people } from "@/data/chronology";
import { yearRange } from "@/lib/contemporaries";
import type { HistoricalEvent, HistoricalPeriod } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
import { EventCard } from "./EventCard";
import { PersonCard } from "./PersonCard";

function TimelineIcon({ person = false }: { person?: boolean }) {
  return <span className="epoch-timeline__icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {person ? <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></> : <><path d="M6 21V3m0 1c4-4 8 4 13 0v10c-5 4-9-4-13 0" /></>}
  </svg></span>;
}

export function EpochTimeline({ period, events, view }: { period: HistoricalPeriod; events: HistoricalEvent[]; view: "events" | "people" }) {
  const entries = [...new Map(period.groups.flatMap(group => group.people)
    .filter(entry => people[entry.personId]).map(entry => [entry.personId, entry])).values()]
    .sort((a, b) => (yearRange(people[a.personId].death.hijri)?.[0] ?? Infinity) - (yearRange(people[b.personId].death.hijri)?.[0] ?? Infinity));
  const orderedEvents = [...events].sort((a, b) => {
    const ay = a.start ? yearRange(a.start.hijri)?.[0] : undefined;
    const by = b.start ? yearRange(b.start.hijri)?.[0] : undefined;
    return (ay ?? Infinity) - (by ?? Infinity) || a.sortOrder - b.sortOrder;
  });
  const count = view === "events" ? events.length : entries.length;
  if (!count) return <p className="period-empty" role="status">{view === "events" ? "События" : "Личности"} пока не добавлены или не найдены по текущим фильтрам.</p>;

  return <div className={`epoch-timeline epoch-timeline--${view}`}>
    {view === "people" && <p className="epoch-timeline__note">Личности этой эпохи — по году смерти. Даты жизни указаны в биографии; неизвестные даты — в конце списка.</p>}
    <ol className="epoch-timeline__list">
      {view === "events" ? orderedEvents.map(event => <li className="epoch-timeline__row" key={event.id}>
        <div className="epoch-timeline__date">{event.start ? <DateLabel date={event.start} /> : <span>Дата не уточнена</span>}</div>
        <div className="epoch-timeline__entry"><TimelineIcon /><EventCard event={event} timeline /></div>
      </li>) : entries.map(entry => {
        const person = people[entry.personId];
        return <li className="epoch-timeline__row" key={person.id}>
          <div className="epoch-timeline__date"><DateLabel date={person.death} label="Год смерти" /></div>
          <div className="epoch-timeline__entry"><TimelineIcon person />
            <details className="epoch-timeline__person">
              <summary><h3>{person.name}</h3>{(entry.description || person.description) && <p>{entry.description || person.description}</p>}<span className="epoch-timeline__more">Биография <span aria-hidden="true">↓</span></span></summary>
              <PersonCard person={person} description={entry.description} featured={entry.featured} />
            </details>
          </div>
        </li>;
      })}
    </ol>
  </div>;
}
