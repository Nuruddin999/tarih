import Image from "next/image";
import { people, periods } from "@/data/chronology";
import { ChronologyExplorer } from "@/components/chronology/ChronologyExplorer";

export default function HomePage() {
  return (
    <main className="chronology">
      <header className="site-header">
        <a href="#" className="brand">
          <span className="brand__symbol brand__symbol--illustrated" aria-hidden="true"><Image src="/icons/brand.webp" alt="" width={48} height={48} unoptimized /></span>
          <span>Люди и эпохи</span>
        </a>
        <nav className="header-nav" aria-label="Основная навигация"><a href="#atlas">Хронология</a><a href="#about">О проекте</a><a href="#dates">Как читать даты</a></nav>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <div className="intro__heading">
          <p className="eyebrow">Личности исламской истории</p>
          <h1 id="intro-title">Исламская хронология</h1>
          <p className="intro__subtitle">
            Изучая историю, мы узнаём судьбы народов и правителей, причины возвышения
            и упадка государств, успехов и поражений.
          </p>
        </div>
        <div id="about" className="intro__about">
          <p className="intro__guide">
            Находите личности, исследуйте эпохи и узнавайте, кто жил в одно время.
            Начать можно с любого имени — специальные знания не нужны.
          </p>
        </div>
        <div className="atlas-stats" aria-label="Об атласе">
          <div className="atlas-stat"><span className="atlas-stat__icon" aria-hidden="true"><Image src="/icons/personalities.webp" alt="" width={64} height={64} unoptimized /></span><div><strong>{Object.keys(people).length}</strong><small>Личностей в атласе</small></div></div>
          <div className="atlas-stat"><span className="atlas-stat__icon" aria-hidden="true"><Image src="/icons/epochs.webp" alt="" width={64} height={64} unoptimized /></span><div><strong>{periods.length}</strong><small>Исторических эпох</small></div></div>
          <div className="atlas-stat"><span className="atlas-stat__icon" aria-hidden="true"><Image src="/icons/calendars.webp" alt="" width={64} height={64} unoptimized /></span><div><strong>2 календаря</strong><small>Хиджра и григорианский</small></div></div>
        </div>
        <p id="dates" className="intro__legend">
          <span>Как читать даты</span>
          Основная шкала — по хиджре: исламское летоисчисление ведётся от переселения
          пророка Мухаммада ﷺ из Мекки в Медину в 622 году. «До х.» означает «до хиджры».
          Рядом указаны годы привычного григорианского календаря.
        </p>
      </section>

      <div id="atlas"><ChronologyExplorer /></div>
      <footer className="site-footer">
        «Ок.» обозначает приблизительную дату. Григорианские годы указаны для сопоставления.
        Даты предварительные и требуют сверки с источниками.
      </footer>
    </main>
  );
}
