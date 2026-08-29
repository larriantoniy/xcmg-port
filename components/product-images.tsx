import Image from "next/image";
import type { ProductImageAsset } from "@/lib/product-images";

interface ProductImagesProps {
  image: ProductImageAsset | null;
  productTitle: string;
}

export function ProductImages({ image, productTitle }: ProductImagesProps) {
  if (!image) {
    return <div className="product-image-placeholder" role="img" aria-label={`Фотография ${productTitle} недоступна`}>Фотография модели недоступна</div>;
  }

  return (
    <div className="product-image">
      <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 900px) 100vw, (max-width: 1520px) 50vw, 740px"/>
    </div>
  );
}
