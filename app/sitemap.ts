import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { absoluteUrl } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap {const paths=["/" as const,"/richstackery" as const,"/lizing" as const,"/garantiya" as const,"/about" as const,"/contacts" as const,...products.map((product)=>`/richstackery/${product.slug}` as const)];return paths.map((path)=>({url:absoluteUrl(path),changeFrequency:path==="/"?"weekly":"monthly",priority:path==="/"?1:path==="/richstackery"?.9:.7}));}
