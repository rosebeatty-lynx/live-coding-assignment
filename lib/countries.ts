import type { Country } from "@/types";

export function filterCountries(countries: Country[], query: string): Country[] {
  if (!query) return countries;
  return countries.filter((c) =>
    c.name.common.toLowerCase().includes(query),
  );
}
