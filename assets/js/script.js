let playerScore = 0;
let computerScore = 0;

    // Player token function
function pickPlayerToken(token) {
    console.log(token);
    // Hide current page
    // Change screen when token is selected.
    let tokens = document.querySelector(".tokens");
    tokens.style.display = "none"
    //Show the next page with the hand you picked

    let contest = document.querySelector(".contest");
    contest.style.display = "flex"

    //Set the players choice
    if(token === "rock")
        document.getElementById("playerChoice").src = "assets/images/rock.png";
    else if (token === "paper")
        document.getElementById("playerChoice").src = "assets/images/paper.jpg";
    else if (token === "scissors")
        document.getElementById("playerChoice").src = "assets/images/scissors.jpg";
        else if (token === "lizard")
        document.getElementById("playerChoice").src = "assets/images/lizard.png";
        else if (token === "spock")
        document.getElementById("playerChoice").src = "assets/images/spock.jpg";

        pickComputerToken(token);
  } 

    // Computer Token Function
function pickComputerToken(token) {
    let tokens = ["rock", "paper", "scissors", "lizard", "spock"]
    let computerToken = tokens[Math.floor(Math.random() * 5)];

    //Set the Computer choice
    if(computerToken === "rock")
        document.getElementById("computerChoice").src = "assets/images/rock.png";
    else if (computerToken === "paper")
        document.getElementById("computerChoice").src = "assets/images/paper.jpg";
    else if (computerToken === "scissors")
        document.getElementById("computerChoice").src = "assets/images/scissors.jpg";
        else if (computerToken === "lizard")
        document.getElementById("computerChoice").src = "assets/images/lizard.png";
        else if (computerToken === "spock")
        document.getElementById("computerChoice").src = "assets/images/spock.jpg";

        referee(token, computerToken);
}   

// Check if Player is a Winner or Loser Function
function referee(token, computerToken) {
    // Rock vs Computer
    if (token == "rock" && computerToken == "paper") {
        setDecision("You Loose!");
        setComputerScore(computerScore+1);
    } if (token == "rock" && computerToken == "spock") {
        setDecision("You Loose!");
        setComputerScore(computerScore+1);
    } if (token == "rock" && computerToken == "scissors") {
        setDecision("You Win!");
        setPlayerScore(playerScore+1);
    } if (token == "rock" && computerToken == "Lizard") {
        setDecision("YOU Win!");
        setPlayerScore(playerScore+1);
    } if (token == "rock" && computerToken == "rock") {
        setDecision("It's a Tie!");
    }
    // Paper vs Computer
    if (token == "paper" && computerToken == "rock") {
        setDecision("You Win!")
        setPlayerScore(playerScore+1);
    } if (token == "paper" && computerToken == "paper") {
        setDecision("It's a Tie!")
    } if (token == "paper" && computerToken == "scissors") {
        setDecision("You Loose!")
        setComputerScore(computerScore+1);
    } if (token == "paper" && computerToken == "lizard") {
        setDecision("You Loose!")
        setComputerScore(computerScore+1);
    } if (token == "paper" && computerToken == "spock") {
        setDecision("You Win!")
        setPlayerScore(playerScore+1);
    }
    // Scissors vs Computer
    if (token == "scissors" && computerToken == "rock") {
        setDecision("You Loose!")
        setComputerScore(computerScore+1);
    } if (token == "scissors" && computerToken == "paper") {
        setDecision("You Win!")
        setPlayerScore(playerScore+1);
    } if (token == "scissors" && computerToken == "scissors") {
        setDecision("It's a Tie!")
    } if (token == "scissors" && computerToken == "lizard") {
        setDecision("You Win!")
        setPlayerScore(playerScore+1);
    } if (token == "scissors" && computerToken == "spock") {
        setDecision("You Win!")
        setComputerScore(computerScore+1);
    }
    // Lizard vs Computer
    if (token == "lizard" && computerToken == "rock") {
        setDecision("You Loose!")
        setComputerScore(computerScore+1);
    } if (token == "lizard" && computerToken == "paper") {
        setDecision("You Win!")
        setPlayerScore(playerScore+1);
    } if (token == "lizard" && computerToken == "scissors") {
        setDecision("You Loose!")
        setComputerScore(computerScore+1);
    } if (token == "lizard" && computerToken == "lizard") {
        setDecision("It's a Tie!")
    } if (token == "lizard" && computerToken == "spock") {
        setDecision("You Win!")
        setPlayerScore(playerScore+1);
    }
    // Spock vs Computer
    if (token == "spock" && computerToken == "rock") {
        setDecision("You Win!")
        setPlayerScore(playerScore+1);
    } if (token == "spock" && computerToken == "paper") {
        setDecision("You Loose!")
        setComputerScore(computerScore+1);
    } if (token == "spock" && computerToken == "scissors") {
        setDecision("You Win!")
        setPlayerScore(playerScore+1);
    } if (token == "spock" && computerToken == "lizard") {
        setDecision("You Loose!")
        setComputerScore(computerScore+1);
    } if (token == "spock" && computerToken == "spock") {
        setDecision("It's a Tie!")
    }
} 

// Output whether Player is Winner, Loser or if it's a tie 
function setDecision(decision) {
    document.querySelector(".decision h2").innerText = decision;
} 

// Increment player Score by 1
function setPlayerScore(playerNewScore) {
    playerScore = playerNewScore;
    document.querySelector(".playerScore h2").innerText = playerNewScore;
}

// Increment Computer score by 1
function setComputerScore(computerNewScore) {
    computerScore = computerNewScore;
    document.querySelector(".computerScore h2").innerText = computerNewScore;
}

// Reset Game
function restartGame() {
    let contest = document.querySelector(".contest");
    contest. style.display = "none";
  
    let tokens = document.querySelector(".tokens");
    tokens.style.display = "flex";
} 
  