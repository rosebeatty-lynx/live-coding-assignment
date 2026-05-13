import type { Country } from './types';

const BASE_URL = 'https://restcountries.com/v3.1';

/**
 * Fetch all countries with a minimal field set.
 * REST Countries requires the `fields` param to be specified.
 */
export async function fetchCountries(): Promise<Country[]> {
  // TODO: implement
  // - construct the URL with the right `fields` query string
  //   (name, capital, region, population, flags, cca3)
  // - handle non-2xx responses
  // - return the parsed JSON
  throw new Error('not implemented');
}
