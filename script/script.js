//Variables
const start = document.getElementById("start-bttn");
const resetGame = document.getElementById("reset-bttn");
const player = document.getElementById("player");
const p1w = "Player One Wins!!";
const p2w = "Player Two Wins!!";

const boxArr = [
  "box-a1", //0
  "box-a2", //1
  "box-a3", //2
  "box-b1", //3
  "box-b2", //4
  "box-b3", //5
  "box-c1", //6
  "box-c2", //7
  "box-c3", //8
];
const boxId = [];

//Loop to get box IDs, stored in boxId
boxArr.forEach(function (box) {
  boxId.push(document.getElementById(box));
});

//Functions
const clickBox = (event) => {
  if (player.innerHTML === "Player One") {
    event.target.innerHTML = "O";
    player.innerHTML = "Player Two";
    //event.target.removeEventListener("click", clickBox);
  } else if (player.innerHTML === "Player Two") {
    event.target.innerHTML = "X";
    player.innerHTML = "Player One";
    //event.target.removeEventListener("click", clickBox);
  }
  event.target.removeEventListener("click", clickBox);
};


const winX = () => {
  if (
    boxId[0].innerHTML === "X" &&
    boxId[1].innerHTML === "X" &&
    boxId[2].innerHTML === "X"
  ) {
    boxId[0].style.backgroundColor = "red";
    boxId[1].style.backgroundColor = "red";
    boxId[2].style.backgroundColor = "red";
    player.innerHTML = p2w;
    boxId[0].removeEventListener("click", winX);
    boxId[1].removeEventListener("click", winX);
    boxId[2].removeEventListener("click", winX);
  } else if (
    boxId[2].innerHTML === "X" &&
    boxId[5].innerHTML === "X" &&
    boxId[8].innerHTML === "X"
  ) {
    boxId[2].style.backgroundColor = "red";
    boxId[5].style.backgroundColor = "red";
    boxId[8].style.backgroundColor = "red";
    player.innerHTML = p2w;
    boxId[2].removeEventListener("click", winX);
    boxId[5].removeEventListener("click", winX);
    boxId[8].removeEventListener("click", winX);
  } else if (
    boxId[6].innerHTML === "X" &&
    boxId[7].innerHTML === "X" &&
    boxId[8].innerHTML === "X"
  ) {
    boxId[6].style.backgroundColor = "red";
    boxId[7].style.backgroundColor = "red";
    boxId[8].style.backgroundColor = "red";
    player.innerHTML = p2w;
    boxId[6].removeEventListener("click", winX);
    boxId[7].removeEventListener("click", winX);
    boxId[8].removeEventListener("click", winX);
  } else if (
    boxId[0].innerHTML === "X" &&
    boxId[3].innerHTML === "X" &&
    boxId[6].innerHTML === "X"
  ) {
    boxId[0].style.backgroundColor = "red";
    boxId[3].style.backgroundColor = "red";
    boxId[6].style.backgroundColor = "red";
    player.innerHTML = p2w;
    boxId[0].removeEventListener("click", winX);
    boxId[3].removeEventListener("click", winX);
    boxId[6].removeEventListener("click", winX);
  } else if (
    boxId[1].innerHTML === "X" &&
    boxId[4].innerHTML === "X" &&
    boxId[7].innerHTML === "X"
  ) {
    boxId[1].style.backgroundColor = "red";
    boxId[4].style.backgroundColor = "red";
    boxId[7].style.backgroundColor = "red";
    player.innerHTML = p2w;
    boxId[1].removeEventListener("click", winX);
    boxId[4].removeEventListener("click", winX);
    boxId[7].removeEventListener("click", winX);
  } else if (
    boxId[3].innerHTML === "X" &&
    boxId[4].innerHTML === "X" &&
    boxId[5].innerHTML === "X"
  ) {
    boxId[3].style.backgroundColor = "red";
    boxId[4].style.backgroundColor = "red";
    boxId[5].style.backgroundColor = "red";
    player.innerHTML = p2w;
    boxId[3].removeEventListener("click", winX);
    boxId[4].removeEventListener("click", winX);
    boxId[5].removeEventListener("click", winX);
  } else if (
    boxId[0].innerHTML === "X" &&
    boxId[4].innerHTML === "X" &&
    boxId[8].innerHTML === "X"
  ) {
    boxId[0].style.backgroundColor = "red";
    boxId[4].style.backgroundColor = "red";
    boxId[8].style.backgroundColor = "red";
    player.innerHTML = p2w;
    boxId[0].removeEventListener("click", winX);
    boxId[4].removeEventListener("click", winX);
    boxId[8].removeEventListener("click", winX);
  } else if (
    boxId[2].innerHTML === "X" &&
    boxId[4].innerHTML === "X" &&
    boxId[6].innerHTML === "X"
  ) {
    boxId[2].style.backgroundColor = "red";
    boxId[4].style.backgroundColor = "red";
    boxId[6].style.backgroundColor = "red";
    player.innerHTML = p2w;
    boxId[2].removeEventListener("click", winX);
    boxId[4].removeEventListener("click", winX);
    boxId[6].removeEventListener("click", winX);
  }
};
const winO = () => {
  if (
    boxId[0].innerHTML === "O" &&
    boxId[1].innerHTML === "O" &&
    boxId[2].innerHTML === "O"
  ) {
    boxId[0].style.backgroundColor = "red";
    boxId[1].style.backgroundColor = "red";
    boxId[2].style.backgroundColor = "red";
    player.innerHTML = p1w;
    boxId[0].removeEventListener("click", winO);
    boxId[1].removeEventListener("click", winO);
    boxId[2].removeEventListener("click", winO);
  } else if (
    boxId[2].innerHTML === "O" &&
    boxId[5].innerHTML === "O" &&
    boxId[8].innerHTML === "O"
  ) {
    boxId[2].style.backgroundColor = "red";
    boxId[5].style.backgroundColor = "red";
    boxId[8].style.backgroundColor = "red";
    player.innerHTML = p1w;
    boxId[2].removeEventListener("click", winO);
    boxId[5].removeEventListener("click", winO);
    boxId[8].removeEventListener("click", winO);
  } else if (
    boxId[6].innerHTML === "O" &&
    boxId[7].innerHTML === "O" &&
    boxId[8].innerHTML === "O"
  ) {
    boxId[6].style.backgroundColor = "red";
    boxId[7].style.backgroundColor = "red";
    boxId[8].style.backgroundColor = "red";
    player.innerHTML = p1w;
    boxId[6].removeEventListener("click", winO);
    boxId[7].removeEventListener("click", winO);
    boxId[8].removeEventListener("click", winO);
  } else if (
    boxId[0].innerHTML === "O" &&
    boxId[3].innerHTML === "O" &&
    boxId[6].innerHTML === "O"
  ) {
    boxId[0].style.backgroundColor = "red";
    boxId[3].style.backgroundColor = "red";
    boxId[6].style.backgroundColor = "red";
    player.innerHTML = p1w;
    boxId[0].removeEventListener("click", winO);
    boxId[3].removeEventListener("click", winO);
    boxId[6].removeEventListener("click", winO);
  } else if (
    boxId[1].innerHTML === "O" &&
    boxId[4].innerHTML === "O" &&
    boxId[7].innerHTML === "O"
  ) {
    boxId[1].style.backgroundColor = "red";
    boxId[4].style.backgroundColor = "red";
    boxId[7].style.backgroundColor = "red";
    player.innerHTML = p1w;
    boxId[1].removeEventListener("click", winO);
    boxId[4].removeEventListener("click", winO);
    boxId[7].removeEventListener("click", winO);
  } else if (
    boxId[3].innerHTML === "O" &&
    boxId[4].innerHTML === "O" &&
    boxId[5].innerHTML === "O"
  ) {
    boxId[3].style.backgroundColor = "red";
    boxId[4].style.backgroundColor = "red";
    boxId[5].style.backgroundColor = "red";
    player.innerHTML = p1w;
    boxId[3].removeEventListener("click", winO);
    boxId[4].removeEventListener("click", winO);
    boxId[5].removeEventListener("click", winO);
  } else if (
    boxId[0].innerHTML === "O" &&
    boxId[4].innerHTML === "O" &&
    boxId[8].innerHTML === "O"
  ) {
    boxId[0].style.backgroundColor = "red";
    boxId[4].style.backgroundColor = "red";
    boxId[8].style.backgroundColor = "red";
    player.innerHTML = p1w;
    boxId[0].removeEventListener("click", winO);
    boxId[4].removeEventListener("click", winO);
    boxId[8].removeEventListener("click", winO);
  } else if (
    boxId[2].innerHTML === "O" &&
    boxId[4].innerHTML === "O" &&
    boxId[6].innerHTML === "O"
  ) {
    boxId[2].style.backgroundColor = "red";
    boxId[4].style.backgroundColor = "red";
    boxId[6].style.backgroundColor = "red";
    player.innerHTML = p1w;
    boxId[2].removeEventListener("click", winO);
    boxId[4].removeEventListener("click", winO);
    boxId[6].removeEventListener("click", winO);
  }
};

const startEvent = () => {
  player.style.visibility = "visible";
  player.innerHTML = "Player One";
  start.style.border = "2px solid black";
  for (let i = 0; i < boxId.length; i++) {
    boxId[i].addEventListener("click", clickBox);
    boxId[i].addEventListener("click", winX);
    boxId[i].addEventListener("click", winO);
  }
  resetGame.addEventListener("click", resetEvent);
  start.removeEventListener("click", startEvent);
};

const resetEvent = () => {
  player.style.visibility = "";
  player.innerHTML = "player";
  start.style.border = "";
  for (let i = 0; i < boxId.length; i++) {
    boxId[i].style.backgroundColor = "";
    boxId[i].innerHTML = "";
    boxId[i].addEventListener("click", clickBox);
    boxId[i].addEventListener("click", winX);
    boxId[i].addEventListener("click", winO);
  }
  start.addEventListener("click", startEvent);
  resetGame.removeEventListener("click", resetEvent);
};

//events
start.addEventListener("click", startEvent);
resetGame.addEventListener("click", resetEvent);


//TEST========================





//===========================