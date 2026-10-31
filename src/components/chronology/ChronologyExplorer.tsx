"use client";

import { useEffect, useRef, useState } from "react";
import { people, periods, categoryLabels } from "@/data/chronology";
import type { PersonCategory } from "@/types/chronology";
import { PeriodSection } from "./PeriodSection";
import { ComparisonPanel } from "./ComparisonPanel";
import { MobileFilters } from "./MobileFilters";

const everyone = Object.entries(people).sort((a, b) => a[1].name.localeCompare(b[1].name, "ru"));

export function ChronologyExplorer() {
  const [category, setCategory] = useState<PersonCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const [pendingPeriod, setPendingPeriod] = useState<string | null>(null);
  const comparisonDialogRef = useRef<HTMLDialogElement>(null);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  useEffect(() => {
    if (!isComparisonOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const mobile = window.matchMedia("(max-width: 1023px)");
    const closeOnMobile = () => {
      if (mobile.matches) comparisonDialogRef.current?.close();
    };
    mobile.addEventListener("change", closeOnMobile);
    return () => {
      document.body.style.overflow = previousOverflow;
      mobile.removeEventListener("change", closeOnMobile);
    };
  }, [isComparisonOpen]);

  const resultsRef = useRef<HTMLDivElement>(null);
  const filterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (filterTimer.current !== null) clearTimeout(filterTimer.current);
  }, []);

  function changeCategory(next: PersonCategory | "all", resetQuery = false, scrollToResults = true) {
    if (filterTimer.current !== null) clearTimeout(filterTimer.current);
    setCategory(next);
    if (resetQuery) setQuery("");
    setIsFiltering(true);

    filterTimer.current = setTimeout(() => {
      setIsFiltering(false);
      filterTimer.current = null;
      if (!scrollToResults) return;
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
  const matches = (key: string, filter: PersonCategory | "all" = category, search = normalized) => {
    const person = people[key];
    return person && (filter === "all" || person.categories?.includes(filter)) &&
      `${person.name} ${person.cities.join(" ")}`.toLocaleLowerCase("ru").replaceAll("ё", "е").includes(search);
  };
  const filterPeriods = (filter = category, search = normalized) => periods.map(period => ({ ...period, groups: period.groups
      .map(group => ({ ...group, people: group.people.filter(entry => matches(entry.personId, filter, search)) }))
      .filter(group => group.people.length > 0) })).filter(period => period.groups.length > 0);
  const visiblePeriods = filterPeriods();
  const count = new Set(visiblePeriods.flatMap(p => p.groups.flatMap(g => g.people.map(e => e.personId)))).size;
  useEffect(() => {
    if (!pendingPeriod) return;
    const target = document.getElementById(pendingPeriod);
    if (target) {
      target.querySelector("details")?.setAttribute("open", "");
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start",
      });
    }
    setPendingPeriod(null);
  }, [pendingPeriod, category, query]);
  
  return <div className="chronology-layout">
    <MobileFilters category={category} query={query} selected={selected} onQueryChange={setQuery}
      getPeriods={(filter, search) => filterPeriods(filter, search.trim().toLocaleLowerCase("ru").replaceAll("ё", "е"))}
      onApply={(filter, search, person, periodId) => {
        changeCategory(filter, false, false);
        setQuery(search);
        setSelected(person);
        if (periodId) setPendingPeriod(periodId);
      }} />
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

    <h3 className="sidebar-block-title desktop-only">Кто жил одновременно?</h3>
    <button type="button" className="comparison-launch desktop-only" aria-haspopup="dialog"
      onClick={() => { comparisonDialogRef.current?.showModal(); setIsComparisonOpen(true); }}>
      Найти современников
    </button>
    </aside>
    <div className="chronology-results">
    <div ref={resultsRef} style={{ scrollMarginTop: 16 }}>
      <p role="status">
        {isFiltering
          ? "Обновляем список…"
          : `${category === "all" ? "Все личности" : categoryLabels[category]} · найдено: ${count}`}
      </p>
    </div>

    <div className="timeline">{visiblePeriods.map(period => <PeriodSection period={period} key={period.id} />)}</div>
    {count === 0 && <p role="status">Ничего не найдено. Измени запрос или сбрось фильтры.</p>}
    </div>
    <dialog ref={comparisonDialogRef} className="comparison-dialog" aria-labelledby="comparison-dialog-title"
      onClose={() => setIsComparisonOpen(false)}
      onClick={event => { if (event.target === event.currentTarget) comparisonDialogRef.current?.close(); }}>
      <div className="comparison-dialog__panel">
        <header className="comparison-dialog__header">
          <h2 id="comparison-dialog-title">Кто жил одновременно?</h2>
          <button type="button" aria-label="Закрыть сравнение" onClick={() => comparisonDialogRef.current?.close()}>✕</button>
        </header>
        <div className="comparison-dialog__body">
          <ComparisonPanel idPrefix="desktop" category={category} query={query}
            selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </dialog>
  </div>;
}
