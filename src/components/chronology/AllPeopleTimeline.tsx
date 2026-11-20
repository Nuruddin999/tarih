"use client";

import { useEffect, useState } from "react";
import { people, periods } from "@/data/chronology";
import { uniquePeriodPeople } from "@/lib/uniquePeriodPeople";
import { PersonCard } from "./PersonCard";

const timeline = uniquePeriodPeople(periods);
const assignedPeople = new Set(timeline.flatMap(period => period.groups.flatMap(group => group.people.map(entry => entry.personId))));
const unassignedPeople = Object.values(people).filter(person => !assignedPeople.has(person.id)).sort((a, b) => a.name.localeCompare(b.name, "ru"));

export function AllPeopleTimeline({ focusPersonId }: { focusPersonId?: string }) {
  const [activeFocusPersonId, setActiveFocusPersonId] = useState(focusPersonId);

  useEffect(() => {
    if (focusPersonId) {
      setActiveFocusPersonId(focusPersonId);
      return;
    }
    setActiveFocusPersonId(new URLSearchParams(window.location.search).get("person") ?? undefined);
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

  return <div className="all-people-timeline">
    {timeline.map(period => <section className="all-people-period" key={period.id}>
      <header className="all-people-period__heading"><p>{period.dates.hijri}{period.dates.gregorian && ` · ${period.dates.gregorian}`}</p><h2>{period.title}</h2></header>
      {period.groups.map(group => <section className="all-people-group" key={group.id}>
        {period.groups.length > 1 && <h3>{group.title}</h3>}
        <div className="person-group__list">{group.people.map(entry => {
          const person = people[entry.personId];
          if (!person) return null;
          const focused = person.id === activeFocusPersonId;
          return <div id={`timeline-person-${person.id}`} className={`all-people-timeline__person${focused ? " is-focused" : ""}`} key={person.id}>
            <PersonCard person={person} description={entry.description} featured={entry.featured} />
          </div>;
        })}</div>
      </section>)}
    </section>)}
    {unassignedPeople.length > 0 && <section className="all-people-period all-people-period--unassigned">
      <header className="all-people-period__heading"><h2>Личности без установленной эпохи</h2></header>
      <div className="person-group__list">{unassignedPeople.map(person => <div id={`timeline-person-${person.id}`} className={`all-people-timeline__person${person.id === activeFocusPersonId ? " is-focused" : ""}`} key={person.id}><PersonCard person={person} /></div>)}</div>
    </section>}
  </div>;
}
