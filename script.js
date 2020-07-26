// variables to keep track of score
let playerWins = 0;
let computerWins = 0;
var gamesCounter = 1;

// the actual game

const buttonClicked = document.querySelectorAll('.button');
buttonClicked.forEach((buttonClicked => buttonClicked.addEventListener("mousedown", function game() {
  var user = this.id;

  var text1 = document.querySelector(".result")
  var compChoice = (function() {
    var options = ["rock", "paper", "scissors"];
    var throwResult = options[Math.floor(Math.random() * 3)];
    return throwResult;
  })();
  if (user === compChoice) {
    text1.textContent = "Draw";
  }
  else {
    switch (user) {
      case "rock":
        if (compChoice == "scissors") {
          text1.textContent = "You win! " + user + " beats " + compChoice;
          ++playerWins;
        }
        else if (compChoice == "paper") {
          text1.textContent = "You lose. " + compChoice + " beats " + user;
          ++computerWins;
        }
        break;
      case "scissors":
        if (compChoice == "paper") {
          var text1 = document.querySelector("p")
          text1.textContent = "You win! " + user + " beats " + compChoice;
          ++playerWins;
        }
        else if (compChoice == "rock") {
          text1.textContent = "You lose. " + compChoice + " beats " + user;
          ++computerWins;
        }
        break;
      case "paper":
      if (compChoice == "rock") {
        text1.textContent = "You win! " + user + " beats " + compChoice;
          ++playerWins;
      }
      else if (compChoice == "scissors") {
        text1.textContent = "You lose. " + compChoice + " beats " + user;
          ++computerWins;
        }
        return;
    }
    let playerCounter = document.querySelector(".user_wins")
    playerCounter.textContent = playerWins;
    let computerCounter = document.querySelector(".comp_wins");
    computerCounter.textContent = computerWins;
    var counter = document.querySelector(".numberOfGames");
    gamesCounter = gamesCounter++;
    counter.textContent = gamesCounter;

  }
})));
