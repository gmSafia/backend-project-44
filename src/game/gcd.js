import runGame from '../index.js'

function greatestDivisor(number1, number2) {
  let divisor = 1

  for (let i = 1; i <= Math.min(number1, number2); i++) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisor = i
    }
  }

  return divisor
}

function generateRound() {
  const num1 = Math.ceil(Math.random() * 100)
  const num2 = Math.ceil(Math.random() * 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(greatestDivisor(num1, num2))

  return [question, correctAnswer]
}

export default function gcd() {
  const rounds = () => Array.from({ length: 3 }, generateRound)
  runGame('Find the greatest common divisor of given numbers.', rounds)
}
