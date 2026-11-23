import Image from "next/image";
import Link from "next/link";
import { EpochDirectory } from "@/components/chronology/EpochDirectory";
import { HeaderPersonSearch } from "@/components/chronology/HeaderPersonSearch";
import { HomeGridMotion } from "@/components/chronology/HomeGridMotion";
import styles from "./HomeHero.module.css";

const collections = [
  { title: "Хроника учёных", description: "Поколения учёных на одной ленте времени — через века и границы эпох.", icon: "scholars", href: "/collections/scholars/", label: "Открыть хронику" },
  { title: "Полководцы", description: "Люди, походы и сражения исламской истории.", icon: "compass" },
  { title: "Правители", description: "Халифы, султаны и история их правления.", icon: "arch" },
];

function CollectionSymbol({ type }: { type: string }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "book" ? <><path d="M24 12c-6-4-12-4-18-2v27c6-2 12-2 18 2 6-4 12-4 18-2V10c-6-2-12-2-18 2v27" /><path d="M12 17c2-1 4-1 6 0m-6 6c2-1 4-1 6 0m12-6c2-1 4-1 6 0m-6 6c2-1 4-1 6 0" /></> : type === "compass" ? <><circle cx="24" cy="24" r="17" /><path d="m30 17-3 10-10 4 4-11 9-3Z" /><path d="M24 3v4m0 34v4M3 24h4m34 0h4" /></> : <><path d="M9 40V14l15-8 15 8v26M5 40h38M17 40V26c0-5 7-9 7-9s7 4 7 9v14" /><path d="M14 14h20" /></>}
  </svg>;
}

export default function HomePage() {
  return <main className="chronology home-page">
    <HomeGridMotion />
    <header className="site-header home-header">
      <Link href="/" className="brand" aria-label="На главную"><Image src="/icons/brand.webp" alt="" width={42} height={42} unoptimized /></Link>
      <nav className="header-nav" aria-label="Основная навигация"><a href="#epochs">Эпохи</a><a href="#collections">Подборки</a><Link href="/about/">О проекте</Link></nav>
      <HeaderPersonSearch />
    </header>
    <section className={`home-hero ${styles.hero}`} aria-labelledby="intro-title">
      <h1 id="intro-title" className={styles.title}>Исламская хронология</h1>
      <div className={`home-hero__row ${styles.row}`}>
        <div className={`home-hero__copy ${styles.copy}`}>
          <p className={`home-hero__tagline ${styles.tagline}`}>
            <span>У каждой эпохи — свои имена.</span>
            <span>У каждого имени — своя история.</span>
          </p>
          <p className={`home-hero__description ${styles.description}`}>Исследуйте события исламской истории, знакомьтесь с учёными, правителями и полководцами. Выберите эпоху или тематическую подборку, чтобы начать.</p>
          <a href="#epochs" className="home-hero__button">Выбрать эпоху <span aria-hidden="true">→</span></a>
        </div>
        <div className={`home-hero__art ${styles.art}`}><Image src="/images/history-panorama.webp" alt="Панорама города: песочные здания, аркады, купола и пальмы" width={1536} height={1024} priority unoptimized /></div>
      </div>
    </section>
    <EpochDirectory />
    <section id="collections" className="home-collections" aria-labelledby="collections-title">
      <div className="directory-heading"><div><h2 id="collections-title">Тематические подборки</h2><p className="section-description">Следуйте за темой, которая вам интересна.</p></div></div>
      <div className="collection-grid">{collections.map(collection => {
        const content = <><span className={`collection-card__symbol collection-card__symbol--${collection.icon}`}>{collection.icon === "scholars" ? <img src="/images/eras/scholars.webp" alt="" width={768} height={576} /> : <CollectionSymbol type={collection.icon} />}</span><h3>{collection.title}</h3>{!collection.href && <span className="collection-card__status">Скоро</span>}</>;
        return collection.href ? <Link key={collection.title} href={collection.href} className={`collection-card${collection.icon === "scholars" ? " collection-card--scholars" : ""}`}>{content}</Link> : <article key={collection.title} className="collection-card collection-card--upcoming" aria-label={`${collection.title} — скоро`}>{content}</article>;
      })}</div>
    </section>
  </main>;
}
