import "./FridgeMagnet.css";

export type MagnetColor = "red" | "green" | "yellow" | "blue";

export default function FridgeMagnet({ color = "red" }: { color?: MagnetColor }) {
  return <span className={`fridge-magnet fridge-magnet--${color}`} aria-hidden="true" />;
}
