import kirsten from './kirsten'
import mama from './mama'

export interface Riddle {
  name: string,
  answer: string,
  question: string,
  latitude: number,
  longitude: number
}

export interface TreasureConfig {
  name: string
  riddles: Riddle[]
}

export const getConfig = (name: string): TreasureConfig | null => {
  if (name === 'mama') {
    return mama
  } else if (name === 'kirsten') {
    return kirsten
  }
  return null
}
