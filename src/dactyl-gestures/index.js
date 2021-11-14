import { GestureEstimator } from 'fingerpose';
import А from './russian/А';
import В from './russian/В';

export const RussianDactylGestures = [
  А,
  В,
];

export const russianDactylGesturesEstimator = new GestureEstimator(RussianDactylGestures);
