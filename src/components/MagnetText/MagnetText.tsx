import type { TranslationKey } from "../../i18n/types";
import { useLanguage } from "../../context/LanguageContext";
import "./MagnetText.css";

type Props = { textKey: TranslationKey; as?: "h1" | "h2" | "p"; className?: string };

export default function MagnetText({ textKey, as: Tag = "p", className = "" }: Props) {
  const { t } = useLanguage();
  const text = t(textKey);
  return (
    <Tag className={`magnet-text ${className}`}>
      <span className="sr-only">{text}</span>
      <span className="magnet-text__tiles" aria-hidden="true">
        {text.split("\n").map((line, lineIndex) => (
          <span className="magnet-text__line" key={lineIndex}>
            {line.split(/\s+/).filter(Boolean).map((word, wordIndex) => (
              <span className="word-magnet" key={wordIndex}>{word}</span>
            ))}
          </span>
        ))}
      </span>
    </Tag>
  );
}
