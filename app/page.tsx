import type { Metadata } from "next";
import Link from "next/link";
import { CompanySummary } from "@/components/company-summary";
import { ContactPanel } from "@/components/contact-panel";
import { CtaLink } from "@/components/cta-link";
import { JsonLd } from "@/components/json-ld";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { ProductCard } from "@/components/product-card";
import { ProductComparison } from "@/components/product-comparison";
import { HomeHero } from "@/components/sections/home-hero";
import { products } from "@/data/products";
import { companyData } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Ричстакеры XCMG для контейнерных терминалов",
  description: "Каталог четырёх ричстакеров XCMG: сравнение XCS4545K, XCS4541K, XCS4531K и электрического XCS4531E по подтверждённым характеристикам.",
  path: "/",
});

const applications = [
  { number: "01", title: "Контейнерные терминалы", text: "Работа с гружёными контейнерами и организация штабелей на терминальной площадке." },
  { number: "02", title: "Порты", text: "Перемещение контейнеров между рабочими зонами портовой инфраструктуры." },
  { number: "03", title: "Логистические площадки", text: "Обработка контейнерных потоков на интермодальных и распределительных объектах." },
  { number: "04", title: "Контейнерные склады", text: "Формирование штабелей с учётом доступной высоты и планировки территории." },
];

export default function HomePage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: absoluteUrl("/"), description: siteConfig.description }} />
    <OrganizationJsonLd />
    <HomeHero />

    <section className="section" aria-labelledby="models"><div className="section-heading"><div><p className="eyebrow">Модельный ряд</p><h2 id="models">Ричстакеры XCMG</h2><p className="section-lead">Три модели с ДВС и один электрический ричстакер. В карточках опубликованы только параметры с зарегистрированными источниками.</p></div><Link className="text-link" href="/richstackery">Весь каталог →</Link></div><div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product}/>)}</div></section>

    <section className="section section-dark" aria-labelledby="applications"><div className="section-heading"><div><p className="eyebrow eyebrow-light">Области применения</p><h2 id="applications">Контейнерная логистика</h2></div><p className="section-lead">Модель подбирают с учётом схемы штабелирования, рабочей высоты, пространства площадки и типа привода.</p></div><div className="application-grid">{applications.map((application) => <article key={application.number}><span>{application.number}</span><h3>{application.title}</h3><p>{application.text}</p></article>)}</div></section>

    <section className="section" aria-labelledby="comparison"><div className="section-heading"><div><p className="eyebrow">Сравнение</p><h2 id="comparison">Основные различия моделей</h2></div><CtaLink intent="selection" secondary/></div><ProductComparison/><p className="table-note">Сравнение основано на подтверждённых значениях. Комплектацию и условия поставки необходимо уточнять отдельно.</p></section>

    <section className="section"><CompanySummary/></section>

    <section className="section section-dark" aria-labelledby="company-advantages"><div className="section-heading"><div><p className="eyebrow eyebrow-light">Почему {companyData.shortName}</p><h2 id="company-advantages">От выбора модели до сервисных вопросов</h2></div><p className="section-lead">Преимущества сформулированы на основе опубликованного подхода компании и адаптированы к покупке ричстакера XCMG.</p></div><div className="advantage-grid advantage-grid-dark">{companyData.advantages.map((advantage, index) => <article key={advantage.title}><span>0{index + 1}</span><h3>{advantage.title}</h3><p>{advantage.description}</p></article>)}</div></section>

    <section className="section split-content" aria-labelledby="warranty"><div><p className="eyebrow">Гарантия и сервис</p><h2 id="warranty">Условия требуют проверки до поставки</h2></div><div><p>Регламентное обслуживание влияет на сохранение гарантийных условий. На отдельной странице собрана подтверждённая общая информация XCMG и список вопросов, которые следует зафиксировать для выбранной модели.</p><Link className="text-link" href="/garantiya">Подробнее о гарантии и сервисе →</Link></div></section>

    <section className="section" aria-labelledby="commercial-request"><div className="section-heading"><div><p className="eyebrow">Следующий шаг</p><h2 id="commercial-request">От задачи — к предметному запросу</h2></div></div><div className="cta-grid"><article><span>01</span><h3>Консультация</h3><p>Обсудить исходные условия и доступные подтверждённые данные.</p><CtaLink intent="consultation" secondary/></article><article><span>02</span><h3>Подбор модели</h3><p>Сопоставить высоту подъёма, штабелирование, габариты и тип привода.</p><CtaLink intent="selection" secondary/></article><article><span>03</span><h3>Коммерческое предложение</h3><p>Запросить актуальные цену, комплектацию и условия после технического уточнения.</p><CtaLink intent="quote" secondary/></article></div></section>

    <section className="section faq-section" aria-labelledby="faq"><div><p className="eyebrow">FAQ</p><h2 id="faq">Вопросы о подборе</h2></div><div className="faq-list"><article><h3>Какие модели представлены?</h3><p>XCS4545K, XCS4541K, XCS4531K и электрический XCS4531E. Перегружатели порожних контейнеров в каталог не входят.</p></article><article><h3>Как сравнить модели?</h3><p>Начните со схемы штабелирования, максимальной высоты подъёма, габаритов машины и типа привода. Полные доступные таблицы находятся на страницах моделей.</p></article><article><h3>Где указаны цена и наличие?</h3><p>Коммерческие сведения не публикуются без актуального подтверждения. Запросите их по телефону или email.</p></article><article><h3>Можно ли отправить заявку через форму?</h3><p>Форма не используется: консультация и подбор доступны по телефону, а запрос коммерческого предложения открывает письмо на утверждённый email.</p></article></div></section>

    <section className="section section-last"><ContactPanel title="Подготовим следующий шаг по вашему запросу"/></section>
  </>;
}
