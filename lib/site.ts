function normalizeSiteUrl(value: string | undefined): string {
  const candidate = value?.trim() || "http://localhost:3000";
  const url = new URL(candidate);
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use http or https");
  }
  return url.origin;
}

export const siteConfig = {
  name: "Ричстакеры XCMG",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  description: "Ричстакеры XCMG: каталог моделей, технические характеристики и подбор техники.",
} as const;

export function absoluteUrl(path: `/${string}` | "/" = "/"): string {
  return new URL(path, `${siteConfig.url}/`).toString();
}
