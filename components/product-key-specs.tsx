import { specificationValue } from "@/lib/products";
import type { Product } from "@/types/product";

const keys = [
  ["Максимальная грузоподъёмность", "Грузоподъёмность", "кг"],
  ["Максимальная высота подъёма", "Высота подъёма", "мм"],
  ["Ёмкость штабеля", "Схема штабелирования", ""],
] as const;

export function ProductKeySpecs({ product, compact = false }: { product: Product; compact?: boolean }) {
  return <dl className={`key-specs${compact ? " key-specs-compact" : ""}`}>{keys.map(([sourceLabel, label, unit]) => {
    const value = specificationValue(product, sourceLabel);
    return value ? <div key={sourceLabel}><dt>{label}</dt><dd>{value}{unit ? <small> {unit}</small> : null}</dd></div> : null;
  })}</dl>;
}
