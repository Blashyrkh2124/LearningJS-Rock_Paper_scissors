// variables to keep track of score
let playerWins = 0;
let computerWins = 0;

// the actual game
function game() {
  var userChoice = prompt();
  var user = userChoice.toLowerCase();
  var compChoice = (function() {
    var options = ["rock", "paper", "scissors"];
    var throwResult = options[Math.floor(Math.random() * 3)];
    return throwResult;
  })();
  if (user === compChoice) {
    console.log("Draw...");
  }
  else {
    switch (user) {
      case "rock":
        if (compChoice == "scissors") {
          console.log("You win!");
          ++playerWins;
        }
        else {
          console.log("You lose.");
          ++computerWins;
        }
        break;
      case "scissors":
        if (compChoice == "paper") {
          console.log("You win!");
          ++playerWins;
        }
        else {
          console.log("You lose.");
          ++computerWins;
        }
        break;
      case "paper":
        if (compChoice == "rock") {
          console.log("You win!");
          ++playerWins;
      }
        else {
          console.log("You lose.");
          ++computerWins;
        }
        return;
      default: (console.log("It appears you made an error."));
    }
  }
}

// loops the game 5 times
for(i=1; i<=5; i++) {
  game()
  console.log("Player wins =" + playerWins);
  console.log("Computer wins= " + computerWins);
  // after 5 games this reutrns the winner.
  if (i == 5) {
    if (playerWins > computerWins) {
      console.log("The game has ended. You have won.");
    } else if (playerWins < computerWins) {
      console.log("The game has ended. You have lost.");
    } else (console.log("The game has ended and resulted in a draw."));
    break;
  }
}
