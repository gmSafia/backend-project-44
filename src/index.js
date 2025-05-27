import readline from 'readline-sync';

export default function runGame(instruction, getRounds){
    console.log('Welcome to the Brain Games!');
    
    const userName = readline.question('May I have your name? ');
    console.log(`Hello, ${userName}`);

    console.log(instruction);

    const rounds = getRounds();

    for (const [question,correctAnswer] of rounds) {
        console.log(`Question: ${question}`);
        const answer = readline.question(`Your answer: `);

        if(answer === String(correctAnswer)) {
            console.log(`Correct!`);
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${String(correctAnswer)})\nLet's try again, ${userName}`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);

}