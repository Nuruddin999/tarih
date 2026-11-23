"use client";

import { useState } from "react";
import { people, categoryLabels } from "@/data/chronology";
import { yearRange } from "@/lib/contemporaries";
import type { PersonCategory } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
import { PersonBiography } from "./PersonBiography";

const scholars = Object.values(people).filter(person => person.id !== "muhammad" && !!person.categories?.length)
  .sort((a, b) => {
    const aYear = yearRange(a.death.hijri)?.[0] ?? Infinity;
    const bYear = yearRange(b.death.hijri)?.[0] ?? Infinity;
    return aYear === bYear ? a.name.localeCompare(b.name, "ru") : aYear - bYear;
  });
const normalize = (value: string) => value.toLocaleLowerCase("ru").replaceAll("ё", "е");

function PersonIcon() {
  return <span className="epoch-timeline__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" />
  </svg></span>;
}

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
    <div className="epoch-timeline epoch-timeline--people scholar-chronology">
      <p className="epoch-timeline__note">Учёные расположены по году смерти: от ранних поколений к поздним. Нажмите «Биография», чтобы открыть полную информацию.</p>
      <ol className="epoch-timeline__list">
        {dated.map(person => {
          const biography = person.description;
          const preview = biography && biography.length > 180 ? `${biography.slice(0, 177).trimEnd()}…` : biography;
          return <li className="epoch-timeline__row" key={person.id}>
            <div className="epoch-timeline__date"><DateLabel date={person.death} label="Год смерти" /></div>
            <div className="epoch-timeline__entry"><PersonIcon />
              <PersonBiography person={person} previewDescription={preview} />
            </div>
          </li>;
        })}
      </ol>
    </div>
    {undated.length > 0 && <section className="scholars-undated"><h2>Без установленного года смерти</h2><p>Эти личности показаны отдельно, чтобы не приписывать им место на временной шкале.</p>
      <div className="epoch-timeline epoch-timeline--people scholar-chronology">
        <ol className="epoch-timeline__list">{undated.map(person => <li className="epoch-timeline__row" key={person.id}>
          <div className="epoch-timeline__date"><span className="scholar-chronology__unknown">Год смерти неизвестен</span></div>
          <div className="epoch-timeline__entry"><PersonIcon /><PersonBiography person={person} previewDescription={person.description} /></div>
        </li>)}</ol>
      </div>
    </section>}
    {visible.length === 0 && <p>Учёные не найдены. Измените запрос или сбросьте фильтры.</p>}
  </>;
}
