"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { people } from "@/data/chronology";

const normalize = (value: string) => value.trim().toLocaleLowerCase("ru").replaceAll("ё", "е");

export function HeaderPersonSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query), 250);
    return () => window.clearTimeout(timer);
  }, [query]);

  const results = useMemo(() => {
    const search = normalize(debouncedQuery);
    if (!search) return [];
    return Object.values(people)
      .filter(person => normalize(person.name).includes(search))
      .sort((a, b) => {
        const aStarts = normalize(a.name).startsWith(search) ? 0 : 1;
        const bStarts = normalize(b.name).startsWith(search) ? 0 : 1;
        return aStarts - bStarts || a.name.localeCompare(b.name, "ru");
      })
      .slice(0, 6);
  }, [debouncedQuery]);

  const isSearching = query.trim() !== debouncedQuery.trim();

  return <div className="header-person-search">
    <span className="header-person-search__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.4 4.4" /></svg></span>
    <input id="header-person-search" type="search" value={query} onChange={event => setQuery(event.target.value)}
      placeholder="Найти личность" aria-label="Найти личность" autoComplete="off" aria-expanded={!!query.trim()} aria-controls="header-person-search-results" />
    {query.trim() && <div id="header-person-search-results" className="header-person-search__results" role="listbox" aria-label="Результаты поиска">
      {isSearching ? <p role="status">Ищем личностей…</p> : results.length ? results.map(person =>
        <Link key={person.id} href={`/search/?person=${encodeURIComponent(person.id)}`} className="header-person-result" role="option" aria-selected="false">
          <span className="header-person-result__name">{person.name}</span>
          <span className="header-person-result__dates">{person.birth.hijri} — {person.death.hijri}</span>
          {person.cities.length > 0 && <span className="header-person-result__cities">{person.cities.join(" · ")}</span>}
        </Link>) : <p role="status">Личность не найдена. Попробуйте другое имя.</p>}
    </div>}
  </div>;
}
