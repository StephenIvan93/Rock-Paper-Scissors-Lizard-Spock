
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
        document.getElementById("playerChoice").src = "/assets/images/rock.png";
    else if (token === "paper")
        document.getElementById("playerChoice").src = "/assets/images/paper.jpg";
    else if (token === "scissors")
        document.getElementById("playerChoice").src = "/assets/images/scissors.jpg";
        else if (token === "lizard")
        document.getElementById("playerChoice").src = "/assets/images/lizard.png";
        else if (token === "spock")
        document.getElementById("playerChoice").src = "/assets/images/spock.jpg";

        pickComputerToken(token);
  }

    // Computer Token Function
function pickComputerToken(token) {
    let tokens = ["rock", "paper", "scissors", "lizard", "spock"]
    let computerToken = tokens[Math.floor(Math.random() * 5)];

    //Set the Computer choice
    if(computerToken === "rock")
        document.getElementById("computerChoice").src = "/assets/images/rock.png";
    else if (computerToken === "paper")
        document.getElementById("computerChoice").src = "/assets/images/paper.jpg";
    else if (computerToken === "scissors")
        document.getElementById("computerChoice").src = "/assets/images/scissors.jpg";
        else if (computerToken === "lizard")
        document.getElementById("computerChoice").src = "/assets/images/lizard.png";
        else if (computerToken === "spock")
        document.getElementById("computerChoice").src = "/assets/images/spock.jpg";

        ReferenceError(token, computerToken);
}

// Check if Player is a Winner or Loser Function

function referee(playerToken, computerToken) {
    if (playerToken == "rock" && computerToken == "paper") {
        setDecision("You Loose, Paper covers Rock ")
    } 

    
}

function setDecision(decision) {
    document.querySelector(".decision h1").innerText = decision;
  }
  
function restartGame() {
    let contest = document.querySelector(".contest");
    contest. style.display = "none";
  
    let hands = document.querySelector(".tokens");
    tokens.style.display = "flex";
  }
/*

  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }
  
  const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
  }
  */