// Return rock paper or scissor randomly
// function computerPlay() {
//     let values = ["Rock", "Paper", "Scissors"],
//     // let varRock = "Rock";
//     // let varPaper = "Paper";
//     // let varScissor = "Scissor";

//     valueToUse = values[Math.floor(Math.random() * values.length)];
//     // do something with the selected value
//     return(valueToUse);
// }

let playerSelection = prompt();

function computerPlay() {
    var values = ["Rock","Paper","Scissor"],
        valueToUse = values[Math.floor(Math.random() * values.length)];
    // do something with the selected value
    console.log(valueToUse);
}

function testPlay(playerSelection, computerSelection){
    // console.log(playerSelection);
    // console.log(computerSelection);

    let playerText = playerSelection.toLowerCase();
    // let winner = "You are the winner";
    // let loser = "You lost";
    if(playerText === "rock" && computerSelection === "Scissor" || playerText === "scissor" && computerSelection === "paper") {
        return "you are the winner";
    } else {
        return "you lost";

    }
}

// const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(testPlay(playerSelection, computerSelection));

function game() {
    for(let i = 1; i <= 5; i++) {
        // testPlay();
        console.log(testPlay());
    }

}