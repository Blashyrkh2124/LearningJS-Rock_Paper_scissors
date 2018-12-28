var UserChoice = "rock";
var CompChoice = compGen();

function compGen () {
  var Options = ["rock", "paper", "scissors"];
  const Throw = Options[Math.floor(Math.random() * 3)];
  return Throw;
}
