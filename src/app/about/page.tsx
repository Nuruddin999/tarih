import Image from "next/image";
import Link from "next/link";
import { HeaderPersonSearch } from "@/components/chronology/HeaderPersonSearch";
import styles from "../HomeHero.module.css";

export default function AboutPage() {
  return <main className="chronology home-page">
    <header className="site-header home-header">
      <Link href="/" className="brand" aria-label="На главную"><Image src="/icons/brand.webp" alt="" width={42} height={42} unoptimized /></Link>
      <nav className="header-nav" aria-label="Основная навигация"><Link href="/#epochs">Эпохи</Link><Link href="/#collections">Подборки</Link><Link href="/about/" aria-current="page">О проекте</Link></nav>
      <HeaderPersonSearch />
    </header>
    <article className={styles.aboutContent}>
      <p className={styles.aboutEyebrow}>О проекте</p>
      <h1 className={styles.aboutTitle}>Увидеть историю целиком</h1>
      <p className={styles.aboutLead}>«Исламская хронология» помогает увидеть последовательность событий, познакомиться с историческими личностями и узнать, кто жил в одно время.</p>
      <details className={styles.aboutDetails}>
        <summary>Как читать даты</summary>
        <p>Основные даты указаны по хиджре — летоисчислению от переселения Пророка ﷺ из Мекки в Медину. Рядом приведены григорианские годы. «До х.» означает «до хиджры», «ок.» — приблизительную дату.</p>
      </details>
    </article>
  </main>;
}
