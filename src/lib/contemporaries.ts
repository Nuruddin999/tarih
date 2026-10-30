import type {Person} from "@/types/chronology";

// Astronomical coordinates: 1 AH = 1, 1 BH = 0 (there is no year zero).
export function yearRange(label: string): [number, number] | null {
  const numbers = label.match(/\d+/g)?.map(Number);
  if (!numbers?.length || numbers.length > 2) return null;
  const coordinates = numbers.map(n => label.includes("до х") ? 1 - n : n);
  return [Math.min(...coordinates), Math.max(...coordinates)];
}

export function overlap(a: Person, b: Person) {
  const ab = yearRange(a.birth.hijri), ad = yearRange(a.death.hijri);
  const bb = yearRange(b.birth.hijri), bd = yearRange(b.death.hijri);
  if (!ab || !ad || !bb || !bd) return null;
  const start = Math.max(ab[0], bb[0]);
  const end = Math.min(ad[1], bd[1]);
  return start <= end ? {start, end} : null;
}

export function formatYear(year: number) {
  return year <= 0 ? `${1 - year} до х.` : `${year} г. х.`;
}
