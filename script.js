var UserChoice = "rock";
var CompChoice = "SCISSORS";

function rockPaperScissors(player, computer) {
  var play = UserChoice.toLowerCase();
  var comp = CompChoice.toLowerCase();
  if (play === comp) {
    alert("It's a draw!");
    return;
  } else if (play == "rock" && comp == "scissors") {
    playerWin();
  } else if (play == "rock") {

  }
}

function playerWin() {
  alert("Player wins. Player choice was " + UserChoice + ". Computer choice was " + CompChoice + ".");
}
rockPaperScissors(UserChoice, CompChoice);
