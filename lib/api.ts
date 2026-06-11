import type { Country } from "@/types";
import countriesData from "@/lib/data/countries.json";

// Bundled, offline country dataset — generated from the `world-countries`
// dataset (the same upstream data REST Countries serves) plus population
// figures, with flag images served by flagcdn.com (keyed by ISO alpha-2).
//
// This is the source of truth so the app never depends on REST Countries'
// uptime. The previous live-fetch version 500'd whenever that free API went
// down (502/Bad Gateway) or returned a non-array error body.
const ALL_COUNTRIES = countriesData as Country[];

export async function getAllCountries(): Promise<Country[]> {
  // Already sorted by common name at build time. Returned as a fresh array
  // so callers can sort/filter without mutating the shared module data.
  return [...ALL_COUNTRIES];
}

export async function getCountryByCode(code: string): Promise<Country> {
  const normalized = code.toUpperCase();
  const match = ALL_COUNTRIES.find((c) => c.cca3.toUpperCase() === normalized);

  if (!match) {
    throw new Error(`No country found for code "${code}"`);
  }

  return match;
}
