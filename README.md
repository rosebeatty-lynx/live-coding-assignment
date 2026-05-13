# Country Explorer — Interview Task

Build a small country browser that uses the REST Countries API
(https://restcountries.com/v3.1).

You have ~45 minutes. Quality over completion — narrate your thinking
as you go.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## What's already done

- Vite + React + TypeScript + Tailwind set up
- Component skeletons created (mostly empty — see TODOs)
- Empty type definitions in `src/types.ts`
- Stub fetch function in `src/api.ts`

## What you need to build (in priority order)

### Must-have

1. **Country grid** — fetch from
   `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3`
   on mount. Display each country as a card showing flag, name, capital,
   region, and population (formatted with thousands separators).

2. **Loading and error states** — appropriate UI for both.

3. **Search by name** — text input that filters the list as the user types.

### Should-have

4. **Filter by region** — dropdown (Africa, Americas, Asia, Europe, Oceania,
   Antarctic). Combines with search.

5. **Sort by population** — toggle ascending/descending.

6. **TypeScript** — properly type the API response (no `any`).

### Nice-to-have (only if time permits)

7. **Responsive layout** — 1 col mobile → 2 col tablet → 4 col desktop.
8. **Click a card to show a detail panel** with extra info (you'll need
   a separate fetch — `https://restcountries.com/v3.1/alpha/{cca3}`).
9. **Persist filters in URL** so refresh preserves state.

## Ground rules

- You can install any library you'd reach for normally.
- Open the API docs (https://restcountries.com) freely.
- Talk through tradeoffs as you make them.
