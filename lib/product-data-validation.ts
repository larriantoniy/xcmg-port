import type { Product } from "@/types/product";
import type { SourceReference } from "@/types/source";

export type ProductDataValidationCode =
  | "DUPLICATE_PRODUCT_SLUG"
  | "DUPLICATE_SOURCE_ID"
  | "UNKNOWN_SOURCE_REFERENCE"
  | "VERIFIED_SPECIFICATION_WITHOUT_SOURCE";

export interface ProductDataValidationIssue {
  code: ProductDataValidationCode;
  message: string;
  productSlug?: string;
  specificationLabel?: string;
  sourceId?: string;
}

function findDuplicates(values: readonly string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates].sort();
}

export function validateProductData(
  products: readonly Product[],
  sources: readonly SourceReference[],
): ProductDataValidationIssue[] {
  const issues: ProductDataValidationIssue[] = [];
  const sourceIds = new Set(sources.map((source) => source.id));

  for (const slug of findDuplicates(products.map((product) => product.slug))) {
    issues.push({ code: "DUPLICATE_PRODUCT_SLUG", productSlug: slug, message: `Duplicate product slug: ${slug}` });
  }
  for (const sourceId of findDuplicates(sources.map((source) => source.id))) {
    issues.push({ code: "DUPLICATE_SOURCE_ID", sourceId, message: `Duplicate source ID: ${sourceId}` });
  }

  for (const product of products) {
    for (const sourceId of product.sourceIds) {
      if (!sourceIds.has(sourceId)) {
        issues.push({ code: "UNKNOWN_SOURCE_REFERENCE", productSlug: product.slug, sourceId, message: `Product ${product.slug} references unknown source: ${sourceId}` });
      }
    }
    for (const specification of product.specifications) {
      const validSourceIds = specification.sourceIds.filter((sourceId) => sourceIds.has(sourceId));
      for (const sourceId of specification.sourceIds) {
        if (!sourceIds.has(sourceId)) {
          issues.push({ code: "UNKNOWN_SOURCE_REFERENCE", productSlug: product.slug, specificationLabel: specification.label, sourceId, message: `Specification ${product.slug}/${specification.label} references unknown source: ${sourceId}` });
        }
      }
      if (specification.verificationStatus === "verified" && validSourceIds.length === 0) {
        issues.push({ code: "VERIFIED_SPECIFICATION_WITHOUT_SOURCE", productSlug: product.slug, specificationLabel: specification.label, message: `Verified specification ${product.slug}/${specification.label} requires a valid source` });
      }
    }
  }
  return issues;
}

export function assertValidProductData(
  products: readonly Product[],
  sources: readonly SourceReference[],
): void {
  const issues = validateProductData(products, sources);
  if (issues.length > 0) {
    throw new Error(`Invalid product data:\n${issues.map((issue) => `- [${issue.code}] ${issue.message}`).join("\n")}`);
  }
}
