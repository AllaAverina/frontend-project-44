import readlineSync from 'readline-sync';

export default (startGame) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const result = (startGame()) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(result);
};
