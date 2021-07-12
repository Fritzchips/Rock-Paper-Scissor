const pickRock = document.getElementById("rBox");
const pickPaper = document.getElementById("pBox");
const pickScissor = document.getElementById("sBox");
const result = document.getElementById("results");
const visual = document.getElementById("visual");
const score = document.getElementById("score");

let array = ["rock", "paper", "scissor"];
let player, computer, outcome;
let win = 0;
let lose = 0;
let draw = 0;

pickRock.addEventListener("click", () => {
  player = array[0];
  computer = array[Math.floor(Math.random() * 3)];

  if (computer == array[0]) {
    outcome = "got a Draw";
  } else if (computer == array[1]) {
    outcome = "Lose!";
  } else {
    outcome = "Win!";
  }

  judge();
});

pickPaper.addEventListener("click", () => {
  player = array[1];
  computer = array[Math.floor(Math.random() * 3)];

  if (computer == array[0]) {
    outcome = "Win!";
  } else if (computer == array[1]) {
    outcome = "got a Draw";
  } else {
    outcome = "Lose!";
  }

  judge();
});

pickScissor.addEventListener("click", () => {
  player = array[2];
  computer = array[Math.floor(Math.random() * 3)];

  if (computer == array[0]) {
    outcome = "Lose!";
  } else if (computer == array[1]) {
    outcome = "Win!";
  } else {
    outcome = "got a Draw";
  }

  judge();
});

function judge() {
  if (outcome == "Win!") {
    visual.style.color = "green";
    win++;
  } else if (outcome == "Lose!") {
    visual.style.color = "red";
    lose++;
  } else if (outcome == "got a Draw") {
    visual.style.color = "blue";
    draw++;
  }

  result.innerText = `You picked ${player}\nComputer picked ${computer}`;
  visual.innerText = `You ${outcome}`;
  score.innerText = `Wins: ${win}\nLoses: ${lose}\nDraws: ${draw}`;
}
