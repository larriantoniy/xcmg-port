import Link from "next/link";
import { ProductKeySpecs } from "@/components/product-key-specs";
import type { Product } from "@/types/product";
export function ProductCard({product}:{product:Product}) { return <article className="product-card"><div className="product-card-visual" aria-hidden="true"><span>XCMG</span><strong>{product.model}</strong></div><div className="product-card-body"><p className="card-meta">{product.model === "XCS4531E" ? "Электрический ричстакер" : "Контейнерный ричстакер"}</p><h3>{product.title}</h3><p>{product.description}</p><ProductKeySpecs product={product} compact/><Link className="card-link" href={`/richstackery/${product.slug}`}>Открыть страницу модели <span aria-hidden="true">→</span></Link></div></article>; }
