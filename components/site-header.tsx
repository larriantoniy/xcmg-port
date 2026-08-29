import Link from "next/link";
import { Phone } from "lucide-react";
import { companyData } from "@/data/company";
const links = [{href:"/richstackery",label:"Ричстакеры"},{href:"/garantiya",label:"Гарантия"},{href:"/about",label:"О компании"},{href:"/contacts",label:"Контакты"}];
export function SiteHeader() { return <header className="site-header"><div className="container header-inner"><Link className="brand" href="/"><span>XCMG</span><small>Ричстакеры</small></Link><nav className="site-nav" aria-label="Основная навигация">{links.map((link)=><Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><a className="header-contact" href={companyData.phoneHref}><Phone aria-hidden="true" size={15} strokeWidth={1.8}/><span>{companyData.phone}</span></a></div></header>; }
