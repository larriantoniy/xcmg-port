export type SourceType =
  | "manufacturer_document"
  | "manufacturer_webpage"
  | "company_document"
  | "internal_verified_data";

/** A registry entry describing where one or more facts originated. */
export interface SourceReference {
  id: string;
  type: SourceType;
  title: string;
  url?: string;
  documentIdentifier?: string;
  pageNumber?: number;
  verifiedAt?: string;
}
