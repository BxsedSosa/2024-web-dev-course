function randomDice() {
  let randomSelection = Math.floor(Math.random() * 6 + 1);
  let path = `./images/dice${randomSelection}.png`;

  return path;
}

function buttonPress() {
  let dice1 = document.querySelectorAll("img")[0];
  let dice2 = document.querySelectorAll("img")[1];

  dice1.setAttribute("src", randomDice());
  dice2.setAttribute("src", randomDice());

  changeTitle();
}

function changeTitle() {
  let title = document.querySelector("h1");
  let dice1 = document.querySelectorAll("img")[0].getAttribute("src");
  let dice2 = document.querySelectorAll("img")[1].getAttribute("src");

  let dice1Roll = dice1.substring(dice1.length - 5, dice1.length - 4);
  let dice2Roll = dice2.substring(dice2.length - 5, dice2.length - 4);

  if (dice1Roll == dice2Roll) {
    title.textContent = "Please re-roll! It's a tie";
  }

  if (dice1Roll > dice2Roll) {
    title.textContent = "🚩 Player 1 Wins!";
  }

  if (dice2Roll > dice1Roll) {
    title.textContent = "Player 2 Wins! 🚩";
  }
}
