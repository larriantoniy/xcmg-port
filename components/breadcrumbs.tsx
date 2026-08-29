import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl } from "@/lib/site";
interface Breadcrumb { label:string;href?:`/${string}`; }
export function Breadcrumbs({items,currentPath}:{items:Breadcrumb[];currentPath:`/${string}`}) { return <><JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.label,item:absoluteUrl(item.href??currentPath)}))}}/><nav className="breadcrumbs" aria-label="Хлебные крошки"><ol>{items.map((item)=><li key={`${item.href}-${item.label}`}>{item.href?<Link href={item.href}>{item.label}</Link>:<span aria-current="page">{item.label}</span>}</li>)}</ol></nav></>; }
