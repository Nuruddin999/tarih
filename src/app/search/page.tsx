import type { Metadata } from "next";
import Link from "next/link";
import { AllPeopleTimeline } from "@/components/chronology/AllPeopleTimeline";

export const metadata: Metadata = {
  title: "Поиск личностей — Исламская хронология",
  description: "Общий таймлайн личностей исламской истории по эпохам.",
  alternates: { canonical: "/search/" },
};

export default function SearchPage() {
  return <main className="chronology search-results-page">
    <header className="site-header">
      <Link href="/" className="brand">Люди и эпохи</Link>
      <Link href="/">← На главную</Link>
    </header>
    <nav className="breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span aria-hidden="true"> / </span><span aria-current="page">Поиск личностей</span></nav>
    <section className="search-results-intro" aria-labelledby="search-results-title">
      <p className="eyebrow">Результаты поиска</p>
      <h1 id="search-results-title">Все личности на общей временной шкале</h1>
      <p>Личности собраны по эпохам. Выбранная в поиске карточка будет выделена и появится в области просмотра.</p>
    </section>
    <AllPeopleTimeline />
    <footer className="site-footer"><Link href="/">Вернуться к эпохам</Link><span>Даты предварительные и требуют сверки с источниками.</span></footer>
  </main>;
}
