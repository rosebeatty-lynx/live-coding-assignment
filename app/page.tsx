import CountryList from "@/components/CountryList";
import SearchBar from "@/components/SearchBar";
import { getAllCountries } from "@/lib/api";
import { Suspense } from "react";

export default async function HomePage() {
  const allCountries = await getAllCountries();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-800">Country Browser</h1>
      </header>

      <Suspense
        fallback={<p className="text-sm text-gray-500">Loading search…</p>}
      >
        <SearchBar />
        <CountryList initialCountries={allCountries} />
      </Suspense>
    </div>
  );
}
