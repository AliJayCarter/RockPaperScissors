const choices = document.querySelectorAll('.choice'); // Stores all the choices in an array
const userChoiceDisplay = document.getElementById('user-choice'); //To be set once user clicks on a choice
const computerChoiceDisplay = document.getElementById('computer-choice'); //To be set once computer makes a choice
const resultDisplay = document.getElementById('result'); //To be set once the result(who the winner is) is determined
const userScoreDisplay = document.querySelector('.user-score'); //To be set once the user score is updated
const computerScoreDisplay = document.querySelector('.computer-score'); //To be set once the computer score is updated


document.addEventListener('DOMContentLoaded', function() {
    for (let choice of choices) {
        choice.addEventListener("click", function(event) {
            playGame(event); // Call the playGame function when a choice is clicked
        });
    }
});

function playGame(event) {
    const userChoice = event.target.getAttribute('data-choice'); // Get the user's choice from the clicked element
    console.log(userChoice); // Log the user's choice
    userChoiceDisplay.innerText = userChoice; // Display the user's choice
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
    console.log("determineWinner");
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        scoreUser(); // Update the score display
        return "You win!";
    } else {
        scoreComputer();
        return "Computer wins!";
    }
}

function scoreComputer() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

function scoreUser(){
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;

}