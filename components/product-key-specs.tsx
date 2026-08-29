import type { Product } from "@/types/product";

export function ProductKeySpecs({ product, compact = false }: { product: Product; compact?: boolean }) {
  const specifications = product.keySpecificationLabels
    .map((label) => product.specifications.find((specification) => specification.label === label))
    .filter((specification) => specification !== undefined)
    .slice(0, compact ? 3 : 4);
  return <dl className={`key-specs${compact ? " key-specs-compact" : ""}`}>{specifications.map((specification) => <div key={specification.label}><dt>{specification.label}</dt><dd>{specification.value}{specification.unit ? <small> {specification.unit}</small> : null}</dd></div>)}</dl>;
}
