function getComputerChoice(){
    const choices = ['stone', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "It's a tie!";
    }

    if((playerChoice === 'stone' && computerChoice === 'scissors') 
    || (playerChoice === 'paper' && computerChoice === 'stone') 
    || (playerChoice === 'scissors' && computerChoice === 'paper'))
    {
        return 'You Win!';
    }else{
        return 'Computer Win!';
    }
}


function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    console.log(`You chose : ${playerChoice}`);

    console.log(`The computer chose : ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);

    console.log(result);
}

const playerChoice = console.log("Enter rock, paper or scissor : ");
// playRound(playerChoice.toLowerCase());

// if(playerChoice){
//     playRound(playerChoice.toLowerCase());
// }else{
//     console.log('Game canceled');
// }

if (playerChoice) {
    const formattedChoice = playerChoice.toLowerCase();
    if (formattedChoice === 'stone' || formattedChoice === 'paper' || formattedChoice === 'scissors') {
      playRound(formattedChoice);
    } else {
      console.log("Invalid choice. Please enter 'stone', 'paper', or 'scissors'.");
    }
  } else {
    console.log("Game canceled.");
  }