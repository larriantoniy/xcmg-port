import Link from "next/link";
import { products } from "@/data/products";
import { specificationValue } from "@/lib/products";

export function ProductComparison() {
  return <div className="table-scroll"><table className="details comparison-table"><thead><tr><th>Модель</th><th>Тип</th><th>Грузоподъёмность</th><th>Штабелирование</th><th>Высота подъёма</th></tr></thead><tbody>{products.map((product) => <tr key={product.id}><th><Link href={`/richstackery/${product.slug}`}>{product.model}</Link></th><td>{product.model === "XCS4531E" ? "Электрический" : "С ДВС"}</td><td>{specificationValue(product, "Максимальная грузоподъёмность")} кг</td><td>{specificationValue(product, "Ёмкость штабеля")}</td><td>{specificationValue(product, "Максимальная высота подъёма")} мм</td></tr>)}</tbody></table></div>;
}
