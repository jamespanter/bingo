const output = document.getElementById("output"),
  numbersRemaining = document.getElementById("numbersRemaining"),
  rollButton = document.getElementById("rollButton"),
  newGameButton = document.getElementById("newGame"),
  recentNumbersOutput = document.getElementById("recentNumbers"),
  callout = document.getElementById("callout");

let bingoNumbers = [],
  recentNumbers = [],
  randomIndex = 0;

const callouts = {
  1: "Kelly’s eye",
  46: "Up to tricks",
  2: "One little duck",
  47: "Four and seven",
  3: "Cup of tea",
  48: "Four dozen",
  4: "Knock at the door",
  49: "PC",
  5: "Man alive",
  50: "Half a century",
  6: "Half a dozen",
  51: "Tweak of the thumb",
  7: "Lucky seven",
  52: "anny La Rue",
  8: "Grden gate",
  53: "Stuck in a tree",
  9: "Dctor’s orders",
  54: "Clean the floor",
  10: "Borris’s den",
  55: "Snakes alive",
  11: "Legs eleven",
  56: "Shotts Bus",
  12: "One dozen",
  57: "Heinz varieties",
  13: "Unlucky for some",
  58: "Make them wait",
  14: "Valentine’s Day",
  59: "Brighton Line",
  15: "Young and keen",
  60: "Five dozen",
  16: "Sweet 16",
  61: "Baker’s bun",
  17: "Dancing queen",
  62: "Tickety-boo",
  18: "Coming of age",
  63: "Tickle me 63",
  19: "Goodbye teens",
  64: "Red raw",
  20: "One score",
  65: "Old age pension",
  21: "Royal salute",
  66: "Clickety click",
  22: "Two little ducks",
  67: "Stairway to heaven",
  23: "Thee and me",
  68: "Saving Grace",
  24: "Two dozen",
  69: "Favourite of mine",
  25: "Duck and dive",
  70: "Three score and ten",
  26: "Pick and mix",
  71: "Bang on the drum",
  27: "Gateway to heaven",
  72: "Six dozen",
  28: "Over weight",
  73: "Queen bee",
  29: "Rise and shine",
  74: "Hit the floor",
  30: "Dirty Gertie",
  75: "Strive and strive",
  31: "Get up and run",
  76: "Trombones",
  32: "Buckle my shoe",
  77: "Sunset strip",
  33: "Fish, chips & peas",
  78: "39 more steps",
  34: "Ask for more",
  79: "One more time",
  35: "Jump and jive",
  80: "Eight and blank",
  36: "Three dozen",
  81: "Stop and run",
  37: "More than eleven",
  82: "Straight on through",
  38: "Christmas cake",
  83: "Time for tea",
  39: "39 steps",
  84: "Seven dozen",
  40: "Life begins",
  85: "Staying alive",
  41: "Time for fun",
  86: "Between the sticks",
  42: "Winnie the Pooh",
  87: "Torquay in Devon",
  43: "Down on your knees",
  88: "Two fat ladies",
  44: "Droopy drawers",
  89: "Nearly there",
  45: "Halfway there",
  90: "Top of the shop",
};

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
    callout.innerHTML = callouts[bingoNumbers[randomIndex]];
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
