import readlineSync from 'readline-sync';

export default (getQuestion, getExpected, getTextQuestion = null) => {
  const maxRounds = 3;
  let round = 0;
  for (; round < maxRounds; round += 1) {
    const question = getQuestion();
    const textQuestion = (getTextQuestion) ? getTextQuestion(question) : question;
    console.log(`Question: ${textQuestion}`);

    const answer = readlineSync.question('Your answer: ');
    const expected = getExpected(question);
    if (expected.toString() !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
      break;
    }

    console.log('Correct!');
  }

  return (round === maxRounds);
};
