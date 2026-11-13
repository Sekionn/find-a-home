import type { TranslationKey } from "../../i18n/types";
import type { PolaroidProps } from "../../components/Polaroid/Polaroid";

// Text and photo blocks need translation keys in both dictionaries; spacers do not.
type TextBlock = { kind: "text"; id: string; headingKey: TranslationKey; bodyKey: TranslationKey };
type PhotoBlock = { kind: "photo"; id: string } & PolaroidProps;
type SpacerBlock = { kind: "spacer"; id: string; height?: number };
export type FridgeBlock = TextBlock | PhotoBlock | SpacerBlock;

// Photo focalPoint values run from 0 to 100: x = left/right, y = top/bottom.
// Adjust each photo independently; 50/50 centers the crop.
// For an empty grid slot, insert: { kind: "spacer", id: "space-1", height: 80 },
// Spacer height is in pixels (default 80). Give every block a unique id.
export const fridgeBlocks: FridgeBlock[] = [
  {
    kind: "photo", id: "welcome", src: "/images/fun times.JPG",
    captionKey: "home.photo.welcome.caption", altKey: "home.photo.welcome.alt",
    color: "red", priority: true,
    focalPoint: { x: 50, y: 50 },
  },
  { kind: "text", id: "intro", headingKey: "home.note.intro.heading", bodyKey: "home.note.intro.body" },
  { kind: "text", id: "about", headingKey: "home.note.about.heading", bodyKey: "home.note.about.body" },
  {
    kind: "photo", id: "second", src: "/images/bananerne redder alle.jpeg",
    captionKey: "home.photo.climber.caption", altKey: "home.photo.climber.alt",
    color: "black",
    focalPoint: { x: 50, y: 60 },
  },
  {
    kind: "photo", id: "show", src: "/images/the goat.jpg",
    captionKey: "home.photo.show.caption", altKey: "home.photo.show.alt",
    color: "yellow",
    focalPoint: { x: 50, y: 50 },
  },
  { kind: "text", id: "about", headingKey: "home.note.about.heading.part2", bodyKey: "home.note.about.body.part2" },
  {
    kind: "photo", id: "second", src: "/images/silly me.jpeg",
    captionKey: "home.photo.second.caption", altKey: "home.photo.second.alt",
    color: "blue",
    focalPoint: { x: 50, y: 50 },
  },
  { kind: "text", id: "home", headingKey: "home.note.home.heading", bodyKey: "home.note.home.body" },
  { kind: "spacer", id: "space-1", height: 80 },
  { kind: "text", id: "home", headingKey: "home.note.home.heading", bodyKey: "home.note.home.body" },
  {
    kind: "photo", id: "second", src: "/images/important conversations.jpeg",
    captionKey: "home.photo.second.caption", altKey: "home.photo.second.alt",
    color: "black",
    focalPoint: { x: 50, y: 50 },
  },
];
