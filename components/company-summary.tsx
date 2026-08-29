import Link from "next/link";
import { companyData } from "@/data/company";

export function CompanySummary() {
  return <div className="company-summary"><div><p className="eyebrow">О компании</p><h2>{companyData.shortName}</h2><p className="lead-small">{companyData.description}</p><p>{companyData.activityDescription}</p></div><dl className="company-facts"><div><dt>Направление сайта</dt><dd>Ричстакеры XCMG</dd></div><div><dt>Компания</dt><dd>{companyData.legalName}</dd></div><div><dt>ИНН / КПП</dt><dd>{companyData.inn} / {companyData.kpp}</dd></div></dl><Link className="text-link" href="/about">Подробнее о компании →</Link></div>;
}
