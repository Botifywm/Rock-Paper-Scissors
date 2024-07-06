function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let choice = null;
    if(n === 1) {
        choice = 'rock';
    }
    else if (n === 2) {
        choice = 'scissors';
    }
    else {
        choice = 'paper';
    }
    console.log(choice);
    return choice ;
}


function getHumanChoice() {
    let choice = prompt('Rock(r) or Scissors(s) or Paper(p)?').toLowerCase();
    while (choice !== 'r' && choice !== 's' && choice !== 'p') {
        alert('Invalid entry! Please try again!')
        choice = prompt('Rock(r) or Scissors(s) or Paper(p)?').toLowerCase();
    }
    console.log(choice);
    return choice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'r'){
        if (computerChoice === 'scissors') {
            humanScore += 1;
            console.log('You Win! Rock beats Scissors')
        }
        else if (computerChoice === 'paper') {
            computerScore += 1;
            console.log('You Lose! Paper beats Rock')
        }
        else {
            console.log('It\'s a Draw!')
        }
    }
    else if (humanChoice === 's') {
        if (computerChoice === 'paper') {
            humanScore += 1;
            console.log('You Win! Scissors beats Paper')
        }
        else if (computerChoice === 'rock') {
            computerScore += 1;
            console.log('You Lose! Rock beats Scissors')
        }
        else {
            console.log('It\'s a Draw!')
        } 
    }
    else if (humanChoice === 'p'){
        if (computerChoice === 'rock') {
            humanScore += 1;
            console.log('You Win! Paper beats Rock')
        }
        else if (computerChoice === 'scissors') {
            computerScore += 1;
            console.log('You Lose! Scissors beats Paper')
        } 
        else {
            console.log('It\'s a Draw!')
        }
    }
    console.log(`CPU: ${computerScore}, YOU: ${humanScore}`)
}

function playGame() {
    computerScore = 0;
    humanScore = 0;
    for (i = 1; i <= 5; i++){
        console.log(`Round ${i}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); 
    }

    if(computerScore > humanScore) {
        console.log('YOU LOSE!')
    }
    else if (computerScore < humanScore) {
        console.log('YOU WIN!')
    }
    else {
        console.log("IT'S A DRAW!")
    }
}

playGame()