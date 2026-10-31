import { ChronologyExplorer } from "@/components/chronology/ChronologyExplorer";

export default function HomePage() {
  return (
    <main className="chronology">
      <header className="site-header">
        <a href="#" className="brand">
          <span className="brand__symbol" aria-hidden="true">۞</span>
          <span>Люди и эпохи</span>
        </a>
        <span className="site-header__caption">Исторический атлас</span>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <div className="intro__heading">
          <p className="eyebrow">Личности исламской истории</p>
          <h1 id="intro-title">Исламская хронология</h1>
        </div>
        <div className="intro__about">
          <p className="intro__description">
            Кто жил у истоков ислама, кто пришёл после и какие эпохи связывают этих людей?
            Этот сайт — наглядный путеводитель по исламской истории: от пророка Мухаммада ﷺ
            и его сподвижников — людей, которые встречали его и следовали его учению, —
            до учёных и правителей следующих поколений.
          </p>
          <p className="intro__guide">
            Изучайте исторические периоды, ищите людей по имени или роду деятельности,
            смотрите годы их жизни и узнавайте, кто был чьим современником.
            Для знакомства с сайтом не нужны специальные знания.
          </p>
        </div>
        <p className="intro__legend">
          <span>Как читать даты</span>
          Основная шкала — по хиджре: исламское летоисчисление ведётся от переселения
          пророка Мухаммада ﷺ из Мекки в Медину в 622 году. «До х.» означает «до хиджры».
          Рядом указаны годы привычного григорианского календаря.
        </p>
      </section>

      <ChronologyExplorer />
      <footer className="site-footer">
        «Ок.» обозначает приблизительную дату. Григорианские годы указаны для сопоставления.
        Даты предварительные и требуют сверки с источниками.
      </footer>
    </main>
  );
}
