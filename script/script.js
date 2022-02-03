//Variables
const start = document.getElementById("start-bttn");
const resetGame = document.getElementById("reset-bttn");
const player = document.getElementById("player");

const boxArr = [
  "box-a1",
  "box-a2",
  "box-a3",
  "box-b1",
  "box-b2",
  "box-b3",
  "box-c1",
  "box-c2",
  "box-c3",
];
const boxId = [];

//Loop to get box IDs, stored in boxId
boxArr.forEach(function (box) {
  boxId.push(document.getElementById(box));
});

//Start and Reset button event
start.addEventListener("click", function () {
  player.style.visibility = "visible";
  player.innerHTML = "Player One";
  start.style.border = "2px solid black";
});

//Grid click events

//EventHandler function
function clickBox(event) {
  if (player.innerHTML === "Player One") {
    event.target.innerHTML = "O";
    return (player.innerHTML = "Player Two");
  }
  if (player.innerHTML === "Player Two") {
    event.target.innerHTML = "X";
    return (player.innerHTML = "Player One");
  }
}

//EventListener
for (let i = 0; i < boxId.length; i++) {
  boxId[i].addEventListener("click", clickBox);
}
