import kirsten from "./kirsten";
import mama from "./mama";
import deborah from "./deborah";

export interface Riddle {
  name: string;
  answer: string;
  question: string;
  latitude: number;
  longitude: number;
  checkpoint?: boolean;
  closeImage?: string;
  backgroundImage?: string;
  correctImage?: string;
  wrongImage?: string;
}

export interface TreasureConfig {
  name: string;
  minDistance?: number;
  startPopup?: string;
  riddles: Riddle[];
}

export const getConfig = (name: string): TreasureConfig | null => {
  if (name === "mama") {
    return mama;
  } else if (name === "kirsten") {
    return kirsten;
  } else if (name === "deborah") {
    return deborah;
  }
  return null;
};
