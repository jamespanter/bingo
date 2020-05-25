const output = document.getElementById("output"),
  numbersRemaining = document.getElementById("numbersRemaining"),
  rollButton = document.getElementById("rollButton"),
  newGameButton = document.getElementById("newGame"),
  recentNumbersOutput = document.getElementById("recentNumbers");

let bingoNumbers = [],
  recentNumbers = [],
  randomIndex = 0;

const newGame = () => {
  rollButton.style.visibility = "visible";
  newGameButton.style.backgroundColor = "rgb(238, 107, 107)";
  generateNewBingoArrays();
  rollNewNumber();
};

const generateNewBingoArrays = () => {
  bingoNumbers = [];
  recentNumbers = ["", "", "", "", ""];
  for (let i = 1; i <= 90; i++) {
    bingoNumbers.push(i);
  }
};

const setRandomIndex = () =>
  (randomIndex = Math.floor(Math.random() * bingoNumbers.length));

const rollNewNumber = () => {
  setRandomIndex();
  output.classList.add("slide-out-right");

  setTimeout(() => {
    output.classList.remove("slide-out-right");
    output.innerHTML = bingoNumbers[randomIndex];
    output.classList.add("slide-in-left");

    numbersRemaining.innerHTML = bingoNumbers.length - 1;
    recentNumbers.pop();
    recentNumbers.unshift(bingoNumbers[randomIndex]);

    recentNumbersOutput.innerHTML = recentNumbers
      .map((number, index) => {
        return `<span ${
          index == 0 ? `class="slide-in-left"` : null
        }>${number}</span>`;
      })
      .join("");

    bingoNumbers.splice(randomIndex, 1);
    checkLose() ? styleLose() : null;
    newGameButton.disabled = false;
    rollButton.disabled = false;
  }, 500);

  newGameButton.disabled = true;
  rollButton.disabled = true;
};

const checkLose = () => bingoNumbers.length == 0;

const styleLose = () => {
  newGameButton.style.backgroundColor = "lightgreen";
  rollButton.style.visibility = "hidden";
};
