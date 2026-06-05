import type { Country } from "@/types";

const BASE_URL = "https://restcountries.com/v3.1";

export async function getAllCountries(): Promise<Country[]> {
  const res = await fetch(
    `${BASE_URL}/all?fields=cca3,name,flags,region,population,capital`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  const data: Country[] = await res.json();
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
}

export async function getCountryByCode(code: string): Promise<Country> {
  // REST Countries — lookup by ISO 3166-1 alpha-3 code (e.g. "USA", "BRA"):
  //   GET https://restcountries.com/v3.1/alpha/{code}
  // Response: JSON array with one Country object — return the first element.

  throw new Error("getCountryByCode is not implemented");
}
