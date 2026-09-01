import Image from "next/image";
import { GRADIENT } from "@/components/Hero";

type ImagePlaceholderProps = {
  src?: string | null;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className,
}: ImagePlaceholderProps) {
  if (!src) {
    return (
      <div
        className={className}
        style={{ background: GRADIENT, aspectRatio: `${width} / ${height}` }}
      />
    );
  }

  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} />
  );
}
