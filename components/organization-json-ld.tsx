import { JsonLd } from "@/components/json-ld";
import { companyData } from "@/data/company";
import { absoluteUrl } from "@/lib/site";

export function OrganizationJsonLd() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.legalName,
    alternateName: companyData.shortName,
    url: absoluteUrl("/"),
    email: companyData.email,
    telephone: companyData.phone,
    address: {
      "@type": "PostalAddress",
      postalCode: companyData.address.postalCode,
      addressCountry: "RU",
      addressRegion: companyData.address.addressRegion,
      addressLocality: companyData.address.addressLocality,
      streetAddress: companyData.address.streetAddress,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: companyData.phone,
      email: companyData.email,
      availableLanguage: "Russian",
    },
  }} />;
}
