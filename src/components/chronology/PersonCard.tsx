import type { Person } from "@/types/chronology";
import { categoryLabels } from "@/data/chronology";
import { DateLabel } from "./DateLabel";

type Props = {
  person: Person;
  description?: string;
  featured?: boolean;
};

export function PersonCard({ person, description, featured = false }: Props) {
  const biography = description ?? person.description;
  
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
    </article>
  );
}
