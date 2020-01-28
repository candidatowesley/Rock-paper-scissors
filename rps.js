
let player_score = 0;
let CPU_score = 0;
var Rock = document.getElementById('rock');
var Paper = document.getElementById('paper');
var Scissors = document.getElementById('scissors');
const user_Score = document.getElementById("user-score");
const computer_Score = document.getElementById("computer-score");
const Scores = document.querySelector(".scores");
const Result = document.querySelector(".result > p");
const Reset_button = document.getElementById("reset-button")

function get_rand_computer_choice() {
  const CPU_choice = ["rock", "paper", "scissors"];
  const random_number = Math.floor(Math.random()*3);
  return (CPU_choice[random_number]);
  }

    // Player win
const win = (user_chosen, Rand_CPU_choice) => {
    player_score++;
    user_Score.innerHTML = player_score;
    document.getElementById("message").innerHTML = "You chose " + user_chosen + ", and the computer chose " + Rand_CPU_choice + "."
    document.getElementById("win_lose_tie").innerHTML = "You win!" ;
 };
  
  // player lose or CPU win
  const lose = (user_chosen, Rand_CPU_choice) => {
    CPU_score++;
    computer_Score.innerHTML = CPU_score;
    document.getElementById("message").innerHTML = "You chose " + user_chosen + ", and the computer chose " + Rand_CPU_choice + "."
    document.getElementById("win_lose_tie").innerHTML = "You lose" ;
  };
  
  // Draw 
  const tie = (user_chosen, Rand_CPU_choice) => {
    document.getElementById("message").innerHTML = "You chose " + user_chosen + ", and the computer chose " + Rand_CPU_choice + "."
    document.getElementById("win_lose_tie").innerHTML = "Its a Draw" ;
  };
  
  const game = (user_chosen) => {
    const Rand_CPU_choice = get_rand_computer_choice();
  
    switch (user_chosen + Rand_CPU_choice) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        win(user_chosen, Rand_CPU_choice);
        break;
  
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        lose(user_chosen, Rand_CPU_choice);
        break;
  
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        tie(user_chosen, Rand_CPU_choice);
        break;
    }
  
  };

    
const reset_scores = () => {
  CPU_score = 0;
  computer_Score.innerHTML = CPU_score;
  player_score = 0;
  user_Score.innerHTML = player_score;
};


  const main = () => {
    Rock.addEventListener('click', () => game("rock"));
  
    Paper.addEventListener('click', () => game("paper"));
  
    Scissors.addEventListener('click', () => game("scissors"));

    Reset_button.addEventListener('click', () => reset_scores());

  }; 
  main();
  