import { getRandomInt as getRandom } from '../functions/random.js';
import game from '../functions/game.js';

const generateProgression = (length, start, step) => {
  const result = [];
  let current = start;
  for (let index = 0; index < length; index += 1) {
    result.push(current);
    current += step;
  }
  return result;
};

export default () => {
  console.log('What number is missing in the progression?');

  const getQuestion = () => {
    const progression = generateProgression(getRandom(5, 10), getRandom(1, 10), getRandom(1, 10));
    const index = getRandom(0, progression.length - 1);
    return [...progression.slice(0, index), '..', ...progression.slice(index + 1, progression.length)];
  };

  const getTextQuestion = (progression) => progression.join(' ');

  const getAnswer = (progression) => {
    const index = progression.indexOf('..');
    if (index < 2) {
      return progression[index + 1] - (progression[index + 2] - progression[index + 1]);
    }
    if (index < progression.lenth - 2) {
      return progression[index - 1] + (progression[index + 2] - progression[index + 1]);
    }
    return progression[index - 1] - (progression[index - 2] - progression[index - 1]);
  };

  return game(getQuestion, getAnswer, getTextQuestion);
};
