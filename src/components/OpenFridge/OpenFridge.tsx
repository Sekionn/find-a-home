import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./OpenFridge.css";

type Props = { isOpen: boolean; onClose: () => void };

export default function OpenFridge({ isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!isOpen) {
      if (dialog.open) dialog.close();
      return;
    }

    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} id="open-fridge" className="open-fridge" aria-label={t("fridge.interiorLabel")} onClose={onClose}>
      <div className="open-fridge__interior" aria-hidden="true">
        <div className="open-fridge__light" />
        <div className="open-fridge__shelf open-fridge__shelf--one" />
        <div className="open-fridge__shelf open-fridge__shelf--two" />
        <div className="open-fridge__shelf open-fridge__shelf--three" />
        <div className="open-fridge__drawer" />
      </div>
      <div className="open-fridge__portrait">
        <img src="/images/Welcome.png" alt={t("fridge.portraitAlt")} />
      </div>
      <button className="open-fridge__close" type="button" onClick={onClose} autoFocus>
        <span aria-hidden="true">×</span> {t("fridge.close")}
      </button>
    </dialog>
  );
}
