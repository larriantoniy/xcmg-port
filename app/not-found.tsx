import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Страница не найдена", robots: { index: false, follow: false } };

export default function NotFound() {
  return <section className="page-intro"><p className="eyebrow">Ошибка 404</p><h1>Страница не найдена</h1><p className="lead">Адрес мог измениться или страница не существует.</p><div className="actions"><Link className="button" href="/richstackery">Перейти к ричстакерам</Link><Link className="button button-secondary" href="/">На главную</Link></div></section>;
}
