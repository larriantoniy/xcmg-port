import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
interface MetadataInput { title:string;description:string;path:`/${string}`|"/";images?:`/images/products/${string}`[]; }
export function createMetadata({ title,description,path,images=[] }:MetadataInput):Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Ричстакеры XCMG", locale: "ru_RU", type: "website", images: images.map(absoluteUrl) },
  };
}
