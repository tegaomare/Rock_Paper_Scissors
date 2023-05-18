// Data ==========================================================
// choices - R,P,S
var choices = 'RPS'.split('');
// scores
var wins = 0;
var losses = 0;
var ties = 0;

// Functions =====================================================

function getUserChoice() {
  // get user choice with a prompt
  var choice = prompt('Choose R, P or S').toUpperCase();
  //  make sure the user choice is one of the options that we allow (R,P,S)
  // if it is return the choice
  if (!choices.includes(choice)) {
    // tell the user they did something wrong
    alert(
      "I don't know what game you're playing. But I'm playing Rock, Paper, Scissors. Please choose a valid option."
    );
    // get their choice again
    return getUserChoice();
  }
  // otherwise, get the choice again
  return choice;
}

// get computer choice
function getComputerChoice() {
  //  get a random item from the options list
  var randomSeed = Math.random();
  var scale = choices.length;
  var randomIndex = Math.floor(randomSeed * scale);
  var choice = choices[randomIndex];
  return choice;
}

function tie(computerChoice) {
  // show what the computer chose,
  // Tell them it's a tie
  alert("It's a tie! Computer chose " + computerChoice + '.');
  ties++;
}

function win(computerChoice) {
  // show what the computer chose,
  // Tell them it's a tie
  alert('You won! Computer chose ' + computerChoice + '.');
  wins++;
}

function lose(computerChoice) {
  // show what the computer chose,
  // Tell them it's a tie
  alert('You lose! Computer chose ' + computerChoice + '.');
  losses++;
}

function checkWin(userChoice, computerChoice) {
  console.log('Checking the winnner...');
  // check who won
  //  was it a tie?
  if (userChoice === computerChoice) {
    tie(computerChoice);
  } else if (
    (userChoice === 'R' && computerChoice === 'S') ||
    (userChoice === 'P' && computerChoice === 'R') ||
    (userChoice === 'S' && computerChoice === 'P')
  ) {
    //  did user win? R > S, P > R, S > P
    win(computerChoice);
  } else {
    //  did user lose? R > P, P > S, S > R
    lose(computerChoice);
  }
}

function displayScores() {
  alert(
    'Scoreboard: \nWins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties
  );
}

function checkIfWantsToPlayAgain() {
  var playAgain = window.confirm('Want to play again?');
  if (playAgain) playGame();
  else alert('Thanks for playing.');
}

// play game
function playGame() {
  console.log("We're playing");
  //  get user choice
  var userChoice = getUserChoice();
  console.log('User Choice:', userChoice);
  //  get computer choice
  var computerChoice = getComputerChoice();
  console.log('Computer Choice:', computerChoice);
  //  check who won
  checkWin(userChoice, computerChoice);
  //  display scores
  displayScores();
  //  want to play again?
  checkIfWantsToPlayAgain();
}

// Initialization ======================================================
// play game
playGame();