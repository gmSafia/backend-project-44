import runGame from '../index.js'

function isPrime(number) {
  if (number < 2) return false

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

function generateRound() {
  const number = Math.ceil(Math.random() * 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [String(number), correctAnswer]
}

export default function prime() {
  const rounds = () => Array.from({ length: 3 }, generateRound)
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', rounds)
}
