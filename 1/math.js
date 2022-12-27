const prompt = require('prompt-promise');

async function askMathQuestion() {
  // Ask the user a math question
  let response = await prompt('What is 5 + 7? ');

  // Keep track of the number of guesses
  let guessCount = 1;

  // Continue asking the user for their answer until they provide a correct answer or reach the maximum number of guesses
  while (response != 12 && guessCount < 3) {
    console.log('Incorrect answer. Please try again.');
    response = await prompt('What is 5 + 7? ');
    guessCount++;
  }

  // If the user provided a correct answer, let them know and exit the program
  if (response == 12) {
    console.log('Correct! The answer is 12.');
    process.exit();
  }

  // If the user reached the maximum number of guesses, exit the program
  console.log('Sorry, you have reached the maximum number of guesses. The correct answer is 12.');
  process.exit();
}

askMathQuestion();