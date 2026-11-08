import type { TranslationKey } from "../../i18n/types";
import { useLanguage } from "../../context/LanguageContext";
import FridgeMagnet, { type MagnetColor } from "../FridgeMagnet/FridgeMagnet";
import "./Polaroid.css";

export type PolaroidProps = {
  src: string;
  captionKey: TranslationKey;
  altKey: TranslationKey;
  color: MagnetColor;
  /** Crop alignment in percentages: 0 = left/top, 50 = center, 100 = right/bottom. */
  focalPoint?: { x: number; y: number };
  className?: string;
  priority?: boolean;
};

export default function Polaroid({ src, captionKey, altKey, color, focalPoint = { x: 50, y: 50 }, className = "", priority = false }: PolaroidProps) {
  const { t } = useLanguage();
  return (
    <figure className={`polaroid ${className}`}>
      <FridgeMagnet color={color} />
      <div className="polaroid__photo">
        <img
          src={src}
          alt={t(altKey)}
          style={{ objectPosition: `${Math.max(0, Math.min(100, focalPoint.x))}% ${Math.max(0, Math.min(100, focalPoint.y))}%` }}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      <figcaption>{t(captionKey)}</figcaption>
    </figure>
  );
}
