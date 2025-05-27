import runGame from '../index.js';

function generateRound(){
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);

  const mathOperations = ['+','-','*'];
  const randomOperations = Math.floor(Math.random() * mathOperations.length);

  const question = `${num1} ${mathOperations[randomOperations]} ${num2}`;
  const operator = mathOperations[randomOperations];

  let correctAnswer;
  switch(operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      }

  return [question, correctAnswer];

}

export default function calculator(){
  const rounds = () => Array.from({length : 3}, generateRound);
  runGame(`What is the result of the expression?`, rounds);
}