import { GestureEstimator } from 'fingerpose';
import А from './russian/А';
// import Б from './russian/Б';
import В from './russian/В';
import Г from './russian/Г';
// import Д from './russian/Д';
import Е from './russian/Е';
// import Ё from './russian/Ё';
// import Ж from './russian/Ж';
// import З from './russian/З';
import И from './russian/И';
// import Й from './russian/Й';
// import К from './russian/К';
import Л from './russian/Л';
import М from './russian/М';
import Н from './russian/Н';
import О from './russian/О';
import П from './russian/П';
import Р from './russian/Р';
import С from './russian/С';
import У from './russian/У';
import Ф from './russian/Ф';
import Х from './russian/Х';
import Ц from './russian/Ц';
import Ч from './russian/Ч';
import Ш from './russian/Ш';
// import Щ from './russian/Щ';
// import Ъ from './russian/Ъ';
import Ы from './russian/Ы';
// import Ь from './russian/Ь';
import Э from './russian/Э';
import Ю from './russian/Ю';
// import Я from './russian/Я';

export const RussianDactylGestures = [
  А,
  // Б, // TODO: движение?
  В,
  Г,
  // Д, // TODO: движение?
  Е,
  // Ё, // TODO: движение?
  // Ж, // TODO: чем отличается от Е?
  // З, // TODO: движение?
  И,
  // Й, // TODO: движение?
  // К, // TODO: чем отличается от Д? движением?
  Л,
  М,
  Н,
  О,
  П,
  Р,
  С,
  У,
  Ф,
  Х,
  Ц,
  Ч,
  Ш,
  // Щ, // TODO: движение?
  // Ъ, // TODO: есть?
  Ы,
  // Ь, // TODO: чем отличается от З? движением?
  Э,
  Ю,
  // Я, // TODO: скрещивание. пока слишком похоже на Д и К
  // TODO: знаки препинания?
  // TODO: другие символы?
  // TODO: жесты?
];

export const russianDactylGesturesEstimator = new GestureEstimator(RussianDactylGestures);
