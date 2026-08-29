import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaLink } from "@/components/cta-link";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { companyData } from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: `Контакты ${companyData.shortName}`,
  description: `Телефон, email, адрес и реквизиты ${companyData.shortName} для консультации и запроса ричстакеров XCMG.`,
  path: "/contacts",
});

export default function ContactsPage() {
  return <>
    <OrganizationJsonLd />
    <Breadcrumbs currentPath="/contacts" items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />
    <header className="inner-hero"><p className="eyebrow">Контакты</p><h1>Обсудить ричстакер XCMG</h1><p className="hero-lead">Позвоните для консультации и подбора модели или отправьте запрос на коммерческое предложение по email.</p><div className="actions"><CtaLink intent="consultation" /><CtaLink intent="quote" secondary /></div></header>

    <section className="section contact-page-grid" aria-labelledby="channels"><div><p className="eyebrow">Связаться</p><h2 id="channels">Контактные каналы</h2><div className="contact-cards"><a href={companyData.phoneHref}><span>Телефон</span><strong>{companyData.phone}</strong></a><a href={companyData.emailHref}><span>Email</span><strong>{companyData.email}</strong></a></div></div><dl className="contact-details"><div><dt>Компания</dt><dd>{companyData.companyName}</dd></div><div><dt>Адрес</dt><dd>{companyData.address.full}</dd></div><div><dt>Визит в офис</dt><dd>Согласуйте время по телефону</dd></div></dl></section>

    <section className="section map-section" aria-labelledby="map"><div className="section-heading"><div><p className="eyebrow">Расположение</p><h2 id="map">Офис на карте</h2></div><a className="text-link" href={companyData.yandexMapUrl} target="_blank" rel="noreferrer">Открыть в Яндекс Картах →</a></div><div className="map-frame"><iframe src={companyData.yandexMapEmbedUrl} title={`Яндекс Карта: ${companyData.address.full}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>

    <section className="section split-content"><div><p className="eyebrow">Перед обращением</p><h2>Что подготовить</h2></div><ul className="check-list"><li>Интересующая модель или требуемые параметры</li><li>Типы контейнеров и схема штабелирования</li><li>Размеры и ограничения площадки</li><li>Желаемый тип привода</li></ul></section>

    <section className="section" aria-labelledby="details"><h2 id="details">Реквизиты</h2><dl className="legal-list"><div><dt>Юридическое наименование</dt><dd>{companyData.legalName}</dd></div><div><dt>ИНН</dt><dd>{companyData.inn}</dd></div><div><dt>КПП</dt><dd>{companyData.kpp}</dd></div><div><dt>Адрес</dt><dd>{companyData.address.full}</dd></div></dl></section>
    <section className="section section-last"><div className="no-form-note"><strong>Связаться можно напрямую</strong><p>Позвоните по указанному телефону или отправьте запрос на email.</p></div></section>
  </>;
}
