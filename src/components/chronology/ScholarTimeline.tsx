"use client";

import { useState } from "react";
import { people, categoryLabels } from "@/data/chronology";
import { yearRange } from "@/lib/contemporaries";
import type { PersonCategory } from "@/types/chronology";
import { PersonCard } from "./PersonCard";

// Categories already describe scholarly work in the source data. The Prophet ﷺ
// is not included in this catalogue of scholars of the Muslim community.
const scholars = Object.values(people).filter(person => person.id !== "muhammad" && !!person.categories?.length)
  .sort((a, b) => {
    const aYear = yearRange(a.death.hijri)?.[0] ?? Infinity;
    const bYear = yearRange(b.death.hijri)?.[0] ?? Infinity;
    return aYear === bYear ? a.name.localeCompare(b.name, "ru") : aYear - bYear;
  });
const normalize = (value: string) => value.toLocaleLowerCase("ru").replaceAll("ё", "е");

export function ScholarTimeline() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PersonCategory | "all">("all");
  const visible = scholars.filter(person => (category === "all" || person.categories?.includes(category)) && normalize(`${person.name} ${person.cities.join(" ")}`).includes(normalize(query.trim())));
  const dated = visible.filter(person => yearRange(person.death.hijri));
  const undated = visible.filter(person => !yearRange(person.death.hijri));
  return <>
    <section className="scholar-filters" aria-label="Поиск учёных">
      <label htmlFor="scholar-search">Имя или город<input id="scholar-search" type="search" value={query} placeholder="Например, аль-Бухари" onChange={event => setQuery(event.target.value)} /></label>
      <label htmlFor="scholar-category">Направление<select id="scholar-category" value={category} onChange={event => setCategory(event.target.value as PersonCategory | "all")}><option value="all">Все направления</option>{Object.entries(categoryLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
      <button type="button" onClick={() => { setQuery(""); setCategory("all"); }}>Сбросить</button>
    </section>
    <p className="scholar-count" role="status">Найдено: {visible.length}</p>
    <ol className="scholar-timeline">{dated.map(person => <li key={person.id}><div className="scholar-timeline__date"><span>Год смерти</span><strong>{person.death.hijri}</strong><small>{person.death.gregorian}</small></div><PersonCard person={person} /></li>)}</ol>
    {undated.length > 0 && <section className="scholars-undated"><h2>Без установленного года смерти</h2><p>Эти личности показаны отдельно, чтобы не приписывать им место на временной шкале.</p>{undated.map(person => <PersonCard key={person.id} person={person} />)}</section>}
    {visible.length === 0 && <p>Учёные не найдены. Измените запрос или сбросьте фильтры.</p>}
  </>;
}
