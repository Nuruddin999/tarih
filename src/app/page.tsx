import Image from "next/image";
import { EpochDirectory } from "@/components/chronology/EpochDirectory";

export default function HomePage() {
  return <main className="chronology">
    <header className="site-header"><a href="/" className="brand"><Image src="/icons/brand.webp" alt="" width={48} height={48} unoptimized /><span>Люди и эпохи</span></a><nav className="header-nav" aria-label="Основная навигация"><a href="#epochs">Эпохи</a><a href="#about">О проекте</a></nav></header>
    <section className="directory-intro" aria-labelledby="intro-title"><p className="eyebrow">Люди · события · связи</p><h1 id="intro-title">Исламская хронология</h1><p>Исследуйте историю через эпохи, события и людей, которые жили в одно время.</p><p className="directory-intro__hint">Выберите эпоху, чтобы открыть её события и личности, или найдите интересующее имя через поиск.</p></section>
    <EpochDirectory />
    <section id="about" className="directory-about"><h2>О проекте</h2><p>Путеводитель по исламской истории помогает увидеть последовательность событий и связи между людьми и эпохами.</p><details><summary>Как читать даты</summary><p>Основные даты указаны по хиджре — летоисчислению от переселения Пророка ﷺ из Мекки в Медину. Рядом приведены григорианские годы. «До х.» означает «до хиджры», «ок.» — приблизительную дату.</p></details></section>
    <footer className="site-footer">Даты предварительные и требуют сверки с источниками.</footer>
  </main>;
}
