const game = (function () {
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  let playerOne = {
    name: "",
    mark: "x",
  };

  let playerTwo = {
    name: "",
    mark: "o",
  };

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
              // If the player chose an occupied spot
              game.board[item.dataset.index] === "x" ||
              game.board[item.dataset.index] === "o"
            ) {
              return;
            } else {
              // Update the board with player spot
              game.board.splice(item.dataset.index, 1, game.playerOne.mark);
              // Update the display with player spot
              item.style.cssText = "background-image: url(./assets/x.png)";
              // Switch the turn to the other player
              game.currentPlayer = "player2";
              document.querySelector(
                ".turn"
              ).textContent = `${game.playerTwo.name}'s turn`;
              // Check if the game is over
              game.gameStatus();
            }
          } else if (game.currentPlayer === "player2") {
            if (
              // If the player chose an occupied spot
              game.board[item.dataset.index] === "x" ||
              game.board[item.dataset.index] === "o"
            ) {
              return;
            } else {
              // Update the board with player's chosen spot
              game.board.splice(item.dataset.index, 1, game.playerTwo.mark);
              // Update the display with player's chosen spot
              item.style.cssText = "background-image: url(./assets/o.png)";
              // Switch the turn to the other player
              game.currentPlayer = "player1";
              document.querySelector(
                ".turn"
              ).textContent = `${game.playerOne.name}'s turn`;
              // Check if the game is over
              game.gameStatus();
            }
          }
        }
      });
    });
  }

  function gameStatus() {
    // Reference the element the display a player's turn
    const turn = document.querySelector(".turn");

    // Check if player one won
    if (
      // rows
      game.board[0] === game.playerOne.mark &&
      game.board[1] === game.playerOne.mark &&
      game.board[2] === game.playerOne.mark
    ) {
      turn.textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[3] === game.playerOne.mark &&
      game.board[4] === game.playerOne.mark &&
      game.board[5] === game.playerOne.mark
    ) {
      turn.textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[6] === game.playerOne.mark &&
      game.board[7] === game.playerOne.mark &&
      game.board[8] === game.playerOne.mark
    ) {
      turn.textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      // columns
      game.board[0] === game.playerOne.mark &&
      game.board[3] === game.playerOne.mark &&
      game.board[6] === game.playerOne.mark
    ) {
      turn.textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[1] === game.playerOne.mark &&
      game.board[4] === game.playerOne.mark &&
      game.board[7] === game.playerOne.mark
    ) {
      turn.textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[2] === game.playerOne.mark &&
      game.board[5] === game.playerOne.mark &&
      game.board[8] === game.playerOne.mark
    ) {
      turn.textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      // diagonal
      game.board[0] === game.playerOne.mark &&
      game.board[4] === game.playerOne.mark &&
      game.board[8] === game.playerOne.mark
    ) {
      turn.textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    } else if (
      game.board[2] === game.playerOne.mark &&
      game.board[4] === game.playerOne.mark &&
      game.board[6] === game.playerOne.mark
    ) {
      turn.textContent = `winner is ${game.playerOne.name}`;
      game.isGameOver = true;
    }
    // Check if player two won
    else if (
      // rows
      game.board[0] === game.playerTwo.mark &&
      game.board[1] === game.playerTwo.mark &&
      game.board[2] === game.playerTwo.mark
    ) {
      turn.textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[3] === game.playerTwo.mark &&
      game.board[4] === game.playerTwo.mark &&
      game.board[5] === game.playerTwo.mark
    ) {
      turn.textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[6] === game.playerTwo.mark &&
      game.board[7] === game.playerTwo.mark &&
      game.board[8] === game.playerTwo.mark
    ) {
      turn.textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      // columns
      game.board[0] === game.playerTwo.mark &&
      game.board[3] === game.playerTwo.mark &&
      game.board[6] === game.playerTwo.mark
    ) {
      turn.textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[1] === game.playerTwo.mark &&
      game.board[4] === game.playerTwo.mark &&
      game.board[7] === game.playerTwo.mark
    ) {
      turn.textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[2] === game.playerTwo.mark &&
      game.board[5] === game.playerTwo.mark &&
      game.board[8] === game.playerTwo.mark
    ) {
      turn.textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      // diagonal
      game.board[0] === game.playerTwo.mark &&
      game.board[4] === game.playerTwo.mark &&
      game.board[8] === game.playerTwo.mark
    ) {
      turn.textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      game.board[2] === game.playerTwo.mark &&
      game.board[4] === game.playerTwo.mark &&
      game.board[6] === game.playerTwo.mark
    ) {
      turn.textContent = `winner is ${game.playerTwo.name}`;
      game.isGameOver = true;
    } else if (
      // Check if game is drawn
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
    board,
    playerOne,
    playerTwo,
    currentPlayer,
    isGameOver,
    play,
    gameStatus,
  };
})();

// When new game button is pressed
document.querySelector(".new-game").addEventListener("click", () => {
  document.querySelector("dialog").showModal();
  document.querySelector("form").reset();
});

// When let's play button is pressed
document.querySelector(".lets-play").addEventListener("click", () => {
  // Collect players names from form and assign them to player object
  game.playerOne.name = document.querySelector("#player-one-name").value;
  game.playerTwo.name = document.querySelector("#player-two-name").value;

  // If let's play button is pressed and one of the player's name is not inputted
  if (game.playerOne.name === "" || game.playerTwo.name === "") {
    alert("Please write your names");
  } else {
    document.querySelector("dialog").close();
  }
  // Render player one turn
  document.querySelector(".turn").textContent = `${game.playerOne.name}'s turn`;
  game.currentPlayer = "player1";
  // Clear the board
  game.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < 8; i++) {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.style.backgroundImage = "none";
    });
  }
  game.isGameOver = false;
});

game.play();