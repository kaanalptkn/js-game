/* The following program contains the source code for a game called Rock, paper, scissor. 

Rock, paper, scissor is a popular board game all of the world where two players choose either rock, scissor or paper. It is played on a five round.
Game rule is very simple

Winner:
Stone beats scissors.
Paper beats stone by wrapping it.
Scissors beat the paper by cutting it.

If the players choose the same situation, the game ends in a draw.
For the player to win, player must be winner at least three rounds.
*/
// computer play funtion created for random string choosing by computer
function computerPlay(){
    const computerKeys = Object.keys(ruleGame)
    const index = Math.floor(Math.random() * computerKeys.length) // math random choose number between 0 and 1. computerKeys lenght = 3 
    const computerKey = computerKeys[index]
    return computerKey
}
// in the below code explain about game rules.

const ruleGame = {
    rock: {
        rock: 0, 
        paper: -1, 
        scissor: 1
    },
    paper: {
        rock: 1,
        paper: 0,
        scissor: -1
    },
    scissor: {
        rock: -1,
        paper: 1,
        scissor: 0
    }
}

let countRound = 1
let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){
   const winner = ruleGame[computerSelection][playerSelection]
   if(winner == 1){
    console.log(`Round ${countRound}: You lost :(`)
    computerScore++            // if compuet win getting one more point etc. 0 + 1
   } else if(winner == 0){
    console.log(`Round ${countRound}: Ahh damn... draw!`)
   } else{
    console.log(`Round ${countRound}: Hey, you won!`)
    playerScore++
   }
   console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`)
   countRound++    // it cound round
}


function totalScore(){
    if(playerScore > computerScore){
        console.log("Well done! You are winner babe!")
    } else if(playerScore < computerScore){
        console.log("Ahh you lost! Try next time")
    } else{
        console.log("Ahh it's draw :( Come on try again!")
    }
}

for(let i = 0; i < 5; i++){
    const playerSelection = prompt().toLowerCase()  // no matter put the imput lower case or upper case
    const computerSelection = computerPlay(ruleGame)
    playRound(playerSelection, computerSelection)
}

totalScore()

