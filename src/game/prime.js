import runGame from '../index.js';

function primeNumber(number){
    if (number < 2) return 'no'; 

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return 'no'; 
        }
    }

    return 'yes'; 
}

function generateRound(){
    const number = Math.ceil(Math.random() * 100);
    const correctAnswer = primeNumber(number);
    
    return [number, correctAnswer];
}

export default function prime(){
    const rounds = () => Array.from({length : 3}, generateRound);
    runGame(`Answer "yes" if given number is prime. Otherwise answer "no".`, rounds);
}