import Link from "next/link";

interface CountryPageProps {
  params: { code: string };
}

export default function CountryPage({ params }: CountryPageProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-8">
      <Link href="/" className="text-sm text-blue-500 hover:underline">
        ← Back to list
      </Link>

      <p className="text-sm text-gray-500">
        Implement country detail for code: {params.code}
      </p>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
        {label}
      </dt>
      <dd className="mt-0.5 text-gray-800">{value}</dd>
    </div>
  );
}
