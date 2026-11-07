import type { TranslationKey } from "../../i18n/types";
import { useLanguage } from "../../context/LanguageContext";
import FridgeMagnet, { type MagnetColor } from "../FridgeMagnet/FridgeMagnet";
import "./Polaroid.css";

export type PolaroidProps = {
  src: string;
  captionKey: TranslationKey;
  altKey: TranslationKey;
  color: MagnetColor;
  crop?: "welcome" | "show" | "second";
  className?: string;
  priority?: boolean;
};

export default function Polaroid({ src, captionKey, altKey, color, crop, className = "", priority = false }: PolaroidProps) {
  const { t } = useLanguage();
  return (
    <figure className={`polaroid ${className}`}>
      <FridgeMagnet color={color} />
      <div className={`polaroid__photo ${crop ? `polaroid__photo--${crop}` : ""}`}>
        <img src={src} alt={t(altKey)} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
      </div>
      <figcaption>{t(captionKey)}</figcaption>
    </figure>
  );
}
