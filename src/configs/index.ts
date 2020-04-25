import kirsten from "./kirsten";
import mama from "./mama";
import deborah from "./deborah";
import simon from "./simon";
import johan from "./johan";

export interface HistoryStep {
  timestamp: number;
  latitude: number;
  longitude: number;
  message: string;
  wp: number;
}

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
  closeAudio?: string;
  wrongImage?: string;
  hints?: {
    text: string;
    timeout: number;
  }[];
}

export interface TreasureConfig {
  name: string;
  minDistance?: number;
  startPopup?: string;
  introAudio?: string;
  riddles: Riddle[];
}

export const getConfig = (name: string): TreasureConfig | null => {
  if (name === "mama") {
    return mama;
  } else if (name === "kirsten") {
    return kirsten;
  } else if (name === "deborah") {
    return deborah;
  } else if (name === "simon") {
    return simon;
  } else if (name === "johan") {
    return johan;
  }
  return null;
};
