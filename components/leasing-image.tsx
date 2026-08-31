import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

interface LeasingImageProps {
  src: "/lizing/1.webp" | "/lizing/2.webp";
  alt: string;
  className: string;
}

export function LeasingImage({ src, alt, className }: LeasingImageProps) {
  const filePath = join(process.cwd(), "public", src);
  const isLcpImage = src === "/lizing/1.webp";

  if (!existsSync(filePath)) {
    return <div className={`${className} leasing-image-fallback`} role="img" aria-label={`Изображение «${alt}» пока недоступно`} />;
  }

  return (
    <div className={className}>
      <Image src={src} alt={alt} fill loading={isLcpImage ? "eager" : "lazy"} fetchPriority={isLcpImage ? "high" : "auto"} sizes="(max-width: 900px) 100vw, (max-width: 1520px) 38vw, 560px" />
    </div>
  );
}
