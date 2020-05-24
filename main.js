const output = document.getElementById("output");
const rollButton = document.getElementById("rollButton");
const newGameButton = document.getElementById("newGame");
let bingoNumbers = [];
let randomIndex = 0;

const newGame = () => {
  rollButton.style.visibility = "visible";
  newGameButton.style.backgroundColor = "rgb(238, 107, 107)";
  generateNewBingoArray();
  rollNewNumber();
};

const generateNewBingoArray = () => {
  bingoNumbers = [];
  for (let i = 1; i <= 10; i++) {
    bingoNumbers.push(i);
  }
};

const setRandomIndex = () =>
  (randomIndex = Math.floor(Math.random() * bingoNumbers.length));

const rollNewNumber = () => {
  setRandomIndex();
  output.innerHTML = bingoNumbers[randomIndex];
  bingoNumbers.splice(randomIndex, 1);
  checkLose() ? styleLose() : null;
};

const checkLose = () => bingoNumbers.length == 0;

const styleLose = () => {
  newGameButton.style.backgroundColor = "lightgreen";
  rollButton.style.visibility = "hidden";
};
