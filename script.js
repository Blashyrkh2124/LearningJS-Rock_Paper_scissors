var UserChoice = "rock";

function computerChoice() {
  var Options = ["rock", "paper", "scissors"];
  const Throw = Options[Math.floor(Math.random() * 3)];
  return Throw;
}

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
};
console.log(computerChoice());
