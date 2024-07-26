let buttons = document.querySelectorAll("button");
let audios = {
  w: "./sounds/tom-1.mp3",
  a: "./sounds/tom-2.mp3",
  s: "./sounds/tom-3.mp3",
  d: "./sounds/tom-4.mp3",
  j: "./sounds/crash.mp3",
  k: "./sounds/snare.mp3",
  l: "./sounds/kick-bass.mp3",
};

let audioKeys = Object.keys(audios);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonChar = buttons[i].innerText;
    let audio = new Audio(audios[buttonChar.toLowerCase()]);
    audio.play();
  });
}

addEventListener("keypress", (event) => {
  if (audioKeys.includes(event.key)) {
    let audio = new Audio(audios[event.key]);
    audio.play();
  }
});
