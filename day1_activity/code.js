const UPDATE_INTERVAL = 30; // milliseconds

const ballsList = [];
let points = 0;
let timerId = null;

window.addEventListener("DOMContentLoaded", () => {
  initializeBalls();
  startPlay();
  document
    .querySelector("#changeColorsBtn")
    .addEventListener("click", randomizeColors);
  document
    .querySelector("#changeSpeedsBtn")
    .addEventListener("click", randomizeSpeeds);
  document.querySelector("#more-balls").addEventListener("click", addBall);
  document.querySelector("#fewer-balls").addEventListener("click", removeBall);
  document.querySelector("#play").addEventListener("click", startPlay);
  document.querySelector("#stop").addEventListener("click", stopPlay);
  document.querySelector("#faster").addEventListener("click", goFaster);
  document.querySelector("#slower").addEventListener("click", goSlower);
  document
    .querySelector(".boundary")
    .addEventListener("click", handleAreaClick);
});

function initializeBalls() {
  document.querySelectorAll(".ball").forEach(initializeBall);
}

function initializeBall(el) {
  const ball = new Ball(el);
  ballsList.push(ball);
}

function addBall() {
  const el = document.createElement("div");
  el.classList.add("ball");
  document.querySelector(".boundary").appendChild(el);
  initializeBall(el);
}

// Removes the last ball on the list
function removeBall() {
  const lastBall = ballsList.pop();
  lastBall.el.remove();
}

function randomizeColors() {
  ballsList.forEach((b) => b.randomizeColor());
}

function randomizeSpeeds() {
  ballsList.forEach((b) => b.randomizeSpeed());
}

function goFaster() {
  ballsList.forEach((b) => b.faster());
}

function goSlower() {
  ballsList.forEach((b) => b.slower());
}

function startPlay() {
  if (timerId) return;
  timerId = setInterval(updateBalls, UPDATE_INTERVAL);
  updatePlayButtons(true);
}

function stopPlay() {
  if (!timerId) return;
  clearInterval(timerId);
  timerId = null;
  updatePlayButtons(false);
}

function updatePlayButtons(isPlaying) {
  if (isPlaying) {
    document.querySelector("#play").classList.add('pressed');
    document.querySelector("#stop").classList.remove("pressed");
  } else {
    document.querySelector("#play").classList.remove("pressed");
    document.querySelector("#stop").classList.add("pressed");

  }
}

function updateBalls() {
  ballsList.forEach((b) => b.update());
}

function handleAreaClick(ev) {
  if (ev.target.classList.contains("ball")) {
    points += parseInt(ev.target.dataset.points);
    document.querySelector("#points").innerHTML = points;
    ev.target.style.filter = "brightness(200%)";
    setTimeout(() => (ev.target.style.filter = ""), 60);
  }
}
