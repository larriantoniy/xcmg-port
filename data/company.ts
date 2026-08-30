import type { CompanyData } from "@/types/company";

const address = "454018, г. Челябинск, пр-кт Победы, д. 215, офис 13";
const latitude = 55.182922;
const longitude = 61.374122;

export const companyData: CompanyData = {
  companyName: "ООО «СТРОЙТЕХИМПОРТ»",
  shortName: "ООО «СТРОЙТЕХИМПОРТ»",
  legalName: "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «СТРОЙТЕХИМПОРТ»",
  description: "ООО «СТРОЙТЕХИМПОРТ» — официальный дистрибьютор портовой техники XCMG. На сайте представлено направление по подбору и поставке ричстакеров для контейнерной логистики.",
  activityDescription: "Помогаем подобрать ричстакер XCMG под задачи терминала, порта, логистической площадки или контейнерного склада и подготовить коммерческое предложение по выбранной модели.",
  address: {
    full: address,
    postalCode: "454018",
    addressLocality: "Челябинск",
    addressRegion: "Челябинская область",
    streetAddress: "пр-кт Победы, д. 215, офис 13",
  },
  coordinates: { latitude, longitude },
  phone: "+7 932 019 99 93",
  phoneHref: "tel:+79320199993",
  email: "kra@xcmg.ru",
  emailHref: "mailto:kra@xcmg.ru",
  headOfficePhone: { label: "Главный офис", value: "8 800 100-67-01", href: "tel:+78001006701" },
  salesDepartmentPhone: { label: "Отдел продаж", value: "+7 (351) 225-90-80", href: "tel:+73512259080" },
  salesManager: {
    name: "Кадыров Р. А.",
    phone: { label: "Прямой контакт отдела продаж", value: "+7 932 019 99 93", href: "tel:+79320199993" },
  },
  inn: "7451340147",
  kpp: "744701001",
  ogrn: "1127451009564",
  registrationDate: "05.06.2012",
  advantages: [
    { title: "Официальный дистрибьютор XCMG", description: "Поставляем портовую технику XCMG в статусе официального дистрибьютора на территории России, кроме Калининградской области." },
    { title: "Гарантийная и сервисная поддержка", description: "Сертификат подтверждает право на гарантийное и постгарантийное обслуживание техники XCMG." },
    { title: "Выездной сервис по России", description: "Сервисное и гарантийное обслуживание ричстакеров с выездом специалистов непосредственно к месту эксплуатации техники. Помощь при неисправностях и проведение необходимых сервисных работ на площадке заказчика." },
    { title: "Запасные части и сервисные материалы", description: "Сертификат предусматривает реализацию запасных частей, оборудования, масел и смазочных материалов XCMG." },
  ],
  distributor: {
    status: "Официальный дистрибьютор портовой техники XCMG",
    territory: "Российская Федерация, кроме Калининградской области",
    validFrom: "01.07.2026",
    validTo: "30.06.2027",
    certificatePath: "/documents/sertifikat-distributor-xcmg.pdf",
  },
  yandexMapUrl: "https://yandex.ru/maps/56/chelyabinsk/house/prospekt_pobedy_215/YkgYdQBkSEcFQFtvfX15c3VhZg%3D%3D/",
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
