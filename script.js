const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const title = document.getElementById("title");
const rollBtn = document.getElementById("rollBtn");

function rollDice() {
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;

  img1.src = "dice" + random1 + ".png";
  img2.src = "dice" + random2 + ".png";

  if (random1 > random2) {
    title.textContent = "🚩 Player 1 Wins!";
  } else if (random2 > random1) {
    title.textContent = "Player 2 Wins! 🚩";
  } else {
    title.textContent = "Draw!";
  }
}

rollBtn.addEventListener("click", rollDice);

rollDice();