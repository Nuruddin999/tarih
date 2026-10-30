import type { HistoricalDate } from "@/types/chronology";
export function DateLabel({date, label, large = false}: {date: HistoricalDate; label?: string; large?: boolean}) {
 return <div className={`historical-date ${large ? 'historical-date--large' : ''}`}>
  {label && <span className="historical-date__label">{label}</span>}
  <strong className="historical-date__hijri">{date.hijri}</strong>
  <span className="historical-date__gregorian">{date.gregorian}</span>
 </div>;
}
