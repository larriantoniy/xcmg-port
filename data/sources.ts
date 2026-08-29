import type { SourceReference } from "@/types/source";

const baseUrl = "https://xcmg-ru.ru/tehnika/richstakery-i-peregruzhateli-pustykh-konteynerov";

export const sources: SourceReference[] = [
  {
    id: "xcmg-ru-richstackery-category-2026-08-28",
    type: "manufacturer_webpage",
    title: "XCMG Россия — ричстакеры и перегружатели пустых контейнеров",
    url: `${baseUrl}/`,
    verifiedAt: "2026-08-29T00:00:00+04:00",
  },
  ...["xcs4545k", "xcs4541k", "xcs4531k", "xcs4531e"].map((model) => ({
    id: `xcmg-ru-${model}-2026-08-28`,
    type: "manufacturer_webpage" as const,
    title: `XCMG Россия — ${model.toUpperCase()}`,
    url: `${baseUrl}/${model}/`,
    verifiedAt: "2026-08-29T00:00:00+04:00",
  })),
];
