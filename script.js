let humanscore = 0
let computerscore = 0


function getComputerChoice() {// Array of words
    const choices = ['rock', 'paper', 'scissors'];
    
    // Generate a random index based on the length of the array
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    // Get the random word from the array using the random index
    const randomChoice = choices[randomIndex];
    return choices[randomIndex]

    
    
    }
    console.log(getComputerChoice());
    function getHumanChoice() {// Array of words
        const choices = ['rock', 'paper', 'scissors'];
        
        // Generate a random index based on the length of the array
        const randomIndex = Math.floor(Math.random() * choices.length);
        
        // Get the random word from the array using the random index
        const randomChoice = choices[randomIndex];
        return choices[randomIndex]
    
        
        
        }
        console.log(getHumanChoice());


// Declare score variables globally, so they're accessible in all functions
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Normalize choices to lowercase for consistency
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! You both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    humanScore++; // Increment human score
  } else {
    resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    computerScore++; // Increment computer score
  }

  console.log(resultMessage);
}

function playGame() {
  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);

    const humanSelection = getHumanChoice(); // Assuming this function gets the user's choice
    const computerSelection = getComputerChoice(); // Assuming this function generates the computer's choice

    playRound(humanSelection, computerSelection); // Call the playRound function

    console.log(`Scores after round ${round}:`);
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  }

  // Determine the winner after 5 rounds
  if (humanScore > computerScore) {
    console.log(`Congratulations! You win the game with ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`Sorry, you lose the game. Computer wins with ${computerScore} to ${humanScore}.`);
  } else {
    console.log(`It's a tie game! Both you and the computer scored ${humanScore}.`);
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors):");
  while (!["rock", "paper", "scissors"].includes(choice.toLowerCase())) {
    choice = prompt("Invalid choice! Please enter rock, paper, or scissors:");
  }
  return choice;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

playGame(); // Start the game
