"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { people, periods } from "@/data/chronology";
import { events } from "@/data/events";
import { uniquePeriodPeople } from "@/lib/uniquePeriodPeople";
import { DateLabel } from "./DateLabel";

const assignedPeriods = uniquePeriodPeople(periods);
const normalize = (value: string) => value.toLocaleLowerCase("ru").replaceAll("ё", "е");

export function EpochDirectory() {
  const [query, setQuery] = useState("");
  // Keep previously shared epoch anchors working after the move to separate pages.
  useEffect(() => {
    const follow = () => {
      const id = window.location.hash.slice(1);
      if (periods.some(period => period.id === id)) window.location.replace(`/epochs/${id}/`);
    };
    follow();
    window.addEventListener("hashchange", follow);
    return () => window.removeEventListener("hashchange", follow);
  }, []);
  const search = normalize(query.trim());
  const results = search ? assignedPeriods.flatMap(period => [
    ...period.groups.flatMap(group => group.people).filter(entry => {
      const person = people[entry.personId];
      return person && normalize(`${person.name} ${person.cities.join(" ")}`).includes(search);
    }).map(entry => ({ key: entry.personId, title: people[entry.personId].name, period, type: "Личность" })),
    ...events.filter(event => event.periodId === period.id && normalize(`${event.title} ${event.description ?? ""}`).includes(search))
      .map(event => ({ key: event.id, title: event.title, period, type: "Событие" })),
  ]) : [];
  return <>
    <section className="directory-search" aria-label="Общий поиск">
      <label htmlFor="global-search">Поиск по всем эпохам</label>
      <input id="global-search" type="search" placeholder="Имя, город или событие" value={query} onChange={event => setQuery(event.target.value)} />
      {search && <><div className="directory-search__status"><span role="status">Найдено: {results.length}</span><button type="button" onClick={() => setQuery("")}>Очистить</button></div>
        <ul className="directory-search__results">{results.map(result => <li key={`${result.type}-${result.key}`}><Link href={`/epochs/${result.period.id}/?view=${result.type === "Личность" ? "people" : "events"}&q=${encodeURIComponent(result.title)}`}><strong>{result.title}</strong><span>{result.type} · {result.period.title}</span></Link></li>)}</ul>
        {results.length === 0 && <p>Попробуйте другое имя, город или название события.</p>}</>}
    </section>
    <section id="epochs" aria-labelledby="epochs-title">
      <div className="directory-heading"><div><p className="eyebrow">От эпохи к эпохе</p><h2 id="epochs-title">Выберите период истории</h2></div><Link href="/chronology/">Полная лента →</Link></div>
      <div className="epoch-grid">{assignedPeriods.map((period, index) => <Link className="epoch-card" href={`/epochs/${period.id}/`} key={period.id}>
        <div className="epoch-card__top"><span className="epoch-card__number">{String(index + 1).padStart(2, "0")}</span><DateLabel date={period.dates} /></div>
        <h3>{period.title}</h3><p>{period.description}</p>
        <div className="epoch-card__bottom"><span>{events.filter(event => event.periodId === period.id).length} событий · {period.groups.reduce((sum, group) => sum + group.people.length, 0)} личностей</span><span aria-hidden="true">→</span></div>
      </Link>)}</div>
    </section>
  </>;
}
