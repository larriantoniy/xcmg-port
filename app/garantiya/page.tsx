import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactPanel } from "@/components/contact-panel";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { companyData } from "@/data/company";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";

const serviceSupportPhone = "8 (800) 333-96-88";
const serviceSupportHref = "tel:+78003339688";

const faq = [
  {
    question: "Нужно ли проходить плановое ТО для сохранения гарантии?",
    answer: "XCMG связывает гарантийное обслуживание с соблюдением рекомендованного регламента планового технического обслуживания. Условия для конкретной поставки следует уточнить в документах к технике и у сервисного центра.",
  },
  {
    question: "Где обслуживается техника XCMG?",
    answer: "ООО «СТРОЙТЕХИМПОРТ» имеет право на гарантийное и постгарантийное обслуживание техники XCMG. Для обращения подготовьте сведения о конкретной машине и характере задачи.",
  },
  {
    question: "Можно ли ремонтировать ричстакер после окончания гарантии?",
    answer: "Да. На странице сервисной поддержки XCMG указано, что сервисные центры выполняют ремонт техники и после окончания гарантийного периода.",
  },
  {
    question: "Какие данные подготовить перед сервисным обращением?",
    answer: "Полезно заранее указать модель ричстакера, серийный номер, описание неисправности, наработку и условия эксплуатации. Это поможет определить дальнейший сервисный маршрут.",
  },
  {
    question: "Где уточнить условия гарантии конкретной поставки?",
    answer: "Для коммерческой консультации по выбранной модели и уточнения условий обслуживания свяжитесь с нами по телефону или email, указанным на сайте.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Гарантия и сервис ричстакеров XCMG — обслуживание и ремонт",
  description: "Практическая информация о гарантийном обслуживании, плановом ТО, сервисных центрах и ремонте ричстакеров XCMG в России.",
  path: "/garantiya",
});

export default function WarrantyPage() {
  return <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    }}/>
    <Breadcrumbs currentPath="/garantiya" items={[{ label: "Главная", href: "/" }, { label: "Гарантия и сервис" }]}/>

    <header className="inner-hero">
      <p className="eyebrow">Сервис ричстакеров XCMG</p>
      <h1>Гарантийное обслуживание ричстакеров XCMG</h1>
      <p className="hero-lead">Практические ориентиры по плановому обслуживанию, сервисному маршруту и ремонту техники для контейнерных операций.</p>
    </header>

    <section className="section split-content" aria-labelledby="warranty-service">
      <div><p className="eyebrow">Общие условия</p><h2 id="warranty-service">Гарантия и сервис</h2><p className="section-lead">Что важно знать владельцу ричстакера XCMG</p></div>
      <div><p>Надёжная работа ричстакера зависит не только от его технического состояния на момент поставки, но и от регулярного обслуживания по рекомендациям производителя. Плановое ТО помогает поддерживать машину в рабочем состоянии и важно для гарантийных обязательств.</p><p>{companyData.shortName} имеет право на гарантийное и постгарантийное обслуживание техники XCMG. Для конкретной машины условия гарантии, перечень работ и порядок обращения определяются её документами и условиями поставки.</p></div>
    </section>

    <section className="section split-content" aria-labelledby="maintenance">
      <div><p className="eyebrow">Эксплуатация техники</p><h2 id="maintenance">Плановое техническое обслуживание</h2><p className="section-lead">Почему соблюдение регламента важно для гарантийных обязательств</p></div>
      <div><p>Регламентное обслуживание позволяет вовремя оценивать состояние основных систем машины и выполнять необходимые работы в предусмотренном порядке. Для ричстакера это особенно значимо: техника работает с тяжёлыми контейнерами, а простои влияют на весь рабочий цикл площадки.</p><p>Интервалы, состав операций и требования к конкретной комплектации указываются изготовителем в эксплуатационной документации. Перед планированием ТО сверяйтесь с ней и с рекомендациями сервисного центра.</p></div>
    </section>

    <section className="section split-content" aria-labelledby="service-centers">
      <div><p className="eyebrow">Сервисная сеть</p><h2 id="service-centers">Сервисные центры XCMG</h2><p className="section-lead">Где выполняется гарантийное и послегарантийное обслуживание</p></div>
      <div><p>{companyData.shortName} выполняет гарантийное и постгарантийное обслуживание техники XCMG в рамках полномочий официального дистрибьютора портовой техники.</p><p>Для ремонта и сервисных работ полезно заранее подготовить сведения о модели, серийном номере, наработке и характере неисправности.</p><p className="table-note">Официальная сервисная поддержка XCMG: <a href={serviceSupportHref}>{serviceSupportPhone}</a></p></div>
    </section>

    <section className="section split-content" aria-labelledby="repair-parts">
      <div><p className="eyebrow">Поддержка после поставки</p><h2 id="repair-parts">Ремонт и запасные части</h2><p className="section-lead">Поддержка техники после ввода в эксплуатацию</p></div>
      <div><p>После окончания гарантийного периода техника может обслуживаться и ремонтироваться по результатам диагностики. В зависимости от характера неисправности работы могут затрагивать разные узлы машины.</p><p>{companyData.shortName} имеет право на реализацию запасных частей, оборудования, масел и смазочных материалов XCMG. Необходимость и состав комплектующих определяются по конкретной диагностике.</p></div>
    </section>

    <section className="section" aria-labelledby="service-request">
      <div className="section-heading"><div><p className="eyebrow">Маршрут обращения</p><h2 id="service-request">Как обратиться по вопросам сервиса</h2><p className="section-lead">Помощь с подбором дальнейшего маршрута обслуживания</p></div></div>
      <ul className="check-list"><li>Подготовьте модель, серийный номер и краткое описание обращения.</li><li>Для гарантийного обслуживания или ремонта свяжитесь с {companyData.shortName}.</li><li>Для подбора модели и коммерческих условий перейдите в <Link href="/contacts">контакты нашего сайта</Link>.</li></ul>
    </section>

    <section className="section faq-section" aria-labelledby="faq">
      <div><p className="eyebrow">Ответы для владельца</p><h2 id="faq">FAQ</h2><p className="section-lead">Частые вопросы о гарантии и сервисе ричстакеров XCMG</p></div>
      <div className="faq-list">{faq.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
    </section>

    <section className="section" aria-labelledby="models">
      <div className="section-heading"><div><p className="eyebrow">Каталог техники</p><h2 id="models">Ричстакеры XCMG</h2><p className="section-lead">Выберите модель, чтобы изучить её характеристики и сформировать предметный коммерческий запрос.</p></div><Link className="text-link" href="/richstackery">Все модели →</Link></div>
      <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product}/>)}</div>
    </section>

    <section className="section section-last"><ContactPanel title="Уточнить условия для выбранного ричстакера"/></section>
  </>;
}
