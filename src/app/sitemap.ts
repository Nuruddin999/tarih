import type { MetadataRoute } from "next";
import { periods } from "@/data/chronology";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/chronology/", "/collections/scholars/", "/collections/commanders/", ...periods.map(period => `/epochs/${period.id}/`)]
    .map(path => ({ url: `https://islamtarih.ru${path}` }));
}
