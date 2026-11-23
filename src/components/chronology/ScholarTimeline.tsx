"use client";

import { useState } from "react";
import { people, categoryLabels } from "@/data/chronology";
import { yearRange } from "@/lib/contemporaries";
import type { PersonCategory } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
import { PersonBiography } from "./PersonBiography";
import { MobileFilters } from "./MobileFilters";

const scholars = Object.values(people).filter(person => person.id !== "muhammad" && !!person.categories?.length)
  .sort((a, b) => {
    const aYear = yearRange(a.death.hijri)?.[0] ?? Infinity;
    const bYear = yearRange(b.death.hijri)?.[0] ?? Infinity;
    return aYear === bYear ? a.name.localeCompare(b.name, "ru") : aYear - bYear;
  });

function PersonIcon() {
  return <span className="epoch-timeline__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" />
  </svg></span>;
}

export function ScholarTimeline() {
  const [category, setCategory] = useState<PersonCategory | "all">("all");
  const categoryOptions = [...new Set(scholars.flatMap(person => person.categories ?? []))]
    .sort((a, b) => categoryLabels[a].localeCompare(categoryLabels[b], "ru"));
  const countFor = (filter: PersonCategory | "all") => scholars.filter(person =>
    filter === "all" || person.categories?.includes(filter)).length;
  const visible = scholars.filter(person => category === "all" || person.categories?.includes(category));
  const dated = visible.filter(person => yearRange(person.death.hijri));
  const undated = visible.filter(person => !yearRange(person.death.hijri));

  return <>
    <MobileFilters
      category={category}
      categoryOptions={categoryOptions}
      showEpochNavigation={false}
      showSearch={false}
      query=""
      selected=""
      onQueryChange={() => {}}
      getPeriods={() => []}
      getResultCount={filter => countFor(filter)}
      onApply={filter => setCategory(filter)}
    />
    <div className="chronology-layout scholar-chronology-page">
      <aside className="chronology-sidebar" aria-label="Фильтры хроники учёных">
        <h2 className="sidebar-title desktop-only">Фильтры</h2>
        <h3 className="sidebar-block-title desktop-only">Специальности учёных</h3>
        <section className="explorer" aria-label="Фильтры учёных">
          <div className="filter-buttons" aria-label="Специальности учёных">
            <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")}>Все</button>
            {categoryOptions.map(key =>
              <button type="button" key={key} aria-pressed={category === key} onClick={() => setCategory(key)}>
                {categoryLabels[key]}
              </button>)}
          </div>
          <div className="filter-status">
            <span role="status">Найдено учёных: {visible.length}</span>
            <button type="button" onClick={() => setCategory("all")}>Сбросить фильтры</button>
          </div>
        </section>
      </aside>
      <div className="chronology-results">
        <p className="scholar-count" role="status">
          {category === "all" ? "Все учёные" : categoryLabels[category]} — найдено: {visible.length}
        </p>
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
        {visible.length === 0 && <p role="status">Учёные не найдены. Измени выбранное направление.</p>}
      </div>
    </div>
  </>;
}
