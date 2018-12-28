var UserChoice = "rOck";
var CompChoice = (function() {
  var Options = ["rock", "paper", "scissors"];
  const Throw = Options[Math.floor(Math.random() * 3)];
  return Throw;
})();

function game(user, computer) {
  var user = UserChoice.toLowerCase();
  if (user === CompChoice) {
    console.log("It's a draw. Try again.");
  }
  else {
    switch (user) {
      case "rock":
        if (CompChoice == "scissors") {console.log("You win!")}
        else {console.log("You lose.")}
        break;
      case "scissors":
        if (CompChoice == "paper") {console.log("You win!")}
        else {console.log("You lose.")}
        break;
      case "paper":
        if (CompChoice == "rock") {console.log("You win!")}
        else {console.log("You lose.")}
        return;
      default:
    }
  }
}
game(UserChoice, CompChoice);
