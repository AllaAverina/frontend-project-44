import { getRandomInt as getRandom } from '../functions/random.js';
import game from '../functions/game.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const getQuestion = () => getRandom(1, 100);
  const getAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

  return game(getQuestion, getAnswer);
};
