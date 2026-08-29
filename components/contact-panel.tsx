import { CtaLink } from "@/components/cta-link";
import { companyData } from "@/data/company";

export function ContactPanel({ title = "Обсудить задачу" }: { title?: string }) {
  return <div className="contact-panel"><div><p className="eyebrow">Контакты</p><h2>{title}</h2><p>Свяжитесь с нами по подтверждённому каналу — поможем сопоставить модели с условиями работы.</p></div><div className="contact-channels"><a className="contact-channel" href={companyData.phoneHref}><span>Телефон</span><strong>{companyData.phone}</strong></a><a className="contact-channel" href={companyData.emailHref}><span>Email</span><strong>{companyData.email}</strong></a><CtaLink intent="consultation" /></div></div>;
}
