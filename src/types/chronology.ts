export type HistoricalDate = {
  hijri: string;
  gregorian: string;
};

export type PersonActivity = "muhaddith" | "historian";

export type PersonMadhhab =
  | "hanafi"
  | "maliki"
  | "shafii"
  | "hanbali";

export type PersonCategory = PersonActivity | PersonMadhhab;

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
