const colors = ["green", "red", "yellow", "blue"];
let gameOrder = [];
let playerOrder = [];

function wrongPick() {
  $("button").click((event) => {
    let btnColor = event.target.className.split(" ")[0];

    if (colors.includes(btnColor)) {
      $("body").addClass("wrong-answer");
      $(`.${btnColor}`).addClass("wrong-answer-btn");
      setTimeout(() => {
        $("body").removeClass("wrong-answer");
        $(`.${btnColor}`).removeClass("wrong-answer-btn");
      }, 200);
    }
  });
}

function startGame(gameOrder) {
  let randomColor = randomSelection();
  let parentClass = $(`.${colors[randomColor]}`).parent();
  gameOrder.push(colors[randomColor]);

  flashElement(parentClass, "next-btn", 400);
}

function continueGame(gameOrder) {
  let randomColor = randomSelection();
  let parentClass = $(`.${colors[randomColor]}`).parent();
  gameOrder.push(colors[randomColor]);

  flashElement(parentClass, "next-btn", 400);
}

function randomSelection() {
  let randomNum = Math.floor(Math.random() * colors.length);
  return randomNum;
}

function checkCorrectPick(playerOrder, gameOrder) {
  $("button").click((event) => {
    let btnColor = event.target.className.split(" ")[0];

    if (btnColor == gameOrder[gameOrder.length - 1]) {
      playerOrder.push(btnColor);
    }
  });
}

function buttonPressed() {
  $("button").click((event) => {
    let btnColor = event.target.className.split(" ")[0];

    if (colors.includes(btnColor)) {
      flashElement(`.${btnColor}`, "pressed-btn", 300);
    }
  });
}

function flashElement(classLocate, className, timer) {
  $(classLocate).addClass(className);

  setTimeout(() => {
    $(classLocate).removeClass(className);
  }, timer);
}

function changeTitle() {
  $("h1").text("Level 1");
}

buttonPressed();
startGame(gameOrder);
checkCorrectPick(playerOrder, gameOrder);
