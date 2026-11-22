import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  const previousPeriod = index > 0 ? periods[index - 1] : null;
  const nextPeriod = index < periods.length - 1 ? periods[index + 1] : null;
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
    <nav className="epoch-pagination" aria-label="Соседние эпохи">
      <Link className="epoch-pagination__arrow" href={previousPeriod ? `/epochs/${previousPeriod.id}/` : "/#epochs"}
        aria-label={previousPeriod ? `Предыдущая эпоха: ${previousPeriod.title}` : "Все эпохи"}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5m7 7-7-7 7-7" /></svg>
      </Link>
      {previousPeriod ? <Link className="epoch-pagination__card" href={`/epochs/${previousPeriod.id}/`}>
        <span className="epoch-pagination__art"><Image src={`/images/eras/${previousPeriod.id}.webp`} alt="" width={1254} height={1254} unoptimized /></span>
        <span className="epoch-pagination__title">{previousPeriod.title}</span>
      </Link> : <span aria-hidden="true" />}
      {nextPeriod ? <Link className="epoch-pagination__card" href={`/epochs/${nextPeriod.id}/`}>
        <span className="epoch-pagination__art"><Image src={`/images/eras/${nextPeriod.id}.webp`} alt="" width={1254} height={1254} unoptimized /></span>
        <span className="epoch-pagination__title">{nextPeriod.title}</span>
      </Link> : <span aria-hidden="true" />}
      {nextPeriod ? <Link className="epoch-pagination__arrow" href={`/epochs/${nextPeriod.id}/`} aria-label={`Следующая эпоха: ${nextPeriod.title}`}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
      </Link> : <span className="epoch-pagination__arrow epoch-pagination__arrow--disabled" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
      </span>}
    </nav>
  </main>;
}
