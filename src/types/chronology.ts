export type HistoricalDate = { hijri: string; gregorian: string };
export type Person = { id: string; name: string; honorific: string; birth: HistoricalDate; death: HistoricalDate };
export type PeriodGroup = { id: string; title: string; people: { personId: string; description?: string; featured?: boolean }[] };
export type HistoricalPeriod = { id: string; title: string; description: string; dates: HistoricalDate; groups: PeriodGroup[] };
