const game = (function() {
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  
  let playerOne = {
    name: "",
    mark: "x"
  };

  let playerTwo = {
    name: "",
    mark: "o"
  }

  let currentPlayer = "";

  let isGameOver = false;

  function play() {
    document.querySelectorAll(".cell").forEach((item) => {
      item.addEventListener("click", () => {
        if (game.isGameOver === true) {
          return;
        } else {
          if (game.currentPlayer === "player1") {
            if (
              game.board[item.dataset.index] === "x" ||
              game.board[item.dataset.index] === "o"
            ) {
              return;
            } else {
              game.board.splice(item.dataset.index, 1, game.playerOne.mark);
              item.style.cssText = "background-image: url(./assets/x.png)";
              game.currentPlayer = "player2";
              document.querySelector(
                ".turn"
              ).textContent = `${game.playerTwo.name}'s turn`;
              game.gameStatus();
            }
          } else if (game.currentPlayer === "player2") {
            if (
              game.board[item.dataset.index] === "x" ||
              game.board[item.dataset.index] === "o"
            ) {
              return;
            } else {
              game.board.splice(item.dataset.index, 1, game.playerTwo.mark);
              item.style.cssText = "background-image: url(./assets/o.png)";
              game.currentPlayer = "player1";
              document.querySelector(
                ".turn"
              ).textContent = `${game.playerOne.name}'s turn`;
              game.gameStatus();
            }
          }
        }
      });
    });
  }

  function gameStatus() {
    const cell = document.querySelectorAll(".cell");
    if (
      // rows
      game.board[0] === game.playerOne.mark &&
      game.board[1] === game.playerOne.mark &&
      game.board[2] === game.playerOne.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[3] === game.playerOne.mark &&
      game.board[4] === game.playerOne.mark &&
      game.board[5] === game.playerOne.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[6] === game.playerOne.mark &&
      game.board[7] === game.playerOne.mark &&
      game.board[8] === game.playerOne.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      // columns
      game.board[0] === game.playerOne.mark &&
      game.board[3] === game.playerOne.mark &&
      game.board[6] === game.playerOne.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[1] === game.playerOne.mark &&
      game.board[4] === game.playerOne.mark &&
      game.board[7] === game.playerOne.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[2] === game.playerOne.mark &&
      game.board[5] === game.playerOne.mark &&
      game.board[8] === game.playerOne.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      // diagonal
      game.board[0] === game.playerOne.mark &&
      game.board[4] === game.playerOne.mark &&
      game.board[8] === game.playerOne.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[2] === game.playerOne.mark &&
      game.board[4] === game.playerOne.mark &&
      game.board[6] === game.playerOne.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    }
    // player two
    else if (
      // rows
      game.board[0] === game.playerTwo.mark &&
      game.board[1] === game.playerTwo.mark &&
      game.board[2] === game.playerTwo.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[3] === game.playerTwo.mark &&
      game.board[4] === game.playerTwo.mark &&
      game.board[5] === game.playerTwo.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[6] === game.playerTwo.mark &&
      game.board[7] === game.playerTwo.mark &&
      game.board[8] === game.playerTwo.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      // columns
      game.board[0] === game.playerTwo.mark &&
      game.board[3] === game.playerTwo.mark &&
      game.board[6] === game.playerTwo.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[1] === game.playerTwo.mark &&
      game.board[4] === game.playerTwo.mark &&
      game.board[7] === game.playerTwo.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[2] === game.playerTwo.mark &&
      game.board[5] === game.playerTwo.mark &&
      game.board[8] === game.playerTwo.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      // diagonal
      game.board[0] === game.playerTwo.mark &&
      game.board[4] === game.playerTwo.mark &&
      game.board[8] === game.playerTwo.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[2] === game.playerTwo.mark &&
      game.board[4] === game.playerTwo.mark &&
      game.board[6] === game.playerTwo.mark
    ) {
      document.querySelector(
        ".turn"
      ).textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      // draw
      (game.board[0] === "x" || game.board[0] === "o") &&
      (game.board[1] === "x" || game.board[1] === "o") &&
      (game.board[2] === "x" || game.board[2] === "o") &&
      (game.board[3] === "x" || game.board[3] === "o") &&
      (game.board[4] === "x" || game.board[4] === "o") &&
      (game.board[5] === "x" || game.board[5] === "o") &&
      (game.board[6] === "x" || game.board[6] === "o") &&
      (game.board[7] === "x" || game.board[7] === "o") &&
      (game.board[8] === "x" || game.board[8] === "o")
    ) {
      document.querySelector(".turn").textContent = "It's a draw!";
      game.isGameOver = true;
    }
  }

  return {
    board, playerOne, playerTwo, currentPlayer, play, gameStatus
  }
})()

document.querySelector(".new-game").addEventListener("click", () => {
  document.querySelector("dialog").showModal();
  document.querySelector("form").reset();
});

document.querySelector(".lets-play").addEventListener("click", () => {
  game.playerOne.name = document.querySelector("#player-one-name").value;
  game.playerTwo.name = document.querySelector("#player-two-name").value;
  if (game.playerOne.name === "" || game.playerTwo.name === "") {
    alert("Please write your names");
  } else {
    document.querySelector("dialog").close();
  }
  document.querySelector(".turn").textContent = `${game.playerOne.name}'s turn`;
  game.currentPlayer = "player1";
  game.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < 8; i++) {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.style.backgroundImage = "none";
    });
  }
  game.isGameOver = false;
});

game.play();

