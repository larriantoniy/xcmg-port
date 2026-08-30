import { JsonLd } from "@/components/json-ld";
import { companyData } from "@/data/company";
import { absoluteUrl } from "@/lib/site";

export function OrganizationJsonLd() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.companyName,
    legalName: companyData.legalName,
    alternateName: companyData.shortName,
    url: absoluteUrl("/"),
    email: companyData.email,
    telephone: companyData.phone,
    taxID: companyData.inn,
    address: {
      "@type": "PostalAddress",
      postalCode: companyData.address.postalCode,
      addressCountry: "RU",
      addressRegion: companyData.address.addressRegion,
      addressLocality: companyData.address.addressLocality,
      streetAddress: companyData.address.streetAddress,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: companyData.salesDepartmentPhone.value,
        email: companyData.email,
        availableLanguage: "Russian",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: companyData.headOfficePhone.value,
        availableLanguage: "Russian",
      },
    ],
  }} />;
}
