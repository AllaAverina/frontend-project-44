import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const isEven = (number) => (number % 2 === 0);

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const times = 3;
  let i = 0;
  for (; i < times; i += 1) {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const expected = isEven(number) ? 'yes' : 'no';

    if (expected !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
      break;
    }

    console.log('Correct!');
  }

  const result = (i === times) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(result);
};
