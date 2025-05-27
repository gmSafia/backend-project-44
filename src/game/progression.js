import runGame from '../index.js'

function generateRound() {
  const start = Math.ceil(Math.random() * 10)
  const step = Math.ceil(Math.random() * 5)
  const length = 10
  const progression = []

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }

  const skip = Math.floor(Math.random() * progression.length)
  const correctAnswer = String(progression[skip])
  const questionProgression = [...progression]
  questionProgression[skip] = '..'
  const question = questionProgression.join(' ')

  return [question, correctAnswer]
}

export default function progression() {
  const rounds = () => Array.from({ length: 3 }, generateRound)
  runGame('What number is missing in the progression?', rounds)
}
