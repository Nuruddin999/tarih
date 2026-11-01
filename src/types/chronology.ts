export type HistoricalDate = {
  hijri: string;
  gregorian: string;
};

export type PersonCategory =
  | "muhaddith"
  | "hanafi"
  | "maliki"
  | "shafii"
  | "hanbali"
  | "historian"
  | "mufassir";

export type Person = {
  id: string;
  name: string;
  honorific: string;
  birth: HistoricalDate;
  death: HistoricalDate;
  cities: string[];
  categories?: PersonCategory[];
  description?: string;
  dateNote?: string;
  sources?: { title: string; url: string }[];
};

export type PeriodGroup = {
  id: string;
  title: string;
  people: {
    personId: string;
    description?: string;
    featured?: boolean;
  }[];
};

export type HistoricalPeriod = {
  id: string;
  title: string;
  description: string;
  dates: HistoricalDate;
  groups: PeriodGroup[];
};
