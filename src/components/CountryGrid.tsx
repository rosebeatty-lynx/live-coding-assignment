import type { Country } from '../types';
import { CountryCard } from './CountryCard';

type Props = {
  countries: Country[];
  loading: boolean;
};

export function CountryGrid({ countries, loading }: Props) {
  if (loading) {
    return <div className="py-12 text-center text-slate-500">Loading…</div>;
  }

  if (countries.length === 0) {
    return (
      <div className="py-12 text-center text-slate-500">No countries match.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {countries.map((c) => (
        // TODO: pass the right key — what's a stable identifier here?
        <CountryCard country={c} />
      ))}
    </div>
  );
}
