import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaLink } from "@/components/cta-link";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { ProductComparison } from "@/components/product-comparison";
import { ProductImages } from "@/components/product-images";
import { ProductKeySpecs } from "@/components/product-key-specs";
import { companyData } from "@/data/company";
import { getProductBySlug, products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { getProductImage } from "@/lib/product-images";
import { absoluteUrl } from "@/lib/site";
import type { ProductSpecification } from "@/types/product";

interface ProductPageProps { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const image = getProductImage(product);
  return createMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/richstackery/${product.slug}`,
    images: image ? [image.src] : [],
  });
}

function specificationValue(specification: ProductSpecification) {
  return <>{specification.value}{specification.unit ? ` ${specification.unit}` : ""}</>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((item) => item.slug !== product.slug);
  const image = getProductImage(product);
  const url = absoluteUrl(`/richstackery/${product.slug}`);
  const specificationGroups = [...new Set(product.specifications.map(({ group }) => group))];
  const mainSpecifications = product.specifications.filter(({ group }) => group === "Производительность").slice(0, 7);

  return <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      model: product.model,
      brand: { "@type": "Brand", name: "XCMG" },
      category: "Ричстакеры",
      description: product.description,
      url,
      ...(image ? { image: absoluteUrl(image.src) } : {}),
      additionalProperty: product.specifications.map((specification) => ({
        "@type": "PropertyValue",
        name: specification.label,
        value: specification.value,
        ...(specification.unit ? { unitText: specification.unit } : {}),
      })),
    }}/>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: product.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    }}/>

    <Breadcrumbs currentPath={`/richstackery/${product.slug}`} items={[
      { label: "Главная", href: "/" },
      { label: "Ричстакеры", href: "/richstackery" },
      { label: product.model ?? product.title },
    ]}/>

    <section className="product-hero">
      <div className="product-hero-copy">
        <p className="eyebrow">{product.driveType === "Электрический" ? "Электрический ричстакер" : "Контейнерный ричстакер"}</p>
        <h1>{product.title}</h1>
        <p className="hero-lead">{product.description}</p>
        <ProductKeySpecs product={product}/>
        <div className="actions"><CtaLink intent="quote"/><a className="product-phone" href={companyData.phoneHref}>{companyData.phone}</a></div>
      </div>
      <div className="product-hero-media"><ProductImages image={image} productTitle={product.title}/></div>
    </section>

    <section className="section product-overview" aria-labelledby="overview">
      <div><p className="eyebrow">О модели</p><h2 id="overview">{product.model} в контейнерной логистике</h2></div>
      <div>{product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="text-link" href="/richstackery">Вернуться в каталог ричстакеров →</Link></div>
    </section>

    <section className="section" aria-labelledby="main-specifications">
      <div className="section-heading"><div><p className="eyebrow">Быстрая оценка</p><h2 id="main-specifications">Основные характеристики</h2></div></div>
      <dl className="main-specifications">{mainSpecifications.map((specification) => <div key={specification.label}><dt>{specification.label}</dt><dd>{specificationValue(specification)}</dd></div>)}</dl>
    </section>

    <section className="section" aria-labelledby="specifications">
      <div className="section-heading"><div><p className="eyebrow">Технические данные</p><h2 id="specifications">Характеристики {product.model}</h2></div></div>
      <div className="table-scroll"><table className="details specification-table"><tbody>{specificationGroups.map((group) => <FragmentGroup group={group} specifications={product.specifications} key={group}/>)}</tbody></table></div>
    </section>

    <section className="section product-content-grid" aria-labelledby="applications">
      <div><p className="eyebrow">Применение</p><h2 id="applications">Для каких задач подходит {product.model}</h2></div>
      <ul className="check-list">{product.applications.map((application) => <li key={application}>{application}</li>)}</ul>
    </section>

    <section className="section" aria-labelledby="features">
      <div className="section-heading"><div><p className="eyebrow">Конструкция и работа</p><h2 id="features">Технические особенности</h2></div></div>
      <div className="feature-benefit-grid">{product.features.map((feature) => <article key={feature.title}><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div>
    </section>

    <section className="section product-content-grid" aria-labelledby="selection-reasons">
      <div><p className="eyebrow">Выбор модели</p><h2 id="selection-reasons">Когда стоит рассмотреть {product.model}</h2></div>
      <ul className="check-list">{product.selectionReasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
    </section>

    <section className="section" aria-labelledby="comparison">
      <div className="section-heading"><div><p className="eyebrow">Сравнение</p><h2 id="comparison">{product.model} и другие ричстакеры XCMG</h2></div><Link className="text-link" href="/richstackery">Все модели →</Link></div>
      <ProductComparison currentSlug={product.slug}/>
    </section>

    <section className="section product-content-grid" aria-labelledby="warranty">
      <div><p className="eyebrow">Поддержка техники</p><h2 id="warranty">Гарантия и сервис</h2></div>
      <div><p>Гарантийные условия, регламент обслуживания и доступность сервисных работ следует согласовать для выбранной комплектации до заключения сделки.</p><Link className="text-link" href="/garantiya">Гарантия и сервис →</Link></div>
    </section>

    <section className="section faq-section" aria-labelledby="faq">
      <div><p className="eyebrow">FAQ</p><h2 id="faq">Вопросы о {product.model}</h2></div>
      <div className="faq-list">{product.faq.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
    </section>

    <section className="section commercial-strip">
      <div><p className="eyebrow eyebrow-light">Коммерческий запрос</p><h2>Получить предложение на {product.model}</h2><p>Уточните актуальные цену, наличие, комплектацию и сроки поставки у специалиста.</p></div>
      <div className="actions"><CtaLink intent="quote"/><Link className="button button-secondary" href="/contacts">Контакты</Link></div>
    </section>

    <section className="section section-last" aria-labelledby="related">
      <div className="section-heading"><div><p className="eyebrow">Модельный ряд</p><h2 id="related">Ричстакеры XCMG для сравнения</h2></div><Link className="text-link" href="/richstackery">Каталог ричстакеров →</Link></div>
      <div className="product-grid product-grid-related">{related.map((item) => <ProductCard key={item.id} product={item}/>)}</div>
    </section>
  </>;
}

function FragmentGroup({ group, specifications }: { group: ProductSpecification["group"]; specifications: ProductSpecification[] }) {
  const rows = specifications.filter((specification) => specification.group === group);
  return <>
    <tr className="specification-group"><th colSpan={2}>{group}</th></tr>
    {rows.map((specification) => <tr key={specification.label}><th>{specification.label}</th><td>{specificationValue(specification)}</td></tr>)}
  </>;
}
