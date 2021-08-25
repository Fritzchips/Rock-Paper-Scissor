const result = document.getElementById("results");
const visual = document.getElementById("visual");
const score = document.getElementById("score");

let computer, outcome;
let win = 0;
let lose = 0;
let draw = 0;

const gameImages = document.querySelectorAll("img");
for (gameImage of gameImages) {
  gameImage.addEventListener("click", (e) => determineWinnner(e.target.alt));
}

const computerChoice = () => {
  const array = ["rock", "paper", "scissor"];
  return array[Math.floor(Math.random() * array.length)];
};

const determineWinnner = (player) => {
  computer = computerChoice();

  if (player === computer) outcome = "got a Draw";
  switch (player) {
    case "rock":
      if (computer === "paper") outcome = "Lose!";
      if (computer === "scissor") outcome = "Win!";
      break;
    case "paper":
      if (computer === "rock") outcome = "Win!";
      if (computer === "scissor") outcome = "Lose!";
      break;
    case "scissor":
      if (computer === "rock") outcome = "Lose!";
      if (computer === "paper") outcome = "Win!";
      break;

    default:
      break;
  }

  judge(player);
};

function judge(player) {
  if (outcome === "Win!") {
    visual.style.color = "green";
    win++;
  } else if (outcome === "Lose!") {
    visual.style.color = "red";
    lose++;
  } else if (outcome === "got a Draw") {
    visual.style.color = "blue";
    draw++;
  }

  result.innerText = `You picked ${player}\nComputer picked ${computer}`;
  visual.innerText = `You ${outcome}`;
  score.innerText = `Wins: ${win}\nLoses: ${lose}\nDraws: ${draw}`;
}
