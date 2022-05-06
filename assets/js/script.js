
// Pick hand function
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
  }

