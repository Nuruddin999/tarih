import { people } from "@/data/chronology";
import type { HistoricalPeriod } from "@/types/chronology";
import { DateLabel } from "./DateLabel";
import { PersonCard } from "./PersonCard";
export function PeriodSection({period}: {period: HistoricalPeriod}) {
 return <section id={period.id} className="timeline-period">
 <span className="timeline-period__marker" aria-hidden="true"/>
 <details className="period" open><summary className="period__summary">
 <DateLabel date={period.dates} large/>
 <div className="period__heading"><div><h2>{period.title}</h2><p>{period.description}</p></div><span className="period__toggle" aria-hidden="true">↓</span></div>
 </summary><div className="period__content">{period.groups.map(group => <section className="person-group" key={group.id}>
 <h3 className="person-group__title">{group.title}</h3><div className="person-group__list">{group.people.map(entry => <PersonCard key={entry.personId} person={people[entry.personId]} description={entry.description} featured={entry.featured}/>)}</div>
 </section>)}</div></details></section>;
}
