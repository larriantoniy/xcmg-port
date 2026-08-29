import type { SourceReference } from "@/types/source";

export type VerificationStatus = "unverified" | "verified";
export interface ProductSpecification {
  group: "Производительность" | "Габариты и ходовая часть" | "Силовая установка" | "Электрическая установка";
  label: string;
  value: string | null;
  unit?: string;
  verificationStatus: VerificationStatus;
  sourceIds: SourceReference["id"][];
}
export interface ProductFeature {
  title: string;
  description: string;
  verificationStatus: VerificationStatus;
  sourceIds: SourceReference["id"][];
}
export interface ProductFaqItem {
  question: string;
  answer: string;
}
export interface Product {
  id: string;
  slug: string;
  brand: "XCMG";
  model: string | null;
  category: string;
  title: string;
  driveType: "ДВС" | "Электрический";
  description: string;
  overview: string[];
  applications: string[];
  features: ProductFeature[];
  selectionReasons: string[];
  faq: ProductFaqItem[];
  keySpecificationLabels: string[];
  specifications: ProductSpecification[];
  verificationStatus: VerificationStatus;
  sourceIds: SourceReference["id"][];
  seo: { title: string; description: string };
}
