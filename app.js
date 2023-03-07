const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");
const bodyEl = document.querySelector("body");

function clock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = "PM";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  ampmEl.textContent = ampm;
  setTimeout(() => {
    clock();
  }, 1000);
}

clock();

const coolColors = [
  "Purple",
  "Green",
  "Blue",
  "Teal",
  "#F50057",
  "Indigo",
  "Violet",
  "#689438",
  "#A978EF",
  "#1B9CFC",
  "Turquoise",
  "Aqua",
  "Navy",
  "Lime",
  "Fuchsia",
  "Purple",
  "Teal",
  "Yellow",
];

function changeBodyImage() {
  setInterval(function () {
    bodyEl.style.backgroundColor =
      coolColors[Math.floor(Math.random() * coolColors.length)];
  }, 10000);
}

changeBodyImage();
