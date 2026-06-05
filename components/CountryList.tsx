"use client";

import CountryCard from "@/components/CountryCard";
import { getAllCountries } from "@/lib/api";
import { countryKeys } from "@/lib/query-keys";
import type { Country } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface CountryListProps {
  initialCountries: Country[];
  initialQuery: string;
}

export default function CountryList({
  initialCountries: initialCountries,
  initialQuery: _initialQuery,
}: CountryListProps) {
  const queryClient = useQueryClient();

  const { data: countries = [] } = useQuery({
    queryKey: countryKeys.all,
    queryFn: async () => {
      const allCountries = await queryClient.ensureQueryData({
        queryKey: countryKeys.all,
        queryFn: getAllCountries,
        staleTime: 60 * 60 * 1000,
      });
      return allCountries;
    },
    initialData: initialCountries,
  });

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
