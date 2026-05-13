import { useEffect, useState } from 'react';
import { CountryGrid } from './components/CountryGrid';
import { SearchBar } from './components/SearchBar';
import { RegionFilter } from './components/RegionFilter';
import { fetchCountries } from './api';
import type { Country } from './types';

export function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<string>('All');
  // TODO: add sort state (asc/desc by population)

  useEffect(() => {
    // TODO: fetch countries on mount
    //   - set loading true before, false after
    //   - catch errors and set the error state
    //   - what should happen if the component unmounts mid-fetch?
  }, []);

  // TODO: derive a filtered + sorted list from `countries`, `search`, `region`
  // Think about whether/why this needs useMemo.
  const visible = countries;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-2xl font-bold">Country Explorer</h1>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <SearchBar value={search} onChange={setSearch} />
          <RegionFilter value={region} onChange={setRegion} />
          {/* TODO: sort toggle */}
        </div>

        {error && (
          <div className="my-4 rounded bg-red-100 p-3 text-red-800">
            {error}
          </div>
        )}

        <CountryGrid countries={visible} loading={loading} />
      </div>
    </div>
  );
}
