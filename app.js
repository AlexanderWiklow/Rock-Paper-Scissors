// // Return rock paper or scissor randomly
// // function computerPlay() {
// //     let values = ["Rock", "Paper", "Scissors"],
// //     // let varRock = "Rock";
// //     // let varPaper = "Paper";
// //     // let varScissor = "Scissor";

// //     valueToUse = values[Math.floor(Math.random() * values.length)];
// //     // do something with the selected value
// //     return(valueToUse);
// // }

// var div = document.createElement("div");

// // let playerSelection = prompt();

// let rock = "rock";
// let paper = "paper";
// let scissors = "scissors";
// let playerScore = 0;
// let computerScore = 0;
// let roundNumber = 0;



// // ==================================================
// let rockButton = document.createElement("BUTTON");
// rockButton.innerText = rock;
// playerSelection = rockButton.innerText;
// console.log(playerSelection);
// rockButton.addEventListener("click", playRound);
// document.body.appendChild(rockButton);


// // ===================================================
// let paperButton = document.createElement("BUTTON");
// paperButton.innerText = paper;
// playerSelection = paperButton.innerText;
// console.log(playerSelection);
// paperButton.addEventListener("click", playRound);
// document.body.appendChild(paperButton);

// // ===================================================
// let scissorButton = document.createElement("BUTTON");
// scissorButton.innerText = scissors;
// playerSelection = scissorButton.innerText;
// console.log(playerSelection);
// scissorButton.addEventListener("click", playRound);
// document.body.appendChild(scissorButton);

// function computerPlay() {
//     // var values = ["Rock","Paper","Scissor"],
//     //     valueToUse = values[Math.floor(Math.random() * values.length)];
//     // // do something with the selected value
//     // console.log(valueToUse);

//         //generate a random number between 0.0 and 1.0
//     //and multiply by 10
//     //return value between 1 and 3
//     let rand = Math.floor(Math.random()* 3 + 1);

//     //check random value
//     if(rand == 1) {
//         console.log(rock)
//         return rock;
//     } else if (rand == 2){
//         console.log(paper)
//         return paper;
//     }else if (rand == 3){
//         console.log(scissors)
//         return scissors;
//     } else return "falty";
// }

// const computerSelection = computerPlay();

// function playRound(playerSelection, computerSelection){

//     // playerSelection = prompt();
//     computerSelection = computerPlay();
//     let playerText = playerSelection;

//     if(playerText === "rock" && computerSelection === "scissors" || playerText === "scissors" && computerSelection === "paper" || playerText === "paper" && computerSelection === "rock") {
//         playerScore++;
//         div.innerHTML = `Results so far: Computerscore: ${computerScore} Playerscore: ${playerScore} `;

//         return alert("you are the winner");
//     } else {
//         div.innerHTML = `Results so far: Computerscore: ${computerScore} Playerscore: ${playerScore} `;

//         computerScore++;
//         console.log("you lost")
//         return alert("you lost");

//     }


    
// }


// div.style.width = "20rem";
// div.style.height = "20rem";
// div.style.background = "lightblue";
// div.style.color = "white";
// div.style.fontSize = "3rem";

// document.body.appendChild(div);

// // const playerSelection = "Rock";

// console.log(playRound(playerSelection, computerSelection));

// // function game() {
// //     for(let i = 1; i <= 5; i++) {
// //         // playRound();
// //         console.log(playRound());
// //     }

// // }

// function helloWorld(){
//     alert("Hello World");
// }




// playRound();

// // computerPlay();
// // playRound();

// ======================================================================
// ======================================================================

// let hello = prompt("hello?");
const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('button').textContent = "Play new game";
    logWins();

    // play the game 
    // 5 rounds 
    // console based 

}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner,round);
}

function playerChoice(){
 // Get input from player 
 let input = prompt("type rock, paper or scissors");
 while(input == null) {
     prompt("please type rock, paper or scissors");

 }
 input = input.toLowerCase();
 let check = validateInput(input);
//  input = input.toLowerCase();
//  let check = validateInput(input);
 while(check == false) {
     input = prompt("please type rock paper or scissors");

     while(input == null) {
        prompt("please type rock, paper or scissors");
   
    }
     input = input.toLowerCase();
     check = validateInput(input);
 }
 return input;

}

function computerChoice(){
    // Get random input for computer
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    return choices.includes(choice)
}


function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC){
        return "Tie";
    } 
    else if((choiceP === "rock" && choiceC === "scissors" ) || 
            (choiceP === "paper" && choiceC === "rock") || 
            (choiceP === "scissors" && choiceC === "paper")) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins(){
    // console.log(winners);
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player wins: ", playerWins);
    console.log("Computer wins: ", computerWins);
    console.log("Ties", ties);
}

function logRound(playerChoice,computerChoice, winner, round) {
    console.log("Round", round);
    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    console.log(winner, "Won the round");
    console.log("------------------------------------");
}

// game();

