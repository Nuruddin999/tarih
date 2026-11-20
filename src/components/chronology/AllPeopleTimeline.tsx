"use client";

import { useEffect, useState } from "react";
import { people, periods } from "@/data/chronology";
import { yearRange } from "@/lib/contemporaries";
import { uniquePeriodPeople } from "@/lib/uniquePeriodPeople";
import { DateLabel } from "./DateLabel";
import { PersonCard } from "./PersonCard";

const periodPeople = uniquePeriodPeople(periods);
const personEntries = new Map(periodPeople.flatMap(period => period.groups.flatMap(group => group.people.map(entry => [entry.personId, {
  entry,
  periodTitle: period.title,
}] as const))));
const orderedPeople = Object.values(people).sort((a, b) => {
  const aYear = yearRange(a.death.hijri)?.[0] ?? Infinity;
  const bYear = yearRange(b.death.hijri)?.[0] ?? Infinity;
  return aYear - bYear || a.name.localeCompare(b.name, "ru");
});

function PersonIcon() {
  return <span className="epoch-timeline__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" />
  </svg></span>;
}

export function AllPeopleTimeline({ focusPersonId }: { focusPersonId?: string }) {
  const [activeFocusPersonId, setActiveFocusPersonId] = useState(focusPersonId);

  useEffect(() => {
    setActiveFocusPersonId(focusPersonId ?? new URLSearchParams(window.location.search).get("person") ?? undefined);
  }, [focusPersonId]);

  useEffect(() => {
    if (!activeFocusPersonId) return;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(`timeline-person-${activeFocusPersonId}`);
      if (!target) return;
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "center",
      });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeFocusPersonId]);

  return <div className="epoch-timeline epoch-timeline--people global-people-timeline">
    <p className="epoch-timeline__note">Личности расположены по годам смерти: от ранних поколений к поздним. Нажмите на имя, чтобы открыть биографию.</p>
    <ol className="epoch-timeline__list">
      {orderedPeople.map(person => {
        const placement = personEntries.get(person.id);
        const focused = person.id === activeFocusPersonId;
        const description = placement?.entry.description ?? person.description;
        const shortDescription = description && description.length > 180 ? `${description.slice(0, 177).trimEnd()}…` : description;
        return <li id={`timeline-person-${person.id}`} className={`epoch-timeline__row global-people-timeline__row${focused ? " is-focused" : ""}`} key={person.id}>
          <div className="epoch-timeline__date"><DateLabel date={person.death} label="Год смерти" /></div>
          <div className="epoch-timeline__entry"><PersonIcon />
            <details className="epoch-timeline__person">
              <summary>
                <h3>{person.name}</h3>
                {shortDescription && <p>{shortDescription}</p>}
                <span className="global-people-timeline__era">{placement?.periodTitle ?? "Эпоха не указана"}</span>
                <span className="epoch-timeline__more">Биография <span aria-hidden="true">↓</span></span>
              </summary>
              <PersonCard person={person} description={placement?.entry.description} featured={placement?.entry.featured} />
            </details>
          </div>
        </li>;
      })}
    </ol>
  </div>;
}
