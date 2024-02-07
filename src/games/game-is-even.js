import { getRandomInt } from '../functions/random.js';
import game from '../functions/game.js';

const isEven = (number) => (number % 2 === 0);

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getQuestion = () => getRandomInt(1, 100);
  const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');

  return game(getQuestion, getAnswer);
};
