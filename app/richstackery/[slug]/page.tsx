import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactPanel } from "@/components/contact-panel";
import { CtaLink } from "@/components/cta-link";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { ProductImages } from "@/components/product-images";
import { ProductKeySpecs } from "@/components/product-key-specs";
import { getProductBySlug, products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { productImages } from "@/lib/products";

interface ProductPageProps { params:Promise<{slug:string}>; }
export function generateStaticParams(){return products.map(({slug})=>({slug}));}
export async function generateMetadata({params}:ProductPageProps):Promise<Metadata>{const {slug}=await params;const product=getProductBySlug(slug);if(!product)return {};return createMetadata({title:product.seo.title,description:product.seo.description,path:`/richstackery/${product.slug}`,images:productImages(product).map(({src})=>src)});}

export default async function ProductPage({params}:ProductPageProps) {
  const {slug}=await params;
  const product=getProductBySlug(slug);
  if(!product) notFound();
  const related=products.filter((item)=>item.slug!==product.slug);
  const images=productImages(product);
  const url=absoluteUrl(`/richstackery/${product.slug}`);
  const featureSpecs=product.specifications.slice(3,7);

  return <>
    <JsonLd data={{"@context":"https://schema.org","@type":"Product",name:product.title,model:product.model,brand:{"@type":"Brand",name:"XCMG"},category:"Ричстакеры",description:product.description,url,...(images.length?{image:images.map(({src})=>absoluteUrl(src))}:{}),additionalProperty:product.specifications.map((spec)=>({"@type":"PropertyValue",name:spec.label,value:spec.value,unitText:spec.unit}))}}/>
    <Breadcrumbs currentPath={`/richstackery/${product.slug}`} items={[{label:"Главная",href:"/"},{label:"Ричстакеры",href:"/richstackery"},{label:product.model??product.title}]}/>
    <section className="product-hero"><div className="product-hero-copy"><p className="eyebrow">{product.model==="XCS4531E"?"Электрический ричстакер":"Контейнерный ричстакер"}</p><h1>{product.title}</h1><p className="hero-lead">{product.description}</p><ProductKeySpecs product={product}/><div className="actions"><CtaLink intent="quote"/><CtaLink intent="selection" secondary/></div></div><div className="product-hero-media"><ProductImages product={product}/></div></section>

    <section className="section product-overview" aria-labelledby="overview"><div><p className="eyebrow">Назначение</p><h2 id="overview">Работа с гружёными контейнерами</h2><p>{product.applications[0]}. При выборе модели необходимо учитывать параметры контейнеров, требуемую высоту штабеля и планировку рабочей зоны.</p></div><div><p className="eyebrow">Подтверждённые особенности</p><h2>Параметры модели</h2>{featureSpecs.length?<ul className="feature-list">{featureSpecs.map((spec)=><li key={spec.label}><span>{spec.label}</span><strong>{spec.value}{spec.unit?` ${spec.unit}`:""}</strong></li>)}</ul>:<p className="muted">Дополнительные особенности не опубликованы без подтверждённых данных.</p>}</div></section>

    <section className="section" aria-labelledby="specifications"><div className="section-heading"><div><p className="eyebrow">Технические данные</p><h2 id="specifications">Характеристики {product.model}</h2></div><p className="section-lead">В таблицу включены только параметры с зарегистрированным источником.</p></div><div className="table-scroll"><table className="details specification-table"><tbody>{product.specifications.map((spec)=><tr key={spec.label}><th>{spec.label}</th><td>{spec.value}{spec.unit?` ${spec.unit}`:""}</td></tr>)}</tbody></table></div></section>

    <section className="section commercial-strip"><div><p className="eyebrow eyebrow-light">Коммерческий запрос</p><h2>Уточните актуальное предложение</h2><p>Цена, наличие, комплектация, сроки поставки, гарантия и сервисные условия требуют отдельного подтверждения.</p></div><div className="actions"><CtaLink intent="consultation"/><CtaLink intent="quote" secondary/></div></section>

    <section className="section faq-section" aria-labelledby="faq"><div><p className="eyebrow">FAQ</p><h2 id="faq">Вопросы о {product.model}</h2></div><div className="faq-list"><article><h3>Какая грузоподъёмность у модели?</h3><p>Подтверждённое значение приведено в ключевых параметрах и полной таблице выше.</p></article><article><h3>Как понять, подходит ли модель площадке?</h3><p>Сопоставьте габариты, радиус поворота и высоту подъёма с планировкой объекта. Если параметр отсутствует, запросите дополнительную документацию.</p></article><article><h3>Где получить цену?</h3><p>Актуальную цену и комплектацию можно запросить по телефону или утверждённому email.</p></article></div></section>

    <section className="section" aria-labelledby="related"><div className="section-heading"><div><p className="eyebrow">Другие модели</p><h2 id="related">Сравните с другими ричстакерами</h2></div><Link className="text-link" href="/richstackery">Все модели →</Link></div><div className="product-grid product-grid-related">{related.map((item)=><ProductCard key={item.id} product={item}/>)}</div></section>
    <section className="section section-last"><ContactPanel title={`Обсудить ричстакер ${product.model}`}/></section>
  </>;
}
