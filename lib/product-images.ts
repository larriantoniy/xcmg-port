import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Product } from "@/types/product";

export interface ProductImageAsset {
  src: `/images/richstackery/${string}/1.jpg`;
  alt: string;
}

export function getProductImage(product: Pick<Product, "slug" | "model">): ProductImageAsset | null {
  const src = `/images/richstackery/${product.slug}/1.jpg` as const;
  const filePath = join(process.cwd(), "public", src);
  if (!existsSync(filePath)) return null;
  return {
    src,
    alt: `Ричстакер XCMG ${product.model ?? product.slug.toUpperCase()}`,
  };
}
