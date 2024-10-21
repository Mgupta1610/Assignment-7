function getUserChoice() {
    let userChoice = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;
    } else {
      alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
      return getUserChoice(); // Recursively call the function until a valid choice is made.
    }
  }
  
  function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
  
    alert(`You chose: ${userChoice}`);
    alert(`Computer chose: ${computerChoice}`);
  
    const result = determineWinner(userChoice, computerChoice);
    alert(result);
  }
  
  // Start the game
  playGame();
  