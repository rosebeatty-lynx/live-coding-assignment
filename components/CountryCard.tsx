import Image from "next/image";
import type { Country } from "@/types";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <li className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow-md">
      <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded border border-gray-100">
        <Image
          src={country.flags.svg || country.flags.png}
          alt={country.flags.alt ?? `Flag of ${country.name.common}`}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-sm font-semibold text-gray-800">
          {country.name.common}
        </span>
        <span className="text-xs text-gray-400">{country.region}</span>
        <span className="text-xs text-gray-400">
          Pop. {country.population.toLocaleString()}
        </span>
      </div>
    </li>
  );
}
