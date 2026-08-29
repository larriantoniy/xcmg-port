import type { CompanyData } from "@/types/company";

const address = "107564, г. Москва, вн.тер.г. муниципальный округ Богородское, ул. Краснобогатырская, д. 2, стр. 1, ком. 73";
const latitude = 55.814558;
const longitude = 37.693723;

export const companyData: CompanyData = {
  companyName: "АО «ГОФФЕР»",
  shortName: "АО «ГОФФЕР»",
  legalName: "АКЦИОНЕРНОЕ ОБЩЕСТВО «ГОФФЕР»",
  description: "АО «ГОФФЕР» поставляет тяжёлую и строительную технику. На этом сайте компания сосредоточила отдельное направление по подбору и продаже ричстакеров XCMG для контейнерной логистики.",
  activityDescription: "Мы помогаем сопоставить подтверждённые характеристики ричстакеров XCMG с задачами терминала, порта, логистической площадки или контейнерного склада и подготовить предметный коммерческий запрос.",
  address: {
    full: address,
    postalCode: "107564",
    addressLocality: "Москва",
    addressRegion: "Москва",
    streetAddress: "вн.тер.г. муниципальный округ Богородское, ул. Краснобогатырская, д. 2, стр. 1, ком. 73",
  },
  coordinates: { latitude, longitude },
  phone: "+7 932 019 99 93",
  phoneHref: "tel:+79320199993",
  email: "kra@xcmg.ru",
  emailHref: "mailto:kra@xcmg.ru",
  sourceWebsite: "https://goffer-russia.ru/",
  inn: "9718288568",
  kpp: "771801001",
  ogrn: null,
  workingHours: null,
  advantages: [
    { title: "Подбор под задачу", description: "Комплексный подход к технике переводим в практический подбор ричстакера по условиям конкретной контейнерной площадки." },
    { title: "Сервисный маршрут", description: "Помогаем заранее обозначить вопросы обслуживания и направляем к актуальным условиям гарантийной и сервисной поддержки XCMG." },
  ],
  representativeStatus: null,
  yandexMapUrl: "https://yandex.ru/maps/213/moscow/house/krasnobogatyrskaya_ulitsa_2s1/Z04YcA5jTkcEQFtvfXRwdXlmbA==/",
  yandexMapEmbedUrl: `https://yandex.ru/map-widget/v1/?ll=${longitude}%2C${latitude}&z=16&pt=${longitude}%2C${latitude}%2Cpm2rdm`,
};

export type ContactIntent = "consultation" | "selection" | "quote";

const intentSubjects: Record<ContactIntent, string> = {
  consultation: "Консультация по ричстакерам XCMG",
  selection: "Подбор ричстакера XCMG",
  quote: "Запрос коммерческого предложения на ричстакер XCMG",
};

export function contactHref(intent: ContactIntent): string {
  if (intent === "quote") return `${companyData.emailHref}?subject=${encodeURIComponent(intentSubjects[intent])}`;
  return companyData.phoneHref;
}
