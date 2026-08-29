import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactPanel } from "@/components/contact-panel";
import { CtaLink } from "@/components/cta-link";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { ProductComparison } from "@/components/product-comparison";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Ричстакеры XCMG — каталог моделей",
  description: "Каталог ричстакеров XCMG XCS4545K, XCS4541K, XCS4531K и XCS4531E с характеристиками и сравнением моделей.",
  path: "/richstackery",
});

export default function RichstackersPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Ричстакеры XCMG", url: absoluteUrl("/richstackery"), mainEntity: { "@type": "ItemList", numberOfItems: products.length, itemListElement: products.map((product,index) => ({ "@type": "ListItem", position:index+1, url:absoluteUrl(`/richstackery/${product.slug}`), name:product.title })) } }} />
    <Breadcrumbs currentPath="/richstackery" items={[{label:"Главная",href:"/"},{label:"Ричстакеры"}]}/>
    <header className="catalog-hero"><div><p className="eyebrow">Каталог XCMG</p><h1>Ричстакеры для контейнерных операций</h1><p className="hero-lead">Четыре модели с максимальной грузоподъёмностью 45 000 кг. Изучите полные доступные характеристики и сравните машины по ключевым параметрам.</p><div className="actions"><CtaLink intent="selection"/><CtaLink intent="quote" secondary/></div></div><div className="catalog-index"><span>Моделей</span><strong>04</strong><p>3 с ДВС<br/>1 электрическая</p></div></header>
    <section className="section" aria-labelledby="catalog"><div className="section-heading"><div><p className="eyebrow">Каталог</p><h2 id="catalog">Модельный ряд ричстакеров XCMG</h2></div><p className="section-lead">Выберите подходящую модель. Перегружатели порожних контейнеров в этот каталог не включены.</p></div><div className="product-grid">{products.map((product)=><ProductCard key={product.id} product={product}/>)}</div></section>
    <section className="section" aria-labelledby="comparison"><div className="section-heading"><div><p className="eyebrow">Ключевые параметры</p><h2 id="comparison">Сравнение моделей</h2></div></div><ProductComparison/><p className="table-note">Для окончательного подбора потребуются сведения о контейнерах, схеме площадки, интенсивности работы и предпочтительном типе привода.</p></section>
    <section className="section split-content"><div><p className="eyebrow">Подбор</p><h2>Какие данные подготовить</h2></div><ul className="check-list"><li>Типы и масса обрабатываемых контейнеров</li><li>Требуемая схема и высота штабелирования</li><li>Размеры проездов и рабочей площадки</li><li>Режим и интенсивность эксплуатации</li><li>Ограничения по типу силовой установки</li></ul></section>
    <section className="section section-last"><ContactPanel title="Нужна помощь со сравнением моделей?"/></section>
  </>;
}
