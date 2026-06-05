# Country Browser — Your tasks

Build a country browser with search and detail pages using Next.js, React Query, and the [REST Countries API](https://restcountries.com/v3.1).

**Time:** ~20 minutes

Work through the steps below **in order**. Earlier steps are quick wins; search wiring comes last.

---

## How the code is organized

| Area   | Key files                                                                                                   |
| ------ | ----------------------------------------------------------------------------------------------------------- |
| Pages  | `app/page.tsx` (home), `app/country/[code]/page.tsx` (detail — you build this)                              |
| UI     | `components/CountryList.tsx`, `SearchBar.tsx`, `CountryCard.tsx`                                            |
| Data   | `lib/api.ts` (`getAllCountries` done; `getCountryByCode` — you add), `lib/countries.ts` (`filterCountries`) |
| Search | `hooks/useSearchQuery.ts` (stub — step 4)                                                                   |

`CountryList` already fetches **all** countries via React Query. Search filters that list in memory (no search API). `SearchBar` already syncs `?query=` to the URL — keep URL as source of truth.

---

## What you need to implement

### 1. Navigation — `components/CountryList.tsx`

Make each country card open the detail page when clicked.

- Navigate to `/country/{cca3}` (e.g. `/country/USA`).

The list already renders cards; you only need to wire navigation.

---

### 2. Country detail — `lib/api.ts` + `app/country/[code]/page.tsx`

**API** — Implement `getCountryByCode(code)` in `lib/api.ts` as described in the file comments. Throw if the request fails.

**Page** — Build a simple detail view:

- Fetch the country with `getCountryByCode(params.code)` (server component).
- Show not found or error state on error or missing.
- Show flag, official name, and population. (Do not spend time on styling)

---

### 3. Responsive grid — `components/CountryList.tsx`

Style the list grid:

- **1** column on mobile
- **2** columns on tablet
- **3** columns on desktop

Use Tailwind on the existing classes.

---

### 4. Search — `hooks/useSearchQuery.ts`, `SearchBar`, `CountryList`

**Reusable hook** — Implement `useSearchQuery`.

- Read the current value from the URL (`query` param).
- Expose a way to update the URL when the search term changes (same behavior as the inline code in `SearchBar` today).
- Return a **normalized** `query` (lowercase, trimmed) for filtering, and the raw `inputValue` for the controlled input.

Refactor `SearchBar` to use the hook (remove inline `useRouter` / `useSearchParams` logic).

**Filter the list** — `CountryList` already uses React Query with `countryKeys.all` and returns **all** countries. Wire search so the grid updates when `?query=` changes **without a full page reload**.

You can:

- **Use React Query** — e.g. `countryKeys.list(query)`, filter inside the existing `queryFn`.
- **Use any another approach**

Use `useSearchQuery` in **both** `SearchBar` and `CountryList`.

---
