import type { Product } from "@/types/product";

export function specificationValue(product: Product, label: string): string | null {
  return product.specifications.find((specification) => specification.label === label)?.value ?? null;
}
