export const SITE_URL = "https://port-tech.ru";

export const siteConfig = {
  name: "Ричстакеры XCMG",
  description: "Ричстакеры XCMG: каталог моделей, технические характеристики и подбор техники.",
} as const;

export function absoluteUrl(path: `/${string}` | "/" = "/"): string {
  return new URL(path, `${SITE_URL}/`).toString();
}
