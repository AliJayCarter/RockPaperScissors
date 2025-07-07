const choices = document.querySelectorAll('.choice'); // Stores all the choices in an array
const userChoiceDisplay = document.getElementById('user-choice'); //To be set once user clicks on a choice
const computerChoiceDisplay = document.getElementById('computer-choice'); //To be set once computer makes a choice
const resultDisplay = document.getElementById('result'); //To be set once the result(who the winner is) is determined
const userScoreDisplay = document.querySelector('.user-score'); //To be set once the user score is updated
const computerScoreDisplay = document.querySelector('.computer-score'); //To be set once the computer score is updated

document.addEventListener('DOMContentLoaded', function() {  
    // Add event listener to the reset button
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', function() {
        resetScores(); // Call the resetScores function when the reset button is clicked
    });
    for (let choice of choices) {
        choice.addEventListener("click", function(event) {
            playGame(event); // Call the playGame function when a choice is clicked
        });
    }
});

/*  Function to handle the game logic when a choice is clicked
 This function is called when the user clicks on a choice
 It retrieves the user's choice, generates a random choice for the computer, and determines the winner
 It also updates the display elements to show the user's choice, computer's choice, and the result */
function playGame(event) {
    const userChoice = event.target.getAttribute('data-choice'); // Get the user's choice from the clicked element
    userChoiceDisplay.innerText = userChoice; // Display the user's choice
    const computerChoice = getComputerChoice(); // Get the computer's choice
    computerChoiceDisplay.textContent = computerChoice; // Display the computer's choice
    const result = determineWinner(userChoice, computerChoice); // Determine the winner
    resultDisplay.textContent = result; // Display the result
}

// Function to get a random choice for the computer
// It generates a random index based on the number of choices(3) and returns the corresponding choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index
    return choices[randomIndex].getAttribute('data-choice'); // Return the computer's choice based on the random index
}

/* Function to determine the winner based on the user's choice and computer's choice*/
function determineWinner(userChoice, computerChoice) {
    console.log("determineWinner");
    if (userChoice === computerChoice) {
        return "It's a draw!";
    //If statement to check all user winning conditions
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        scoreUser(); // Update the userScore display
        return "You win!";
    } else {
        scoreComputer(); // Update the computerScore display
        return "Computer wins!";
    }
}

/* Uses predefined text value of 0 as initial score for computerChoiceDisplay, updates if user wins*/
function scoreComputer() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

/* Uses predefined text value of 0 as initial score for userChoiceDisplay, updates if user wins*/
    function scoreUser(){
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

/* Resets all scores and displays */
function resetScores() {
    document.getElementById("user-score").innerText = "0";
    document.getElementById("computer-score").innerText = "0";
    userChoiceDisplay.innerText = '';
    computerChoiceDisplay.innerText = '';
    resultDisplay.innerText = 'Result shown here';
}