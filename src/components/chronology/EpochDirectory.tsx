"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { periods } from "@/data/chronology";
import { uniquePeriodPeople } from "@/lib/uniquePeriodPeople";

const assignedPeriods = uniquePeriodPeople(periods);

export function EpochDirectory() {
  // Keep previously shared epoch anchors working after the move to separate pages.
  useEffect(() => {
    const follow = () => {
      const id = window.location.hash.slice(1);
      if (periods.some(period => period.id === id)) window.location.replace(`/epochs/${id}/`);
    };
    follow();
    window.addEventListener("hashchange", follow);
    return () => window.removeEventListener("hashchange", follow);
  }, []);
  return <>
    <section id="epochs" aria-labelledby="epochs-title">
      <div className="directory-heading"><div><h2 id="epochs-title">Исторические эпохи</h2><p className="section-description">Выберите время, с которого начнётся ваше путешествие.</p></div><Link href="/chronology/">Полная лента →</Link></div>
      <div className="epoch-grid">{assignedPeriods.map(period => <Link className="epoch-card" href={`/epochs/${period.id}/`} key={period.id}>
        <div className="epoch-card__art"><Image src={`/images/eras/${period.id}.webp`} alt="" width={1254} height={1254} unoptimized /></div>
        <div className="epoch-card__body"><h3>{period.title}</h3></div>
      </Link>)}</div>
    </section>
  </>;
}
