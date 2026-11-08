import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import OpenFridge from "../../components/OpenFridge/OpenFridge";
import LanguageToggle from "../../components/LanguageToggle/LanguageToggle";
import MagnetText from "../../components/MagnetText/MagnetText";
import Polaroid from "../../components/Polaroid/Polaroid";
import FridgeMagnet from "../../components/FridgeMagnet/FridgeMagnet";
import { fridgeBlocks } from "./homeContent";
import "./Home.css";

// Keep the extra magnet designs available while their shapes are being decided.
const showDecorativeMagnets = false;

export default function Home() {
  const { t } = useLanguage();
  const [isFridgeOpen, setIsFridgeOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#introduction">{t("home.skip")}</a>
      <div className={`fridge${isFridgeOpen ? " fridge--open" : ""}`}>
        <header className="fridge__header">
          <a className="fridge__brand" href="#"><span aria-hidden="true">✳</span></a>
          <LanguageToggle />
        </header>
        <main id="introduction" tabIndex={-1}>
          <section className="fridge__intro" aria-labelledby="intro-title">
            <h1 id="intro-title">{t("home.title")}</h1>
            <p className="fridge__description">{t("home.intro")}</p>
            <a className="fridge__scroll" href="#fridge-board">{t("home.scroll")}</a>
            {showDecorativeMagnets && <span className="fridge__heart" aria-hidden="true">♡</span>}
          </section>
          <section id="fridge-board" className="fridge-board">
            {fridgeBlocks.map((block) => block.kind === "photo" ? (
              <Polaroid key={block.id} {...block} className={`board-item board-item--${block.id}`} />
            ) : block.kind === "spacer" ? (
              <div
                key={block.id}
                className="board-spacer"
                style={{ height: Math.max(0, block.height ?? 80) }}
                aria-hidden="true"
              />
            ) : (
              <section key={block.id} className={`board-item magnet-note board-item--${block.id}`}>
                <MagnetText as="h2" textKey={block.headingKey} />
                <MagnetText textKey={block.bodyKey} />
              </section>
            ))}
            {showDecorativeMagnets && (
              <>
                <span className="fridge-board__star" aria-hidden="true">✳</span>
                <span className="fridge-board__flower" aria-hidden="true">✿</span>
              </>
            )}
          </section>
          <section className="hello-note" aria-labelledby="hello-title">
            <FridgeMagnet color="green" />
            <p className="hello-note__eyebrow">{t("home.edition")}</p>
            <h2 id="hello-title">{t("home.note.hello.heading")}</h2>
            <p>{t("home.note.hello.body")}</p>
            <p className="hello-note__contact">{t("home.contact")}</p>
            <span aria-hidden="true">↗</span>
          </section>
        </main>
        <footer className="fridge__footer">
          <p>{t("home.footer")}</p>
          <p>{t("home.signoff")}</p>
        </footer>
        <button
          className="fridge__handle"
          type="button"
          aria-label={t("fridge.open")}
          title={t("fridge.open")}
          aria-haspopup="dialog"
          aria-controls="open-fridge"
          aria-expanded={isFridgeOpen}
          onClick={() => setIsFridgeOpen(true)}
        />
      </div>
      <OpenFridge isOpen={isFridgeOpen} onClose={() => setIsFridgeOpen(false)} />
    </>
  );
}
