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

export interface CompanyData {
  companyName: string;
  shortName: string;
  legalName: string;
  description: string;
  activityDescription: string;
  address: CompanyAddress;
  coordinates: CompanyCoordinates;
  phone: string;
  phoneHref: `tel:${string}`;
  email: string;
  emailHref: `mailto:${string}`;
  sourceWebsite: string;
  inn: string;
  kpp: string;
  ogrn: string | null;
  workingHours: string | null;
  advantages: CompanyAdvantage[];
  representativeStatus: string | null;
  yandexMapUrl: string;
  yandexMapEmbedUrl: string;
}
