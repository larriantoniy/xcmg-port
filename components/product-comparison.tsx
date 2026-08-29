import Link from "next/link";
import { products } from "@/data/products";
import { specificationValue } from "@/lib/products";

export function ProductComparison({ currentSlug }: { currentSlug?: string }) {
  return <div className="table-scroll"><table className="details comparison-table"><thead><tr><th>Модель</th><th>Тип</th><th>Грузоподъёмность</th><th>Штабелирование</th><th>Высота подъёма</th></tr></thead><tbody>{products.map((product) => <tr className={product.slug === currentSlug ? "comparison-current" : undefined} key={product.id}><th><Link href={`/richstackery/${product.slug}`} aria-current={product.slug === currentSlug ? "page" : undefined}>{product.model}</Link></th><td>{product.driveType}</td><td>{specificationValue(product, "Максимальная грузоподъёмность")} кг</td><td>{specificationValue(product, "Схема штабелирования")}</td><td>{specificationValue(product, "Максимальная высота подъёма")} мм</td></tr>)}</tbody></table></div>;
}
