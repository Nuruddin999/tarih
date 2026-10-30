import type { Person } from "@/types/chronology";
import { formatYear, overlap, yearRange } from "@/lib/contemporaries";
import { people, categoryLabels } from "@/data/chronology";
import { DateLabel } from "./DateLabel";

type Props = {
  person: Person;
  description?: string;
  featured?: boolean;
};

export function PersonCard({ person, description, featured = false }: Props) {
  const biography = description ?? person.description;
  const hasDates = yearRange(person.birth.hijri) !== null && yearRange(person.death.hijri) !== null;
  const contemporaries = Object.values(people).flatMap(other => {
    if (other.id === person.id) return [];
    const years = overlap(person, other);
    return years ? [{ person: other, years }] : [];
  }).sort((a, b) => a.years.start - b.years.start || a.person.name.localeCompare(b.person.name, "ru"));
  
  return (
    <article className={`person ${featured ? "person--featured" : ""}`}>
      <div className="person__info">
        {person.categories && person.categories.length > 0 && (
          <ul className="person__categories" aria-label="Области деятельности">
            {person.categories.map((category) => (
              <li key={category}>{categoryLabels[category]}</li>
            ))}
          </ul>
        )}
        
        <h4 className="person__name">{person.name}</h4>
        <p className="person__honorific">{person.honorific}</p>
        
        {person.cities.length > 0 && (
          <p className="person__location">
            <span className="person__location-label">Жил и работал</span>
            <span>{person.cities.join(" · ")}</span>
          </p>
        )}
        
        {biography && <p className="person__description">{biography}</p>}
      
      
      </div>
      
      <div className="person__dates">
        <DateLabel label="Рождение" date={person.birth} />
        <DateLabel label="Смерть" date={person.death} />
      </div>
      <details className="person__contemporaries">
        <summary>Современники <span className="person__contemporary-count">{hasDates ? contemporaries.length : "—"}</span></summary>
        <div className="person__contemporary-content">
          {!hasDates ? <p>Недостаточно данных о годах жизни для сравнения.</p> : <>
            <p className="person__contemporary-note">Из всей базы, независимо от фильтров. Пересечение по годам хиджры не означает личную встречу; приблизительные даты дают возможное совпадение.</p>
            {contemporaries.length > 0 ? <ul className="person__contemporary-list">
              {contemporaries.map(({ person: other, years }) => <li key={other.id}>
                <strong>{other.name}</strong>
                <span>{other.birth.hijri} — {other.death.hijri}</span>
                <span className="person__contemporary-overlap">Возможное пересечение: {formatYear(years.start)}{years.start !== years.end && ` — ${formatYear(years.end)}`}</span>
              </li>)}
            </ul> : <p>В текущей базе современники с известными датами не найдены.</p>}
          </>}
        </div>
      </details>
    </article>
  );
}
