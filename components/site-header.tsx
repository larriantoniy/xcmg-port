import Link from "next/link";
import { Phone } from "lucide-react";
import { companyData } from "@/data/company";

const links = [
  { href: "/richstackery", label: "Ричстакеры" },
  { href: "/lizing", label: "Лизинг" },
  { href: "/garantiya", label: "Гарантия" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
] as const;

const socialLinks = [
  { href: "https://vk.ru/xcmg__ru", label: "VK", icon: "/social/VK.svg", iconClassName: "header-social-icon-vk" },
  { href: "https://rutube.ru/channel/48042972/", label: "RuTube", icon: "/social/rutube.svg", iconClassName: "header-social-icon-rutube" },
  { href: "https://max.ru/u/f9LHodD0cOJYOM3YgmhsuKwzzX75_Iyx0TBdCFvUC_0H1ihvLk64giff-wo", label: "MAX", icon: "/social/max.svg", iconClassName: "header-social-icon-max" },
] as const;

export function SiteHeader() {
  return <header className="site-header"><div className="container header-inner"><Link className="brand" href="/"><span>XCMG</span><small>Ричстакеры</small></Link><nav className="site-nav" aria-label="Основная навигация">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><div className="header-utilities"><div className="header-socials" aria-label="Социальные сети">{socialLinks.map(({ href, label, icon, iconClassName }) => <a className="header-utility" key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className={`header-social-icon ${iconClassName}`} src={icon} alt="" />
  </a>)}</div><a className="header-utility header-phone" href={companyData.phoneHref} aria-label="Позвонить"><Phone aria-hidden="true" size={18} strokeWidth={1.9}/></a></div></div></header>;
}
