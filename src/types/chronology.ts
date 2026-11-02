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
  isCompanion?: boolean;
  gender?: "male" | "female";
  /** Только десять сподвижников, перечисленных вместе в известном хадисе. */
  isPromisedParadise?: boolean;
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

/** Ссылка на книгу, главу или видеоурок; URL необязателен для печатных изданий. */
export type EventSource = {
  title: string;
  author?: string;
  volume?: string;
  chapter?: string;
  page?: string;
  url?: string;
  timestamp?: string;
};

/** Участие подтверждается источником, а не только совпадением времени жизни. */
export type EventParticipant = {
  personId: Person["id"];
  role?: string;
  /** Меньшее значение показывается первым. */
  sortOrder: number;
  sources: EventSource[];
};

export type HistoricalEvent = {
  id: string;
  title: string;
  description?: string;
  periodId: HistoricalPeriod["id"];
  /** Начало события или его единственная дата. */
  start?: HistoricalDate;
  end?: HistoricalDate;
  dateNote?: string;
  /** Задаёт порядок даже для событий без установленной даты. */
  sortOrder: number;
  participants: EventParticipant[];
  sources: EventSource[];
};
