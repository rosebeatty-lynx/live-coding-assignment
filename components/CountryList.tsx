"use client";

import { useMemo } from "react";
import CountryCard from "@/components/CountryCard";
import { getAllCountries } from "@/lib/api";
import { filterCountries } from "@/lib/countries";
import { countryKeys } from "@/lib/query-keys";
import type { Country } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

interface CountryListProps {
  initialCountries: Country[]; // full list, not pre-filtered
}

export default function CountryList({ initialCountries }: CountryListProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase().trim() ?? "";

  const { data: allCountries = [] } = useQuery({
    queryKey: countryKeys.all,
    queryFn: getAllCountries,
    staleTime: 60 * 60 * 1000,
    initialData: initialCountries,
  });

  const countries = useMemo(() => filterCountries(allCountries, query), [allCountries, query]);

  return (
    <>
      <p className="text-sm text-gray-500">{countries.length} countries</p>

      <ul className="mx-auto grid w-full max-w-5xl gap-4 grid-cols-3">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </ul>
    </>
  );
}