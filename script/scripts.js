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


// function getHumanChoice() {
//     let choice = prompt('Rock(r) or Scissors(s) or Paper(p)?').toLowerCase();
//     while (choice !== 'r' && choice !== 's' && choice !== 'p') {
//         alert('Invalid entry! Please try again!')
//         choice = prompt('Rock(r) or Scissors(s) or Paper(p)?').toLowerCase();
//     }
//     console.log(choice);
//     return choice;
// }


function playRound(humanChoice, computerChoice) {

    if (humanChoice === 'r'){
        if (computerChoice === 'scissors') {
            humanScore += 1;
            results.textContent = "You Win! Rock beats Scissors";
            console.log('You Win! Rock beats Scissors')
        }
        else if (computerChoice === 'paper') {
            computerScore += 1;
            results.textContent = "You Lose! Paper beats Rock";
            console.log('You Lose! Paper beats Rock')
        }
        else {
            results.textContent = "It's a Draw!";
            console.log('It\'s a Draw!')
        }
    }
    else if (humanChoice === 's') {
        if (computerChoice === 'paper') {
            humanScore += 1;
            results.textContent = "You Win! Scissors beats Paper";
            console.log('You Win! Scissors beats Paper')
        }
        else if (computerChoice === 'rock') {
            computerScore += 1;
            results.textContent = "You Lose! Rock beats Scissors";
            console.log('You Lose! Rock beats Scissors')
        }
        else {
            results.textContent = "It's a Draw!";
            console.log('It\'s a Draw!')
        } 
    }
    else if (humanChoice === 'p'){
        if (computerChoice === 'rock') {
            humanScore += 1;
            results.textContent = "You Win! Paper beats Rock";
            console.log('You Win! Paper beats Rock')
        }
        else if (computerChoice === 'scissors') {
            computerScore += 1;
            results.textContent = "You Lose! Scissors beats Paper";
            console.log('You Lose! Scissors beats Paper')
        } 
        else {
            results.textContent = "It's a Draw!";
            console.log('It\'s a Draw!')
        }
    }
    console.log(`CPU: ${computerScore}, YOU: ${humanScore}`)
    console.log(`tracker: ${tracker}`)
    cpuScore.textContent = computerScore;
    playerScore.textContent = humanScore;
    tracker = computerScore + humanScore;
}


// let player = document.querySelector(".player");
// player.addEventListener("click", (event) => {
//     let target = event.target;
//     switch(target.class) {
//         case 'r':

//     }
// })

function tracking() {
    if (tracker === 5){
        if(computerScore > humanScore){
            final.textContent = "CPU Wins!" 
            cpuScore.style.color = "green"
        }
        else{
            final.textContent = "You Win!" 
            playerScore.style.color = "green"
        }
        tracker = 0;
        humanScore = 0;
        computerScore = 0;
    } 
    else if (tracker < 5){
        cpuScore.style.color = null;
        playerScore.style.color = null;
    }
}

let computerScore = 0;
let humanScore = 0;
let tracker = 0;

let results = document.querySelector(".result");
let cpuScore = document.querySelector(".cpuScore");
let playerScore = document.querySelector(".playerScore");
let final = document.querySelector(".finalResult");

const rock = document.querySelector(".r");
const paper = document.querySelector(".p");
const scissors = document.querySelector(".s");

rock.addEventListener('click', () => {
    playRound('r', getComputerChoice())
});
paper.addEventListener('click', () => {
    playRound('p', getComputerChoice())
});
scissors.addEventListener('click', () => {
    playRound('s', getComputerChoice())
});

document.addEventListener('click', () => {
    tracking();
});



// function playGame() {
//     computerScore = 0;
//     humanScore = 0;
//     // for (i = 1; i <= 5; i++){
//     //     console.log(`Round ${i}`)
//     //     const humanSelection = getHumanChoice();
//     //     const computerSelection = getComputerChoice();
//     //     playRound(humanSelection, computerSelection); 
//     // }

//     if(computerScore > humanScore) {
//         console.log('YOU LOSE!')
//     }
//     else if (computerScore < humanScore) {
//         console.log('YOU WIN!')
//     }
//     else {
//         console.log("IT'S A DRAW!")
//     }
// }



// playGame()