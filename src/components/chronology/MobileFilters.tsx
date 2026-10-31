"use client";

import { useEffect, useRef, useState } from "react";
import { categoryLabels } from "@/data/chronology";
import type { HistoricalPeriod, PersonCategory } from "@/types/chronology";
import { ComparisonPanel } from "./ComparisonPanel";

type Category = PersonCategory | "all";
type Props = {
  category: Category;
  query: string;
  selected: string;
  onQueryChange: (query: string) => void;
  getPeriods: (category: Category, query: string) => HistoricalPeriod[];
  onApply: (category: Category, query: string, selected: string, periodId?: string) => void;
};

export function MobileFilters({ category, query, selected, onQueryChange, getPeriods, onApply }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState<Category>(category);
  const [draftQuery, setDraftQuery] = useState(query);
  const [draftSelected, setDraftSelected] = useState(selected);
  const availablePeriods = getPeriods(draft, draftQuery);
  const count = new Set(availablePeriods.flatMap(period =>
    period.groups.flatMap(group => group.people.map(entry => entry.personId)))).size;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  function openFilters() {
    setDraft(category);
    setDraftQuery(query);
    setDraftSelected(selected);
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function apply(periodId?: string) {
    onApply(draft, draftQuery, draftSelected, periodId);
    dialogRef.current?.close();
  }

  return <>
    <div className="mobile-filter-toolbar">
      <label className="explorer-label" htmlFor="mobile-person-search">Поиск по имени или городу</label>
      <div className="mobile-filter-toolbar__row">
        <input id="mobile-person-search" type="search" value={query}
          onChange={event => onQueryChange(event.target.value)} placeholder="Имя или город" />
        <button type="button" onClick={openFilters} aria-haspopup="dialog">
          Фильтры{category !== "all" && <span className="mobile-filter-badge" aria-label="1 активный фильтр">1</span>}
        </button>
      </div>
    </div>
    <dialog ref={dialogRef} className="mobile-filter-dialog" aria-labelledby="mobile-filter-title"
      onClose={() => setIsOpen(false)}>
      <div className="mobile-filter-dialog__panel">
        <header className="mobile-filter-dialog__header">
          <h2 id="mobile-filter-title">Фильтры</h2>
          <button type="button" aria-label="Закрыть фильтры" onClick={() => dialogRef.current?.close()}>✕</button>
        </header>
        <div className="mobile-filter-dialog__body">
          <h3 id="mobile-categories-title">Учёные</h3>
          <section className="mobile-filter-block" aria-labelledby="mobile-categories-title">
            <div className="filter-buttons" role="group" aria-labelledby="mobile-categories-title">
              <button type="button" aria-pressed={draft === "all"} onClick={() => setDraft("all")}>Все</button>
              {(Object.keys(categoryLabels) as PersonCategory[]).map(key =>
                <button type="button" key={key} aria-pressed={draft === key} onClick={() => setDraft(key)}>
                  {categoryLabels[key]}
                </button>)}
            </div>
          </section>

          <h3 id="mobile-search-title">Поиск</h3>
          <section className="mobile-filter-block" aria-labelledby="mobile-search-title">
            <label className="explorer-label" htmlFor="modal-person-search">Имя или город</label>
            <input id="modal-person-search" type="search" value={draftQuery}
              onChange={event => setDraftQuery(event.target.value)} placeholder="Например, аш-Шафии или Багдад" />
          </section>

          <h3 id="mobile-epochs-title">Эпохи</h3>
          <section className="mobile-filter-block" aria-labelledby="mobile-epochs-title">
            <nav className="period-navigation" aria-label="Переход к периоду">
              {availablePeriods.map(period => <a key={period.id} href={`#${period.id}`}
                onClick={event => { event.preventDefault(); apply(period.id); }}>{period.title}</a>)}
            </nav>
            {availablePeriods.length === 0 && <p role="status">По выбранным фильтрам эпохи не найдены.</p>}
          </section>

          <ComparisonPanel idPrefix="mobile" category={draft} query={draftQuery}
            selected={draftSelected} onSelect={setDraftSelected} />
        </div>
        <footer className="mobile-filter-dialog__footer">
          <button type="button" onClick={() => { setDraft("all"); setDraftQuery(""); setDraftSelected(""); }}>Сбросить</button>
          <button type="button" className="mobile-filter-apply" onClick={() => apply()}>
            Показать: {count}
          </button>
        </footer>
      </div>
    </dialog>
  </>;
}
