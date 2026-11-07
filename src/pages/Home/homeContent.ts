import type { TranslationKey } from "../../i18n/types";
import type { PolaroidProps } from "../../components/Polaroid/Polaroid";

// Add a translation key in both dictionaries, then place its block here.
type TextBlock = { kind: "text"; id: string; headingKey: TranslationKey; bodyKey: TranslationKey };
type PhotoBlock = { kind: "photo"; id: string } & PolaroidProps;
export type FridgeBlock = TextBlock | PhotoBlock;

export const fridgeBlocks: FridgeBlock[] = [
  {
    kind: "photo", id: "welcome", src: "/images/Welcome.png",
    captionKey: "home.photo.welcome.caption", altKey: "home.photo.welcome.alt",
    color: "red", crop: "welcome", priority: true,
  },
  { kind: "text", id: "intro", headingKey: "home.note.intro.heading", bodyKey: "home.note.intro.body" },
  { kind: "text", id: "about", headingKey: "home.note.about.heading", bodyKey: "home.note.about.body" },
  {
    kind: "photo", id: "show", src: "/images/Show.png",
    captionKey: "home.photo.show.caption", altKey: "home.photo.show.alt",
    color: "yellow", crop: "show",
  },
  {
    kind: "photo", id: "second", src: "/images/ShowSecond.png",
    captionKey: "home.photo.second.caption", altKey: "home.photo.second.alt",
    color: "blue", crop: "second",
  },
  { kind: "text", id: "home", headingKey: "home.note.home.heading", bodyKey: "home.note.home.body" },
];
