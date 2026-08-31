import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactPanel } from "@/components/contact-panel";
import { LeasingImage } from "@/components/leasing-image";
import { contactHref } from "@/data/company";
import { leasingContent } from "@/data/leasing";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Лизинг ричстакеров XCMG — условия финансирования",
  description: "Лизинг ричстакеров XCMG: первоначальный взнос от 10%, срок от 1 до 5 лет и возможность досрочного погашения.",
  path: "/lizing",
});

export default function LeasingPage() {
  const [firstImage, secondImage] = leasingContent.imagePaths;

  return (
    <>
      <Breadcrumbs currentPath="/lizing" items={[{ label: "Главная", href: "/" }, { label: "Лизинг" }]} />

      <section className="section leasing-layout section-last" aria-labelledby="leasing-conditions">
        <div className="leasing-copy">
          <p className="eyebrow">Лизинговые условия</p>
          <h1>Лизинг ричстакеров XCMG</h1>
          <p className="hero-lead">Финансирование помогает рассмотреть приобретение ричстакера XCMG без единовременной оплаты полной стоимости техники.</p>
          <p>Условия лизинга позволяют спланировать обновление контейнерной техники с учётом задач предприятия. Перед обращением полезно определить нужную модель и требования к её комплектации.</p>
          <div className="actions">
            <Link className="button" href={contactHref("quote")}>Оставить заявку</Link>
          </div>
          <Link className="text-link leasing-catalog-link" href="/richstackery">Смотреть ричстакеры XCMG →</Link>
        </div>

        <div className="leasing-showcase" aria-label="Условия лизинга">
          <LeasingImage className="leasing-media leasing-media-primary" src={firstImage} alt="Ричстакер XCMG — лизинг техники" />
          <article className="leasing-condition leasing-condition-one"><span>{leasingContent.conditions[0].label}</span><strong>{leasingContent.conditions[0].value}</strong></article>
          <article className="leasing-condition leasing-condition-two"><span>{leasingContent.conditions[1].label}</span><strong>{leasingContent.conditions[1].value}</strong></article>
          <article className="leasing-condition leasing-condition-three"><span>{leasingContent.conditions[2].label}</span><strong>{leasingContent.conditions[2].value}</strong></article>
          <LeasingImage className="leasing-media leasing-media-secondary" src={secondImage} alt="Портовая техника XCMG в лизинг" />
          <article className="leasing-condition leasing-condition-four"><span>{leasingContent.conditions[3].label}</span><strong>{leasingContent.conditions[3].value}</strong></article>
        </div>
      </section>

      <section className="section section-last">
        <ContactPanel title="Обсудить лизинг ричстакера XCMG" />
      </section>
    </>
  );
}
