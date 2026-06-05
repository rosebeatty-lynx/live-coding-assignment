import CountryList from "@/components/CountryList";
import SearchBar from "@/components/SearchBar";
import { getAllCountries } from "@/lib/api";
import { filterCountries } from "@/lib/countries";
import { Suspense } from "react";

interface HomePageProps {
  searchParams: { query?: string };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const query = searchParams.query?.toLowerCase().trim() ?? "";
  const allCountries = await getAllCountries();
  const initialCountries = filterCountries(allCountries, query);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-800">Country Browser</h1>
      </header>

      <Suspense
        fallback={<p className="text-sm text-gray-500">Loading search…</p>}
      >
        <SearchBar />
        <CountryList initialCountries={initialCountries} initialQuery={query} />
      </Suspense>
    </div>
  );
}
