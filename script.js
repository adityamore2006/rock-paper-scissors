

let humanScore = 0;
let computerScore = 0;



// Humans choice of Rock Paper or Scissors
function getHumanChoice(){
    let choice = prompt("Rock Paper Scissors?").toLowerCase();

    if (choice === "rock")
        return("rock")
    else if (choice === "paper")
        return("paper")
    else if (choice === "scissors")
        return("scissors")
}


// computers choice of Rock Paper or Scissors
function getComputerChoice() {
    let value = Math.random()
    if(value < (1/3)) {
        // when less than 1/3
        return("rock");
    } 
    else if(value < (2/3)) {
        // when less than 2/3
        return("paper");
    }

    else{ 
        // less than 1
        return("scissors");
    }
}

// Intiates a round of Rock Paper Scissors
function updateScore() {
    const scoreDiv = document.getElementById('score')
    scoreDiv.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function checkWinner() {
    if (humanScore == 5) {
        resultDiv.textContent = `You Won the Game`
        disableButtons()
    }
    else if (computerScore == 5){
        resultDiv.textContent = `You Lost the Game`
        disableButtons()

    }
}

const resultDiv = document.getElementById("display") // used by both the checkWinner function and playRound function

function playRound(humanChoice, computerChoice,  roundNumber) {
    const matchup =  `${humanChoice}-${computerChoice}`
    switch (matchup) {
        case 'rock-rock':
        case 'paper-paper':
        case 'scissors-scissors':
            resultDiv.textContent = 'Tie!';
            updateScore()
            break;
        case 'rock-paper':
            resultDiv.textContent ='You Lose! Paper beats Rock!';
            computerScore += 1;
            updateScore()
            break;
        case 'rock-scissors':
            resultDiv.textContent ='You Win! Rock beats Scissors';
            humanScore += 1;
            updateScore()
            break;
        case 'paper-rock':
            resultDiv.textContent ='You Win! Paper beats Rock';
            humanScore += 1;
            updateScore()
            break;
        case 'paper-scissors':
            resultDiv.textContent ='You Lose! Scissors beats Paper';
            computerScore += 1;
            updateScore()
            break;
        case 'scissors-rock':
            resultDiv.textContent ='You Lose! Rock beats Scissors';
            computerScore += 1;
            updateScore()
            break;
        case 'scissors-paper':
            resultDiv.textContent ='You Win! Scissors beats Paper';
            humanScore += 1;
            updateScore()
            break;
        default:
            resultDiv.textContent ='Invalid input!';
    }
    checkWinner()
}

document.getElementById('rock').addEventListener('click', function() {playRound('rock',  getComputerChoice(), 1)})

document.getElementById('paper').addEventListener('click', function() {playRound('paper',  getComputerChoice(), 1)})

document.getElementById('scissors').addEventListener('click', function() {playRound('scissors',  getComputerChoice(), 1)})



//main function that runs the game in 5 rounds

//playGame();











