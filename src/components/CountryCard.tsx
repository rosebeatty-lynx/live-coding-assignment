import type { Country } from '../types';

type Props = {
  country: Country;
};

export function CountryCard({ country }: Props) {
  // TODO: render a card showing:
  //   - flag image (with proper alt text)
  //   - country name (use the `common` name)
  //   - capital (handle missing capital gracefully)
  //   - region
  //   - population, formatted with thousands separators
  //
  // Use Tailwind for styling. Aim for something that looks reasonable.
  return (
    <div className="rounded border bg-white p-4">
      {/* implement me */}
    </div>
  );
}
