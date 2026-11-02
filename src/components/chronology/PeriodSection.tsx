"use client";

import { useState } from "react";
import { people } from "@/data/chronology";
import type { HistoricalEvent, HistoricalPeriod } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
import { PersonCard } from "./PersonCard";
import { EventCard } from "./EventCard";

export function PeriodSection({ period, periodEvents = [] }: {
  period: HistoricalPeriod;
  periodEvents?: HistoricalEvent[];
}) {
  const [view, setView] = useState<"events" | "people">(periodEvents.length > 0 ? "events" : "people");
  const peopleCount = new Set(period.groups.flatMap(group => group.people.map(entry => entry.personId))).size;
  const panelId = `period-content-${period.id}`;

  return <section id={period.id} className="timeline-period">
    <span className="timeline-period__marker" aria-hidden="true" />
    <details className="period" open>
      <summary className="period__summary">
        <DateLabel date={period.dates} large />
        <div className="period__heading">
          <div><h2>{period.title}</h2><p>{period.description}</p></div>
          <span className="period__toggle" aria-hidden="true">↓</span>
        </div>
      </summary>
      <div className="period__content">
        <div className="period-views" role="group" aria-label={`Что показать: ${period.title}`}>
          <button type="button" aria-pressed={view === "events"} aria-controls={panelId} onClick={() => setView("events")}>События <span>{periodEvents.length}</span></button>
          <button type="button" aria-pressed={view === "people"} aria-controls={panelId} onClick={() => setView("people")}>Личности <span>{peopleCount}</span></button>
        </div>
        <div id={panelId}>
          {view === "events" ? (
            periodEvents.length > 0
              ? <div className="event-list">{periodEvents.map(event => <EventCard key={event.id} event={event} />)}</div>
              : <p className="period-empty" role="status">События пока не добавлены или не найдены по текущим фильтрам.</p>
          ) : (
            period.groups.length > 0 ? period.groups.map(group => <section className="person-group" key={group.id}>
              <h3 className="person-group__title">{group.title}</h3>
              <div className="person-group__list">{group.people.map(entry => <PersonCard key={entry.personId} person={people[entry.personId]} description={entry.description} featured={entry.featured} />)}</div>
            </section>) : <p className="period-empty" role="status">Личности не найдены по текущим фильтрам.</p>
          )}
        </div>
      </div>
    </details>
  </section>;
}
