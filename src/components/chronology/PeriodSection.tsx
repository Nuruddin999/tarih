"use client";

import { useEffect, useState } from "react";
import { people } from "@/data/chronology";
import { yearRange } from "@/lib/contemporaries";
import type { HistoricalEvent, HistoricalPeriod } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
import { PersonCard } from "./PersonCard";
import { EventCard } from "./EventCard";

export function PeriodSection({ period, periodEvents = [] }: {
  period: HistoricalPeriod;
  periodEvents?: HistoricalEvent[];
}) {
  const [view, setView] = useState<"events" | "people">(periodEvents.length > 0 ? "events" : "people");
  const [linkStatus, setLinkStatus] = useState("");
  useEffect(() => {
    if (!linkStatus) return;
    const timer = window.setTimeout(() => setLinkStatus(""), 3000);
    return () => window.clearTimeout(timer);
  }, [linkStatus]);

  const peopleCount = new Set(period.groups.flatMap(group => group.people.map(entry => entry.personId))).size;
  const chronologicalPeople = period.id === "prophetic-era"
    ? [...new Map(period.groups.flatMap(group => group.people)
        .filter(entry => people[entry.personId])
        .map(entry => [entry.personId, entry])).values()]
        .sort((a, b) => {
          const aYear = yearRange(people[a.personId].death.hijri)?.[0] ?? Infinity;
          const bYear = yearRange(people[b.personId].death.hijri)?.[0] ?? Infinity;
          return aYear < bYear ? -1 : aYear > bYear ? 1 : 0;
        })
    : null;
  const panelId = `period-content-${period.id}`;

  return <section id={period.id} className="timeline-period">
    <span className="timeline-period__marker" aria-hidden="true" />
    <details className="period" open>
      <summary className="period__summary">
        <DateLabel date={period.dates} large />
        <div className="period__heading">
          <div className="period__heading-content">
            <div className="period__title-row">
              <h2><a href={`#${period.id}`} onClick={event => {
                event.stopPropagation();
                document.getElementById(period.id)?.querySelector("details")?.setAttribute("open", "");
              }}>{period.title}</a></h2>
              <button className="period__copy-link" type="button" aria-label={`Скопировать ссылку: ${period.title}`}
                title="Скопировать ссылку на эпоху" onClick={async event => {
                  event.preventDefault();
                  event.stopPropagation();
                  const url = new URL(window.location.href);
                  url.search = "";
                  url.hash = period.id;
                  try {
                    await navigator.clipboard.writeText(url.href);
                    setLinkStatus("Ссылка скопирована");
                  } catch {
                    setLinkStatus("Для копирования используйте ссылку в названии эпохи");
                  }
                }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m10 13 4-4m-6 6-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 3 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0"
                    transform="translate(1 1)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <span className="period__link-status" role="status">{linkStatus}</span>
            <p>{period.description}</p>
          </div>
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
            chronologicalPeople ? (
              chronologicalPeople.length > 0
                ? <div className="person-group__list">{chronologicalPeople.map(entry => <PersonCard key={entry.personId} person={people[entry.personId]} description={entry.description} featured={entry.featured} />)}</div>
                : <p className="period-empty" role="status">Личности не найдены по текущим фильтрам.</p>
            ) : period.groups.length > 0 ? period.groups.map(group => <section className="person-group" key={group.id}>
              <h3 className="person-group__title">{group.title}</h3>
              <div className="person-group__list">{group.people.map(entry => <PersonCard key={entry.personId} person={people[entry.personId]} description={entry.description} featured={entry.featured} />)}</div>
            </section>) : <p className="period-empty" role="status">Личности не найдены по текущим фильтрам.</p>
          )}
        </div>
      </div>
    </details>
  </section>;
}
