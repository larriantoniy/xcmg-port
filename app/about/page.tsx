import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactPanel } from "@/components/contact-panel";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { companyData } from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: `О компании — ${companyData.shortName}`,
  description: `${companyData.shortName}: поставка тяжёлой техники и специализированное направление по подбору ричстакеров XCMG. Реквизиты и контакты.`,
  path: "/about",
});

export default function AboutPage() {
  const legalRows = [
    { label: "Юридическое наименование", value: companyData.legalName },
    { label: "ИНН", value: companyData.inn },
    { label: "КПП", value: companyData.kpp },
    { label: "Адрес", value: companyData.address.full },
  ];

  return <>
    <OrganizationJsonLd />
    <Breadcrumbs currentPath="/about" items={[{ label: "Главная", href: "/" }, { label: "О компании" }]} />
    <header className="inner-hero"><p className="eyebrow">О компании</p><h1>{companyData.companyName}</h1><p className="hero-lead">{companyData.description}</p></header>

    <section className="section split-content" aria-labelledby="direction"><div><p className="eyebrow">Направление</p><h2 id="direction">Ричстакеры XCMG для контейнерной логистики</h2></div><div><p>{companyData.activityDescription}</p><p>В каталоге представлены четыре модели ричстакеров. Их можно сопоставить по техническим параметрам, а цену, комплектацию и условия поставки уточнить в коммерческом предложении.</p><Link className="text-link" href="/richstackery">Сравнить модели →</Link></div></section>

    <section className="section" aria-labelledby="advantages"><div className="section-heading"><div><p className="eyebrow">Подход к работе</p><h2 id="advantages">Что получает покупатель</h2></div></div><div className="advantage-grid">{companyData.advantages.map((advantage, index) => <article key={advantage.title}><span>0{index + 1}</span><h3>{advantage.title}</h3><p>{advantage.description}</p></article>)}</div></section>

    <section className="section split-content" aria-labelledby="service"><div><p className="eyebrow">После выбора модели</p><h2 id="service">Гарантия и сервис</h2></div><div><p>Условия гарантии зависят от канала приобретения и соблюдения регламента обслуживания. На отдельной странице перечислены общие условия XCMG и вопросы, которые стоит уточнить до поставки.</p><Link className="text-link" href="/garantiya">Условия гарантии и сервиса →</Link></div></section>

    <section className="section" aria-labelledby="legal"><div className="section-heading"><div><p className="eyebrow">Реквизиты</p><h2 id="legal">Юридическая информация</h2></div></div><dl className="legal-list">{legalRows.map((row) => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl></section>
    <section className="section map-section" aria-labelledby="map"><div className="section-heading"><div><p className="eyebrow">Расположение</p><h2 id="map">Наш адрес</h2><p className="section-lead">Как нас найти</p></div><a className="text-link" href={companyData.yandexMapUrl} target="_blank" rel="noreferrer">Открыть в Яндекс Картах →</a></div><div className="map-frame"><iframe src={companyData.yandexMapEmbedUrl} title="Карта с адресом компании" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><p className="table-note">{companyData.address.full}</p></section>
    <section className="section section-last"><ContactPanel title={`Связаться с ${companyData.shortName}`} /></section>
  </>;
}
