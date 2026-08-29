import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactPanel } from "@/components/contact-panel";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Гарантия и сервис ричстакеров XCMG",
  description: "Общая информация о гарантии, регламентном обслуживании и сервисном маршруте для ричстакеров XCMG.",
  path: "/garantiya",
});

export default function WarrantyPage() {
  return <>
    <Breadcrumbs currentPath="/garantiya" items={[{ label: "Главная", href: "/" }, { label: "Гарантия и сервис" }]} />
    <header className="inner-hero"><p className="eyebrow">Гарантия и сервис</p><h1>Обслуживание техники XCMG</h1><p className="hero-lead">Работоспособность техники зависит не только от её характеристик, но и от соблюдения рекомендованного изготовителем регламента технического обслуживания.</p></header>
    <section className="section split-content" aria-labelledby="conditions"><div><p className="eyebrow">Общие условия</p><h2 id="conditions">Что важно уточнить до поставки</h2></div><div><p>На официальной странице XCMG указано, что гарантия изготовителя относится к технике, приобретённой у официальных дилеров, и связана с прохождением планового обслуживания в сертифицированных сервисных центрах.</p><p>Применимость условий, срок гарантии для выбранного ричстакера, перечень регламентных работ и ближайший сервисный центр необходимо зафиксировать для конкретной поставки. Этот сайт не подменяет гарантийный документ.</p></div></section>
    <section className="section" aria-labelledby="steps"><div className="section-heading"><div><p className="eyebrow">Перед запросом</p><h2 id="steps">Вопросы по сервису</h2></div></div><ul className="check-list"><li>Кто является продавцом и какие гарантийные документы входят в поставку</li><li>Какой регламент ТО действует для конкретной модели и комплектации</li><li>Где расположен подходящий сертифицированный сервисный центр</li><li>Как оформляется обращение и какие документы потребуются</li></ul><p className="table-note">Источник общей информации: <a href="https://xcmg-ru.ru/garantiya-i-servis/garantijnoe-obsluzhivanie/" target="_blank" rel="noreferrer">страница гарантийного обслуживания XCMG в России</a>.</p></section>
    <section className="section split-content"><div><p className="eyebrow">Каталог</p><h2>Выберите модель</h2></div><div><p>После выбора ричстакера можно сформировать список технических и сервисных вопросов для коммерческого предложения.</p><Link className="text-link" href="/richstackery">Перейти к ричстакерам →</Link></div></section>
    <section className="section section-last"><ContactPanel title="Уточнить условия для выбранной модели" /></section>
  </>;
}
