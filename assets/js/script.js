const choices = document.querySelectorAll('.choice'); // Stores all the choices in an array
const userChoiceDisplay = document.querySelector('.user-choice'); //To be set once user clicks on a choice
const computerChoiceDisplay = document.querySelector('.computer-choice'); //To be set once computer makes a choice
const resultDisplay = document.querySelector('.result'); //To be set once the result(who the winner is) is determined
const userScoreDisplay = document.querySelector('.user-score'); //To be set once the user score is updated
const computerScoreDisplay = document.querySelector('.computer-score'); //To be set once the computer score is updated
let userScore = 0; //Initial user score
let computerScore = 0; //Initial computer score 

document.addEventListener('DOMContentLoaded', function() {
   for (let choice of choices) {
        choice.addEventListener("click", playGame);
    }
});
function playGame(event) {
    const userChoice = event.target.getAttribute('data-choice'); // Get the user's choice from the clicked element
    userChoiceDisplay.textContent = userChoice; // Display the user's choice
    const computerChoice = getComputerChoice(); // Get the computer's choice
    computerChoiceDisplay.textContent = computerChoice; // Display the computer's choice
    const result = determineWinner(userChoice, computerChoice); // Determine the winner
    resultDisplay.textContent = result; // Display the result
}
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index
    return choices[randomIndex].getAttribute('data-choice'); // Return the computer's choice based on the random index
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        userScoreDisplay.textContent = userScore;
        return "You win!";
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        return "Computer wins!";
    }
}



console.log(choices[0].getAttribute('data-choice'));
