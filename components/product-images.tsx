import Image from "next/image";
import type { Product } from "@/types/product";

export function ProductImages({ product }: { product: Product }) {
  const images = [product.media.hero, ...product.media.gallery].filter((image) => image !== null);
  if (images.length === 0) {
    return <div className="product-image-placeholder" role="img" aria-label={`Изображение ${product.title} пока не добавлено`}>Разрешённые изображения модели пока не добавлены</div>;
  }
  return <div className="product-images">{images.map((image, index) => <figure className={index === 0 ? "product-image-hero" : "product-image-gallery"} key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={index === 0} sizes={index === 0 ? "(max-width: 900px) 100vw, 56vw" : "(max-width: 700px) 100vw, 36vw"} /></figure>)}</div>;
}
