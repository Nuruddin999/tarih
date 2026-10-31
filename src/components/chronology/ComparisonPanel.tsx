"use client";

import { people } from "@/data/chronology";
import { formatYear, overlap, yearRange } from "@/lib/contemporaries";
import type { PersonCategory } from "@/types/chronology";
import { PersonCard } from "./PersonCard";

const everyone = Object.entries(people).sort((a, b) => a[1].name.localeCompare(b[1].name, "ru"));

type Props = {
  idPrefix: string;
  category: PersonCategory | "all";
  query: string;
  selected: string;
  onSelect: (id: string) => void;
};

export function ComparisonPanel({ idPrefix, category, query, selected, onSelect }: Props) {
  const normalized = query.trim().toLocaleLowerCase("ru").replaceAll("ё", "е");
  const matches = (key: string) => {
    const person = people[key];
    return person && (category === "all" || person.categories?.includes(category)) &&
      `${person.name} ${person.cities.join(" ")}`.toLocaleLowerCase("ru").replaceAll("ё", "е").includes(normalized);
  };
  const chosen = people[selected];
  const contemporaries = chosen ? everyone.flatMap(([key, person]) => {
    if (key === selected || !matches(key)) return [];
    const years = overlap(chosen, person);
    return years ? [{ key, person, years }] : [];
  }).sort((a, b) => a.years.start - b.years.start || a.years.end - b.years.end) : [];
  const unknownCount = everyone.filter(([key, p]) => key !== selected && matches(key) && (!yearRange(p.birth.hijri) || !yearRange(p.death.hijri))).length;

  return <>
    <h3 id={`${idPrefix}-contemporaries-title`} className="sidebar-block-title">Кто жил одновременно?</h3>
    <section className="contemporaries" aria-labelledby={`${idPrefix}-contemporaries-title`}>
      
      <p>Выбери личность, чтобы увидеть её современников из нашей хронологии.</p>
      <label className="explorer-label" htmlFor={`${idPrefix}-contemporary-person`}>С кем сравнить годы жизни</label>
      <select id={`${idPrefix}-contemporary-person`} value={selected} onChange={e => onSelect(e.target.value)}>
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
  </>;
}
