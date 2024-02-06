import { getRandomInt } from '../functions/random.js';
import game from '../functions/game.js';

const gcd = (left, right) => {
  if (left === 0 || left === right) return right;
  if (right === 0) return left;
  const [divisible, divider] = (left > right) ? [left, right] : [right, left];
  return gcd(divider, divisible % divider);
};

export default () => {
  console.log('Find the greatest common divisor of given numbers.');

  const getQuestion = () => [getRandomInt(1, 100), getRandomInt(1, 100)];
  const getTextQuestion = ([left, right]) => `${left} ${right}`;
  const getExpected = ([left, right]) => gcd(+left, +right);

  return game(getQuestion, getExpected, getTextQuestion);
};
