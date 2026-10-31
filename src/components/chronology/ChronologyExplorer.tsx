"use client";

import { useEffect, useRef, useState } from "react";
import { people, periods, categoryLabels } from "@/data/chronology";
import type { PersonCategory } from "@/types/chronology";
import { formatYear, overlap, yearRange } from "@/lib/contemporaries";
import { PeriodSection } from "./PeriodSection";
import { PersonCard } from "./PersonCard";

const everyone = Object.entries(people).sort((a, b) => a[1].name.localeCompare(b[1].name, "ru"));

export function ChronologyExplorer() {
  const [category, setCategory] = useState<PersonCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const filterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (filterTimer.current !== null) clearTimeout(filterTimer.current);
  }, []);

  function changeCategory(next: PersonCategory | "all", resetQuery = false) {
    if (filterTimer.current !== null) clearTimeout(filterTimer.current);
    setCategory(next);
    if (resetQuery) setQuery("");
    setIsFiltering(true);

    filterTimer.current = setTimeout(() => {
      setIsFiltering(false);
      filterTimer.current = null;
      if (window.matchMedia("(min-width: 1024px)").matches) return;
      resultsRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    }, 250);
  }

  const normalized = query.trim().toLocaleLowerCase("ru").replaceAll("ё", "е");
  const matches = (key: string) => {
    const person = people[key];
    return person && (category === "all" || person.categories?.includes(category)) &&
      `${person.name} ${person.cities.join(" ")}`.toLocaleLowerCase("ru").replaceAll("ё", "е").includes(normalized);
  };
  const visiblePeriods = periods.map(period => ({ ...period, groups: period.groups
      .map(group => ({ ...group, people: group.people.filter(entry => matches(entry.personId)) }))
      .filter(group => group.people.length > 0) })).filter(period => period.groups.length > 0);
  const count = new Set(visiblePeriods.flatMap(p => p.groups.flatMap(g => g.people.map(e => e.personId)))).size;
  const chosen = people[selected];
  const contemporaries = chosen ? everyone.flatMap(([key, person]) => {
    if (key === selected || !matches(key)) return [];
    const years = overlap(chosen, person);
    return years ? [{ key, person, years }] : [];
  }).sort((a, b) => a.years.start - b.years.start || a.years.end - b.years.end) : [];
  const unknownCount = everyone.filter(([key, p]) => key !== selected && matches(key) && (!yearRange(p.birth.hijri) || !yearRange(p.death.hijri))).length;
  
  return <div className="chronology-layout">
    <aside className="chronology-sidebar" aria-label="Поиск и фильтры">
    <h2 className="sidebar-title desktop-only">Фильтры</h2>
    <h3 className="sidebar-block-title desktop-only">Учёные</h3>
    <section className="explorer" aria-label="Фильтры хронологии">
      <div className="filter-buttons" aria-label="Направление и мазхаб">
        <button type="button" aria-pressed={category === "all"} onClick={() => changeCategory("all")}>Все</button>
        {(Object.keys(categoryLabels) as PersonCategory[]).map(key => <button type="button" key={key} aria-pressed={category === key} onClick={() => changeCategory(key)}>{categoryLabels[key]}</button>)}
      </div>
      <label className="explorer-label" htmlFor="person-search">Поиск по имени или городу</label>
      <input id="person-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Например, аш-Шафии или Багдад" />
      <div className="filter-status"><span role="status">{isFiltering ? "Обновляем список…" : `Найдено личностей: ${count}`}</span><button type="button" onClick={() => changeCategory("all", true)}>Сбросить фильтры</button></div>
    </section>
    
    <h3 id="sidebar-periods-title" className="sidebar-block-title desktop-only">Эпохи</h3>
    <section className="sidebar-periods desktop-only" aria-labelledby="sidebar-periods-title">
      <nav className="period-navigation" aria-label="Переход к периоду">
        {visiblePeriods.map(period => <a href={`#${period.id}`} key={period.id}>{period.title}</a>)}
      </nav>
    </section>

    <section className="contemporaries" aria-labelledby="contemporaries-title">
      <h2 id="contemporaries-title">Кто жил одновременно?</h2>
      <p>Выбери личность, чтобы увидеть её современников из нашей хронологии.</p>
      <label className="explorer-label" htmlFor="contemporary-person">С кем сравнить годы жизни</label>
      <select id="contemporary-person" value={selected} onChange={e => setSelected(e.target.value)}>
        <option value="">Выбрать личность</option>
        {everyone.map(([key, person]) => <option value={key} key={key}>{person.name}</option>)}
      </select>
      {chosen && <>
          <p className="comparison-lifespan"><strong>{chosen.name}</strong><br />{chosen.birth.hijri} — {chosen.death.hijri}</p>
          <p className="comparison-note">Сравнение по годам хиджры. Совпадение годов не означает личную встречу. Приблизительные даты и диапазоны дают возможное пересечение; совпадение одного года требует уточнения по месяцам. Фильтры выше применяются и к этому списку.</p>
        {!yearRange(chosen.birth.hijri) || !yearRange(chosen.death.hijri) ? <p role="status">Для сравнения недостаточно данных о годах жизни этой личности.</p> : <>
          <p role="status">Современников с учётом фильтров: {contemporaries.length}</p>
          <div className="contemporary-list">{contemporaries.map(({ key, person, years }) => <div key={key}>
            <p className="overlap-label">Возможное пересечение: {formatYear(years.start)}{years.start !== years.end && ` — ${formatYear(years.end)}`}</p>
            <PersonCard person={person} />
          </div>)}</div>
          {contemporaries.length === 0 && <p>Совпадений нет. Попробуй сбросить фильтры или выбрать другую личность.</p>}
          {unknownCount > 0 && <p className="comparison-note">Не включены личности с неполными датами: {unknownCount}.</p>}
        </>}
      </>}
    </section>
    
    </aside>
    <div className="chronology-results">
    <div ref={resultsRef} style={{ scrollMarginTop: 16 }}>
      <p role="status">
        {isFiltering
          ? "Обновляем список…"
          : `${category === "all" ? "Все личности" : categoryLabels[category]} · найдено: ${count}`}
      </p>
    </div>
    <nav className="period-navigation mobile-period-navigation" aria-label="Переход к периоду">{visiblePeriods.map(period => <a href={`#${period.id}`} key={period.id}>{period.title}</a>)}</nav>
    <div className="timeline">{visiblePeriods.map(period => <PeriodSection period={period} key={period.id} />)}</div>
    {count === 0 && <p role="status">Ничего не найдено. Измени запрос или сбрось фильтры.</p>}
    </div>
  </div>;
}
