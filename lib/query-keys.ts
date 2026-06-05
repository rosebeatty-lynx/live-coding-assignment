export const countryKeys = {
  all: ["countries"] as const,
  list: (query: string) => ["countries", "list", query] as const,
};
