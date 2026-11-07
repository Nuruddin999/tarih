import type { HistoricalPeriod } from "@/types/chronology";

/** Periods are ordered chronologically; a person is listed only at their first occurrence. */
export function uniquePeriodPeople(periods: HistoricalPeriod[]): HistoricalPeriod[] {
  const seen = new Set<string>();

  return periods.map(period => ({
    ...period,
    groups: period.groups.map(group => ({
      ...group,
      people: group.people.filter(entry => {
        if (seen.has(entry.personId)) return false;
        seen.add(entry.personId);
        return true;
      }),
    })).filter(group => group.people.length > 0),
  }));
}
