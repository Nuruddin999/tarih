"use client";

import { useEffect, useRef, useState } from "react";
import type { Person } from "@/types/chronology";
import { PersonCard } from "./PersonCard";

type Props = {
  person: Person;
  description?: string;
  featured?: boolean;
};

export function PersonBiography({ person, description, featured = false }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    const frame = window.requestAnimationFrame(() => dialog.classList.add("is-visible"));
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
  }, []);

  function closeBiography() {
    const dialog = dialogRef.current;
    if (!dialog?.open) {
      setIsOpen(false);
      return;
    }

    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    dialog.classList.remove("is-visible");
    closeTimer.current = window.setTimeout(() => {
      dialog.close();
      setIsOpen(false);
      closeTimer.current = null;
    }, 320);
  }

  return <>
    <div className="epoch-timeline__person">
      <h3>{person.name}</h3>
      {(description || person.description) && <p>{description || person.description}</p>}
      <button className="epoch-timeline__more" type="button" onClick={() => setIsOpen(true)}>
        Биография
      </button>
    </div>
    {isOpen && <dialog
      ref={dialogRef}
      className="person-biography-dialog"
      aria-labelledby={`person-biography-title-${person.id}`}
      onCancel={event => { event.preventDefault(); closeBiography(); }}
    >
      <div className="person-biography-dialog__panel">
        <header className="person-biography-dialog__header">
          <h2 id={`person-biography-title-${person.id}`}>Биография</h2>
          <button className="person-biography-dialog__close" type="button" aria-label="Закрыть биографию" onClick={closeBiography}>
            ×
          </button>
        </header>
        <div className="person-biography-dialog__body">
          <PersonCard person={person} description={description} featured={featured} />
          {person.sources && person.sources.length > 0 && <section className="person-biography-dialog__sources" aria-label="Источники">
            <h3>Источники</h3>
            <ul>{person.sources.map((source, index) => <li key={`${source.url}-${index}`}>
              <span>{source.title}</span>
              {source.url && <a href={source.url} target="_blank" rel="noreferrer">Открыть источник</a>}
            </li>)}</ul>
          </section>}
        </div>
      </div>
    </dialog>}
  </>;
}
