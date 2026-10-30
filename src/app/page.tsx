import { ChronologyExplorer } from "@/components/chronology/ChronologyExplorer";
export default function HomePage() {
  return <main className="chronology">
    <header className="site-header"><a href="#" className="brand"><span className="brand__symbol" aria-hidden="true">۞</span><span>Люди и эпохи</span></a><span className="site-header__caption">Исторический атлас</span></header>
    <section className="intro"><p className="eyebrow">Личности исламской истории</p><h1>Исламская<br/>хронология</h1><p className="intro__description">От эпохи Посланника Аллаха ﷺ к следующим поколениям. Личности, годы жизни и исторические периоды.</p><div className="intro__legend"><span>Основная шкала — по хиджре</span><span>До х. — до хиджры</span></div></section>
    <ChronologyExplorer />
    <footer className="site-footer">«Ок.» обозначает приблизительную дату. Григорианские годы указаны для сопоставления. Даты предварительные и требуют сверки с источниками.</footer>
  </main>;
}
