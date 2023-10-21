"use strict"

function computerChoice() {
    let computerSelection = (Math.floor(Math.random() * 3) + 1);
    if        (computerSelection === 1) {
        computerSelection = "rock";
    } else if (computerSelection === 2) {
        computerSelection = "paper";
    } else if (computerSelection === 3) {
        computerSelection = "scissors";
    }        
    return computerSelection;
}

function checkScore() {
    if (computerScore == 3 || playerScore == 3) {
        if (computerScore > playerScore) {
            result.textContent = "💀 GAME OVER 💀"
            resultWrap.textContent = "😎 I WIN THIS GAME! 😎"
        } else if (computerScore < playerScore) {
            result.textContent = "🎉 GAME OVER 🎉"
            resultWrap.textContent = "👏 YOU WIN THIS GAME! 👏"
        } else {
            result.textContent = "GAME OVER"
            resultWrap.textContent = "📝 IT'S A DRAW! 📝"
        }
        choiceButton.forEach(choice => choice.style.display = "none");
        play.style.display = "block";
        play.disabled = false;

        play.textContent = "WANT ANOTHER ROUND?";

    }

}

function start(e) {
    setTimeout(function(){  

    round = 0
    playerScore = 0
    computerScore = 0
    points.textContent = `${playerScore} - ${computerScore}`;
    playerText.textContent = ""
    computerText.textContent = ""
    play.style.display = "none";
    result.textContent = "LET'S GO!"
    resultWrap.textContent = ""
    choiceButton.forEach(choice => choice.style.display = "block");
}, 1000); 

}

function playRound(playerChoice, computerSelection) {
        
    choiceButton.forEach(choice => choice.disabled = true);

    setTimeout(function(){  

    round += 1;

    choiceButton.forEach(choice => choice.style.display = "block");
    choiceButton.forEach(choice => choice.disabled = false);
    playerChooses.style.display = "inline";
    computerChooses.style.display = "inline";
    playerText.textContent = "YOU"
    computerText.textContent = "AI"

    if        (computerSelection === "rock" && playerChoice === "scissors") {
            result.textContent = "❌ Rock beats Scissors! ❌";
            resultWrap.textContent = "😄 I win this round. 😄";
            computerScore += 1;
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "🤞";
            computerChooses.textContent = "👊";

            checkScore()
            return;
    } else if (computerSelection === "paper" && playerChoice === "rock") {
        result.textContent = "❌ Paper beats Rock! ❌";
        resultWrap.textContent = "😄 I win this round. 😄";            computerScore += 1;
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "👊";
            computerChooses.textContent = "🤚";
            checkScore()
            return;
    } else if (computerSelection === "scissors" && playerChoice === "paper") {
        result.textContent = "❌ Scissors beat Paper! ❌";
        resultWrap.textContent = "😄 I win this round. 😄";            computerScore += 1;
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "🤚";
            computerChooses.textContent = "🤞";
            checkScore()
            return;
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        result.textContent = "✅ Rock beats Scissors! ✅";
        resultWrap.textContent = "🤕 You win this round. 🤕";            
        playerScore += 1;
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "👊";
            computerChooses.textContent = "🤞";
            checkScore()
            return;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        result.textContent = "✅ Paper beats Rock! ✅";
        resultWrap.textContent = "🤕 You win this round. 🤕";        
                    playerScore += 1;
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "🤚";
            computerChooses.textContent = "👊";
            checkScore()
            return;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        result.textContent = "✅ Scissors beat Paper! ✅";
        resultWrap.textContent = "🤕 You win this round. 🤕";        
                    playerScore += 1;
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "🤞";
            computerChooses.textContent = "🤚";
            checkScore()
            return;
    } else if (playerChoice === "scissors" && computerSelection === "scissors") {
        result.textContent = "";

            resultWrap.textContent = "🤔 It's a tie! 🤔";
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "🤞";
            computerChooses.textContent = "🤞";
            checkScore()
            return;    
        } else if (playerChoice === "paper" && computerSelection === "paper") {
            result.textContent = "";

            resultWrap.textContent = "🤔 It's a tie! 🤔";
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "🤚";
            computerChooses.textContent = "🤚";
            checkScore()
            return;    
        } else if (playerChoice === "rock" && computerSelection === "rock") {
            result.textContent = "";

            resultWrap.textContent = "🤔 It's a tie! 🤔";
            points.textContent = `${playerScore} - ${computerScore}`;
            playerChooses.textContent = "👊";
            computerChooses.textContent = "👊";
            checkScore()
            return;    
}
}, 1000); 
}

let round = 0
let playerScore = 0
let computerScore = 0

const playerChooses = document.getElementById("playerChooses");
const computerChooses = document.getElementById("computerChooses");
const result = document.getElementById("result");
const resultWrap = document.getElementById("resultWrap");
const points = document.getElementById("points");
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText")

const play = document.getElementById("play");
const playButton = document.getElementsByClassName("play");

const choiceButton = document.querySelectorAll(".choice");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

choiceButton.forEach(choice => choice.style.display = "none");
playerChooses.style.display = "none";
computerChooses.style.display = "none";

play.addEventListener("click", () => {
    play.classList.add("playing");
    start();
    play.disabled = true;
    hideChoice();
});

rock.addEventListener("click", () => {
    rock.classList.add("playing");
    paper.style.display = "none";
    scissors.style.display = "none";
    let playerChoice = "rock";
    let computerSelection = computerChoice();
    playRound(playerChoice, computerSelection);
   // hideChoice();
})

paper.addEventListener("click",() => {
    paper.classList.add("playing");
    rock.style.display = "none";
    scissors.style.display = "none";
    let playerChoice = "paper";
    let computerSelection = computerChoice();
    playRound(playerChoice, computerSelection);
    //hideChoice();
})

scissors.addEventListener("click",() => {
    scissors.classList.add("playing");
    rock.style.display = "none";
    paper.style.display = "none";
    let playerChoice = "scissors";
    let computerSelection = computerChoice();
    playRound(playerChoice, computerSelection);
    //hideChoice();
})

function hideChoice() {
    playerText.textContent = ""
    computerText.textContent = ""
    playerChooses.style.display = "none";
    computerChooses.style.display = "none";
    result.textContent = "";
    resultWrap.textContent = "";
    points.textContent = "";
};

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

choiceButton.forEach(button => button.addEventListener("transitionend", removeTransition));
play.addEventListener("transitionend", removeTransition);
