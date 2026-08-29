import type { SourceReference } from "@/types/source";

export type VerificationStatus = "unverified" | "verified";
export interface ProductSpecification {
  label: string;
  value: string | null;
  unit?: string;
  verificationStatus: VerificationStatus;
  sourceIds: SourceReference["id"][];
}
export interface ProductImage {
  src: `/images/products/${string}`;
  alt: string;
  width: number;
  height: number;
}
export interface ProductMedia {
  hero: ProductImage | null;
  gallery: ProductImage[];
}
export interface Product {
  id: string;
  slug: string;
  brand: "XCMG";
  model: string | null;
  category: string;
  title: string;
  description: string;
  applications: string[];
  media: ProductMedia;
  specifications: ProductSpecification[];
  verificationStatus: VerificationStatus;
  sourceIds: SourceReference["id"][];
  seo: { title: string; description: string };
}
