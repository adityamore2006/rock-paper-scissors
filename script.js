
//main function that runs the game in 5 rounds

let humanScore = 0;
let computerScore = 0;

function playGame(){

    for(let i = 0 ; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, i + 1);
        console.log("Your Score     = " + humanScore)
        console.log("Computer Score = " + computerScore)
    }
    if (humanScore > computerScore) {
        console.log(`You Won the Game`)
    }
    else if (humanScore < computerScore){
        console.log(`You Lost the Game`)
    }
    else{
        console.log('You Tied the Game')
    }
}


// Intiates a round of Rock Paper Scissors

function playRound(humanChoice, computerChoice,  roundNumber) {
    console.log(`---Round ${roundNumber}/5---`);
    if(humanChoice === 'rock') { //human picked rock
        if (computerChoice === 'rock'){ // rock vs rock
            console.log(`Tie!`)
        }
        else if (computerChoice === 'paper') { //rock vs paper
            console.log(`You Lose! Paper beats Rock!`)
            computerScore += 1;
        }
        else if (computerChoice === 'scissors') { //rock vs scissors
            console.log(`You Win! Rock beats Scissors`)
            humanScore += 1;
        }
    }
    else if (humanChoice === 'paper') { //human picked paper
        if (computerChoice === 'rock'){ // paper vs rock
            console.log(`You Win! Paper beats Rock`)
            humanScore += 1;            
        }
        else if (computerChoice === 'paper') { //paper vs paper
            console.log(`Tie!`)
        }
        else if (computerChoice === 'scissors') { //paper vs scissors
            console.log(`You Lose! Scissors beats Paper`)
            computerScore += 1;
        }
    }
    else if (humanChoice === 'scissors') { //human picked scissors
        if (computerChoice === 'rock'){ // scissors vs rock
            console.log(`You Lose! Rock beats Scissors`)
            computerScore += 1;
        
        }
        else if (computerChoice === 'paper') { //scissors vs paper
            console.log(`You Win! Scissors beats Paper`)
            humanScore += 1;            
        }
        else if (computerChoice === 'scissors') { //scissors vs scissors
            console.log(`Tie!`)
        }
    }
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

playGame();









