const cells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restart = document.querySelector(".restart");
const alert = document.querySelector(".alertBox");

// variables
const currPlayer = "X";
const nextPlayer = "O";
let playerTurn = currPlayer;

player1.textContent = `Player1: ${currPlayer}`;
player2.textContent = `Player2: ${nextPlayer}`;

const handleClick = (e) => {
  if (e.target.textContent === "") {
    e.target.textContent = playerTurn;
    if (checkWinner()) {
      //   console.log(`${playerTurn} is a winner`);
      showAlert(`${playerTurn} is a winner`);
      disableClick();
    } else if (checkTie()) {
      //   console.log(`It's a tie`);
      showAlert(`It's a tie`);
      disableClick();
    } else {
      changePlayerTurn();
      showAlert(`Turn for player: ${playerTurn}`);
    }
  }
};

// function to start your game
const startGame = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
};

// change the turn of a player
const changePlayerTurn = () => {
  playerTurn = playerTurn === currPlayer ? nextPlayer : currPlayer;
};

// check who wins the game

const checkWinner = () => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    const [pos1, pos2, pos3] = winningConditions[i];
    if (
      cells[pos1].textContent !== "" &&
      cells[pos1].textContent === cells[pos2].textContent &&
      cells[pos2].textContent === cells[pos3].textContent
    ) {
      return true;
    }
  }
  return false;
};

// check if game tie
const checkTie = () => {
  let emptyCells = 0;
  cells.forEach((cell) => {
    if (cell.textContent === "") {
      emptyCells++;
    }
  });

  return emptyCells === 0 && !checkWinner();
};

// function to disable cells after tie or win
const disableClick = () => {
  cells.forEach((cell) => {
    cell.removeEventListener("click", handleClick);
    cell.classList.add("disabled");
  });
};

// restart the game
const handleRestart = () => {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("disabled");
  });
  startGame();
};

const showAlert = (msg) => {
  alert.textContent = msg;
  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
};

restart.addEventListener("click", handleRestart);
startGame();
