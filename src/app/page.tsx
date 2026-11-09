import Image from "next/image";

const collections = [
  { id: "sira", title: "Сира Пророка ﷺ", note: "Жизнь и события", icon: "☾", color: "sand" },
  { id: "scholars", title: "Учёные", note: "Знания и наследие", icon: "✦", color: "blue" },
  { id: "battles", title: "Битвы", note: "События и участники", icon: "⚑", color: "rose" },
  { id: "shafii", title: "Шафиитский мазхаб", note: "Учёные правовой школы", icon: "ش", color: "green" },
  { id: "hanafi", title: "Ханафитский мазхаб", note: "Учёные правовой школы", icon: "ح", color: "sand" },
  { id: "maliki", title: "Маликитский мазхаб", note: "Учёные правовой школы", icon: "م", color: "lilac" },
  { id: "historian", title: "Историки", note: "Хранители истории", icon: "⌛", color: "blue" },
  { id: "muhaddith", title: "Хадисы", note: "Мухаддисы и их эпохи", icon: "❧", color: "green" },
];

export default function HomePage() {
  return <main className="chronology landing">
    <header className="site-header">
      <a href="/" className="brand"><Image src="/icons/brand.webp" alt="" width={48} height={48} /><span>Люди и эпохи</span></a>
      <nav className="header-nav" aria-label="Основная навигация"><a href="/chronology/">Хронология</a><a href="#collections">Подборки</a></nav>
    </header>
    <section className="landing-hero" aria-labelledby="hero-title">
      <div className="landing-hero__text">
        <p className="eyebrow">Исламская хронология</p>
        <h1 id="hero-title">У каждой эпохи<br />есть имена.<br /><span>У каждого имени<br />есть эпохи.</span></h1>
        <p className="landing-hero__description">Исследуйте историю исламского мира через события и людей. Узнавайте, кто жил в одно время и как связаны разные эпохи.</p>
        <a className="landing-cta" href="/chronology/">Перейти к хронологии <span aria-hidden="true">↗</span></a>
      </div>
      <figure className="landing-hero__art">
        <Image src="/images/mecca-engraving.jpg" alt="Старинная гравюра: вид Мекки с Каабой и окружающими город горами" width={593} height={390} priority />
        <figcaption>Мекка · историческая гравюра <a href="https://commons.wikimedia.org/wiki/File:Mecca-1850.jpg" target="_blank" rel="noreferrer">Источник ↗</a></figcaption>
      </figure>
    </section>
    <section id="collections" className="landing-collections" aria-labelledby="collections-title">
      <div className="landing-section-heading"><div><p className="eyebrow">Выберите свой маршрут</p><h2 id="collections-title">С чего начнём?</h2></div><a href="/chronology/">Вся хронология <span aria-hidden="true">↗</span></a></div>
      <div className="collection-grid">{collections.map(item => <a className={`collection-card collection-card--${item.color}`} key={item.id} href={`/chronology/?collection=${item.id}`}>
        <span className="collection-card__top"><span className="collection-card__icon" aria-hidden="true">{item.icon}</span><span className="collection-card__arrow" aria-hidden="true">↗</span></span>
        <div><h3>{item.title}</h3><p>{item.note}</p></div>
      </a>)}</div>
    </section>
    <footer className="site-footer">Люди, события и связи между ними. Исламская история в хронологическом порядке.</footer>
  </main>;
}
