import type { Metadata } from "next";
import Link from "next/link";
import { commanderChronology } from "@/data/commanders";

export const metadata: Metadata = {
  title: "Полководцы и сражения — Исламская хронология",
  description: "Хронология сражений и командующих от эпохи Посланника Аллаха ﷺ до ранних Аббасидов.",
  alternates: { canonical: "/collections/commanders/" },
  openGraph: {
    title: "Полководцы и сражения",
    description: "Командующие сражений в хронологическом порядке — от эпохи Пророка ﷺ до ранних Аббасидов.",
    url: "/collections/commanders/",
  },
};

export default function CommandersPage() {
  return <main className="chronology commanders-page">
    <header className="site-header">
      <Link href="/" className="brand">Люди и эпохи</Link>
      <Link href="/#collections">Все подборки</Link>
    </header>
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <Link href="/">Главная</Link><span aria-hidden="true"> / </span>
      <Link href="/#collections">Подборки</Link><span aria-hidden="true"> / </span>
      <span aria-current="page">Полководцы</span>
    </nav>
    <section className="commander-intro">
      <p className="eyebrow">Тематическая подборка</p>
      <h1>Полководцы</h1>
      <p className="commander-intro__lead">Сражения и командующие от эпохи Посланника Аллаха ﷺ до ранних Аббасидов — в хронологическом порядке.</p>
      <p className="commander-intro__note">Включены отдельные сражения, осады и вооружённые столкновения, отражённые в проектных источниках; обычные походы без боя сюда не добавлены. Для каждой стороны указаны только командующие, которых удалось подтвердить. Знаменосцы и командиры отдельных частей отмечены отдельно. Если источник не устанавливает главнокомандующего, это прямо указано. Даты с разночтениями сохранены как варианты. Раздел ранних Аббасидов пока охвачен до событий 198 г. х., согласно текущей хронологии проекта.</p>
    </section>
    <p className="commander-count">{commanderChronology.length} сражений, осад и вооружённых столкновений</p>
    <ol className="commander-timeline" aria-label="Сражения и их командующие по хронологии">
      {commanderChronology.map(entry => <li className="commander-timeline__item" key={entry.id}>
        <div className="commander-timeline__date">
          <span>{entry.dateHijri}</span>
          {entry.dateGregorian && <small>{entry.dateGregorian}</small>}
        </div>
        <article className="commander-timeline__card">
          <span className="commander-timeline__era">{entry.era}</span>
          <h2>{entry.title}</h2>
          <ul className="commander-timeline__leaders">
            {entry.commanders.map((commander, index) => <li key={`${commander.side}-${commander.name}-${index}`}>
              <strong>{commander.side}:</strong> {commander.name}<span> — {commander.role}</span>
            </li>)}
          </ul>
          {entry.note && <p className="commander-timeline__note">{entry.note}</p>}
          <details className="commander-timeline__sources">
            <summary>Источники</summary>
            <ul>
              {entry.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}
            </ul>
          </details>
        </article>
      </li>)}
    </ol>
    <footer className="site-footer"><Link href="/#collections">← К подборкам</Link></footer>
  </main>;
}
