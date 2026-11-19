import type { Metadata } from "next";
import Link from "next/link";
import { ScholarTimeline } from "@/components/chronology/ScholarTimeline";

export const metadata: Metadata = {
  title: "Хроника учёных — Исламская хронология",
  description: "Учёные исламской истории на единой временной ленте без разделения на эпохи. Поиск по имени, городу и направлению.",
  alternates: { canonical: "/collections/scholars/" },
  openGraph: { title: "Хроника учёных", description: "Поколения учёных на одной ленте времени.", url: "/collections/scholars/" },
};
export default function ScholarsPage() {
  return <main className="chronology scholars-page">
    <header className="site-header"><Link href="/" className="brand">Люди и эпохи</Link><Link href="/#collections">Все подборки</Link></header>
    <nav className="breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span aria-hidden="true"> / </span><span aria-current="page">Хроника учёных</span></nav>
    <section className="scholar-intro"><p className="eyebrow">Тематическая подборка</p><h1>Хроника учёных</h1><p>Поколения учёных на одной ленте времени — без разделения на эпохи.</p><p className="scholar-intro__note">Лента упорядочена по году смерти по хиджре. Приблизительные даты и диапазоны сохранены; для диапазона используется его начало. Здесь собраны мухаддисы, факихи, муфассиры и историки.</p></section>
    <ScholarTimeline />
    <footer className="site-footer"><Link href="/#collections">← К подборкам</Link></footer>
  </main>;
}
