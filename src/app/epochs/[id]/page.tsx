import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { periods } from "@/data/chronology";
import { ChronologyExplorer } from "@/components/chronology/ChronologyExplorer";
import { DateLabel } from "@/components/chronology/DateLabel";

type Props = { params: Promise<{ id: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return periods.map(period => ({ id: period.id })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const period = periods.find(item => item.id === id);
  return { title: `${period?.title ?? "Эпоха"} — Исламская хронология`, description: period?.description, alternates: { canonical: `/epochs/${id}/` }, openGraph: { title: period?.title, description: period?.description, url: `/epochs/${id}/` } };
}
export default async function EpochPage({ params }: Props) {
  const { id } = await params;
  const index = periods.findIndex(period => period.id === id);
  if (index < 0) notFound();
  const period = periods[index];
  return <main className="chronology">
    <header className="site-header"><Link href="/" className="brand">Люди и эпохи</Link><Link href="/#epochs">Все эпохи</Link></header>
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <ol>
        <li><Link href="/">Главная</Link></li>
        <li aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="m6 3 5 5-5 5" /></svg></li>
        <li aria-current="page">{period.title}</li>
      </ol>
    </nav>
    <section className="epoch-intro"><DateLabel date={period.dates} large /><h1>{period.title}</h1><p>{period.description}</p></section>
    <ChronologyExplorer periodId={id} />
    <nav className="epoch-pagination" aria-label="Соседние эпохи">{index > 0 ? <Link href={`/epochs/${periods[index - 1].id}/`}>← {periods[index - 1].title}</Link> : <Link href="/">Все эпохи</Link>}{index < periods.length - 1 && <Link href={`/epochs/${periods[index + 1].id}/`}>{periods[index + 1].title} →</Link>}</nav>
  </main>;
}
