import { getRandomInt, getRandomItem } from '../functions/random.js';
import game from '../functions/game.js';

export default () => {
  console.log('What is the result of the expression?');

  const getQuestion = () => [getRandomInt(0, 20), getRandomItem(['+', '-', '*']), getRandomInt(0, 20)];
  const getTextQuestion = (question) => question.join(' ');
  const getAnswer = ([left, sign, right]) => {
    let result = +left;
    if (sign === '+') {
      result += +right;
    } else if (sign === '-') {
      result -= +right;
    } else if (sign === '*') {
      result *= +right;
    }
    return result;
  };

  return game(getQuestion, getAnswer, getTextQuestion);
};
