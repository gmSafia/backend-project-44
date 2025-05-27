import runGame from '../index.js';

function generateRound(){
    const parity = (num) => num % 2 === 0;

    const randomNum = Math.ceil(Math.random() * 100);
    const correctAnswer = parity(randomNum) ? 'yes' : 'no';

    return [randomNum.toString() , correctAnswer];
}

export default function parityCheck(){
    const rounds = () => Array.from({length : 3}, generateRound);
    runGame(`Answer "yes" if the number is even, otherwise answer "no".`, rounds);
}

