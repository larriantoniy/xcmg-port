import type { Product } from "@/types/product";

export function specificationValue(product: Product, label: string): string | null {
  return product.specifications.find((specification) => specification.label === label)?.value ?? null;
}

export function productImages(product: Product) {
  return [product.media.hero, ...product.media.gallery].filter((image) => image !== null);
}
