import type { Person } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
export function PersonCard({person, description, featured = false}: {person: Person; description?: string; featured?: boolean}) {
 return <article className={`person ${featured ? 'person--featured' : ''}`}>
 <div><h4 className="person__name">{person.name}</h4><p className="person__honorific">{person.honorific}</p>{description && <p className="person__description">{description}</p>}</div>
 <div className="person__dates"><DateLabel label="Рождение" date={person.birth}/><DateLabel label="Смерть" date={person.death}/></div>
 </article>;
}
