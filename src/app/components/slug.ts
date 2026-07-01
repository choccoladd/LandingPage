export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/%/g, "pct")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
