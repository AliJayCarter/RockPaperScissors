const choices = document.querySelectorAll('.choice'); // Stores all the choices in an array
const userChoiceDisplay = document.querySelector('.user-choice'); //To be set once user clicks on a choice
const computerChoiceDisplay = document.querySelector('.computer-choice'); //To be set once computer makes a choice
const resultDisplay = document.querySelector('.result'); //To be set once the result(who the winner is) is determined
const userScoreDisplay = document.querySelector('.user-score'); //To be set once the user score is updated
const computerScoreDisplay = document.querySelector('.computer-score'); //To be set once the computer score is updated
let userScore = 0; //Initial user score
let computerScore = 0; //Initial computer score 





console.log(choices[0].getAttribute('data-choice'));
