# Interviewer Rubric — Country Explorer

**DO NOT share with the candidate.**

## Scoring grid

| Area | Weak | Solid | Strong |
|---|---|---|---|
| **TS modeling** | Uses `any` or partial types that crash on optional fields | Types what they use, marks `capital?` optional | Defines a narrow internal type for what the UI actually needs, separate from the raw API response |
| **Initial fetch** | No loading state, no error handling | Loading + error states, correct dep array | Handles abort on unmount, considers retry |
| **Derived list** | Recomputes inline every render, mutates with `.sort()` | `useMemo`, immutable sort with spread | Stable sort, normalizes search input (case/diacritics), can articulate when memo helps and when it doesn't |
| **Filter combination** | Only one filter works at a time | All three combine correctly | Combines cleanly with a single chain, handles empty filters efficiently |
| **Optional fields** | Crashes when `capital` is missing | Renders "—" or similar | Uses `??` consistently, types reflect the optionality |
| **Responsive layout** | Single column always | Tailwind responsive classes used | Tested at multiple widths, image aspect ratios held |
| **Code quality** | Everything in `App.tsx`, prop drilling | Reasonable component split | Custom hook for fetch, separation of presentation and data |
| **Communication** | Silent | Explains as they go | Names tradeoffs unprompted, asks clarifying questions |

A solid hire is at least Solid across the board with at least three Strong markings.
A strong hire is mostly Strong with no Weak.

## Specific things to watch for

- **Do they actually look at the API response?** Open the URL in a browser tab or curl it. Strong candidates always do this before writing types; weaker ones guess.

- **What do they do when `capital` is `undefined`?** REST Countries returns `capital: ["Vatican City"]` for most countries but omits the field entirely for places like Antarctica. The `capital?: string[]` optionality is the gotcha. If they crash on this and don't notice, that's a yellow flag; if they notice and handle it gracefully, green.

- **Do they normalize search?** "Côte d'Ivoire" won't match a search for "cote d'ivoire" without normalization. Most candidates won't bother. Senior candidates will at least mention it ("for a real product I'd normalize accents, but I'll skip it for now").

- **The `key` prop in `CountryGrid.tsx`** — small but revealing. Watch for whether they default to index or notice `cca3`.

- **`Intl.NumberFormat` vs. `.toLocaleString()` vs. handrolled** — all valid; the question is whether they reach for the platform or reinvent.

- **Do they use the network tab or React DevTools at any point?** Mid+ engineers debug there constantly.

- **Memoization discipline** — if they reach for `useMemo` everywhere reflexively, gently probe with "would this be slow without it?" Strong answer: "probably not at 250 items, but it documents intent and prevents needless work in child memos." Weak answer: "useMemo is always faster."

## Time-budget red flags

- **Spending 15+ minutes on the fetch** — they're struggling with basics; expect the rest to be rough.
- **Spending 15+ minutes on TypeScript modeling** — they're either over-engineering or unfamiliar with the patterns. Worth probing.
- **Finishes Must-haves in <15 minutes** — good sign; push them into the Should-haves and Nice-to-haves to find their ceiling.

## After the interview

Score independently before debriefing. Strong-no / no / yes / strong-yes scale, no 5-point middling.
