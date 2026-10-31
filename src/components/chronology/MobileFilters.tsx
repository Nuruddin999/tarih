"use client";

import { useEffect, useRef, useState } from "react";
import { categoryLabels } from "@/data/chronology";
import type { PersonCategory } from "@/types/chronology";

type Category = PersonCategory | "all";
type Props = {
  category: Category;
  query: string;
  onQueryChange: (query: string) => void;
  getCount: (category: Category, clearSearch: boolean) => number;
  onApply: (category: Category, clearSearch: boolean) => void;
};

export function MobileFilters({ category, query, onQueryChange, getCount, onApply }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState<Category>(category);
  const [clearSearch, setClearSearch] = useState(false);

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
    setClearSearch(false);
    dialogRef.current?.showModal();
    setIsOpen(true);
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
      onClose={() => setIsOpen(false)}
      onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      <div className="mobile-filter-dialog__panel">
        <header className="mobile-filter-dialog__header">
          <h2 id="mobile-filter-title">Фильтры</h2>
          <button type="button" aria-label="Закрыть фильтры" onClick={() => dialogRef.current?.close()}>✕</button>
        </header>
        <div className="mobile-filter-dialog__body">
          <h3 id="mobile-categories-title">Учёные</h3>
          <div className="filter-buttons" role="group" aria-labelledby="mobile-categories-title">
            <button type="button" aria-pressed={draft === "all"} onClick={() => setDraft("all")}>Все</button>
            {(Object.keys(categoryLabels) as PersonCategory[]).map(key =>
              <button type="button" key={key} aria-pressed={draft === key} onClick={() => setDraft(key)}>
                {categoryLabels[key]}
              </button>)}
          </div>
          {query && <p className="comparison-note">
            {clearSearch ? "Поисковый запрос будет сброшен." : `С учётом поиска: «${query}»`}
          </p>}
        </div>
        <footer className="mobile-filter-dialog__footer">
          <button type="button" onClick={() => { setDraft("all"); setClearSearch(true); }}>Сбросить</button>
          <button type="button" className="mobile-filter-apply" onClick={() => {
            onApply(draft, clearSearch);
            dialogRef.current?.close();
          }}>Показать {getCount(draft, clearSearch)} личностей</button>
        </footer>
      </div>
    </dialog>
  </>;
}
