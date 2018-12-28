let PlayerWins = 0;
let ComputerWins = 0;

function game() {
  var UserChoice = prompt();
  var user = UserChoice.toLowerCase();
  var CompChoice = (function() {
    var Options = ["rock", "paper", "scissors"];
    const Throw = Options[Math.floor(Math.random() * 3)];
    return Throw;
  })();
  if (user === CompChoice) {
    console.log("Draw...");
  }
  else {
    switch (user) {
      case "rock":
        if (CompChoice == "scissors") {
          console.log("You win!");
          ++PlayerWins;
        }
        else {
          console.log("You lose.");
          ++ComputerWins;
        }
        break;
      case "scissors":
        if (CompChoice == "paper") {
          console.log("You win!");
          ++PlayerWins;
        }
        else {
          console.log("You lose.");
          ++ComputerWins;
        }
        break;
      case "paper":
        if (CompChoice == "rock") {
          console.log("You win!");
          ++PlayerWins;
      }
        else {
          console.log("You lose.");
          ++ComputerWins;
        }
        return;
      default: (console.log("It appears you made an error."));
    }
  }
}

for(i=1; i<=5; i++) {
  game()
  console.log("Player wins =" + PlayerWins);
  console.log("Computer wins= " + ComputerWins);
  if (i == 5) {
    if (PlayerWins > ComputerWins) {
      console.log("The game has ended. You have won.");
    } else if (PlayerWins < ComputerWins) {
      console.log("The game has ended. You have lost.");
    } else (console.log("The game has ended and resulted in a draw."));
    break;
  }
}
