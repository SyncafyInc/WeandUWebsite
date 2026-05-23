import fs from "node:fs";
import path from "node:path";

function list(dir: string, urlBase: string): string[] {
  const abs = path.join(process.cwd(), "public", dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `${urlBase}/${encodeURIComponent(f)}`);
}

export function getCelebs(): string[] {
  return list("photos/celebs", "/photos/celebs");
}

export function getRushHour(): string[] {
  return list("photos/rush-hour", "/photos/rush-hour");
}
