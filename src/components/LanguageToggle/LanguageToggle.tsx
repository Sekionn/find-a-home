import { useLanguage } from "../../context/LanguageContext";
import "./LanguageToggle.css";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="language-toggle" role="group" aria-label={t("language.label")}>
      <button type="button" lang="da" aria-pressed={language === "da"} onClick={() => setLanguage("da")}>Dansk</button>
      <span aria-hidden="true">/</span>
      <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>English</button>
    </div>
  );
}
