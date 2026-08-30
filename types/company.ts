export interface CompanyAdvantage {
  title: string;
  description: string;
}

export interface CompanyAddress {
  full: string;
  postalCode: string;
  addressLocality: string;
  addressRegion: string;
  streetAddress: string;
}

export interface CompanyCoordinates {
  latitude: number;
  longitude: number;
}

export interface CompanyPhone {
  label: string;
  value: string;
  href: `tel:${string}`;
}

export interface DistributorDetails {
  status: string;
  territory: string;
  validFrom: string;
  validTo: string;
  certificatePath: string;
}

export interface CompanyData {
  companyName: string;
  shortName: string;
  legalName: string;
  description: string;
  activityDescription: string;
  address: CompanyAddress;
  coordinates: CompanyCoordinates;
  /** Primary commercial contact for the site's CTA flow. */
  phone: string;
  phoneHref: `tel:${string}`;
  email: string;
  emailHref: `mailto:${string}`;
  headOfficePhone: CompanyPhone;
  salesDepartmentPhone: CompanyPhone;
  salesManager: {
    name: string;
    phone: CompanyPhone;
  };
  inn: string;
  kpp: string;
  ogrn: string;
  registrationDate: string;
  advantages: CompanyAdvantage[];
  distributor: DistributorDetails;
  yandexMapUrl: string;
  yandexMapEmbedUrl: string;
}
