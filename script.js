let game = {
  board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  playerOne: {
    name: "",
    mark: "",
  },
  playerTwo: {
    name: "",
    mark: "",
  },
  currentPlayer: "player1",
};

document.querySelector(".new-game").addEventListener("click", () => {
  document.querySelector("dialog").showModal();
  document.querySelector("form").reset();
});

document.querySelector(".submit").addEventListener("click", () => {
  game.playerOne.name = document.querySelector("#player-one-name").value;
  game.playerOne.mark = document.querySelector("#player-one-mark").value;
  game.playerTwo.name = document.querySelector("#player-two-name").value;
  game.playerTwo.mark = document.querySelector("#player-two-mark").value;
  if (game.playerOne.name === "" || game.playerTwo.name === "") {
    alert("Please write your names");
  } else {
    document.querySelector("dialog").close();
  }
});

function play() {
  document.querySelectorAll(".cell").forEach((item) => {
    item.addEventListener("click", () => {
      if (game.currentPlayer === "player1") {
        game.board.splice(item.dataset.index, 1, game.playerOne.mark);
        item.style.cssText = "background-image: url(./assets/x.png)";
        game.currentPlayer = "player2";
      } else if (game.currentPlayer === "player2") {
        game.board.splice(item.dataset.index, 1, game.playerTwo.mark);
        item.style.cssText = "background-image: url(./assets/o.png)";
        game.currentPlayer = "player1";
      }
    });
  });
}
play();



// let isGameOver = false;
// function gameStatus() {
//   if (
//     // rows
//     board[0] === playerOne &&
//     board[1] === playerOne &&
//     board[2] === playerOne
//   ) {
//     console.log(`winner is ${playerOne}`);
//     isGameOver = true;
//   } else if (
//     board[3] === playerOne &&
//     board[4] === playerOne &&
//     board[5] === playerOne
//   ) {
//     console.log(`winner is ${playerOne}`);
//     isGameOver = true;
//   } else if (
//     board[6] === playerOne &&
//     board[7] === playerOne &&
//     board[8] === playerOne
//   ) {
//     console.log(`winner is ${playerOne}`);
//     isGameOver = true;
//   } else if (
//     // columns
//     board[0] === playerOne &&
//     board[3] === playerOne &&
//     board[6] === playerOne
//   ) {
//     console.log(`winner is ${playerOne}`);
//     isGameOver = true;
//   } else if (
//     board[1] === playerOne &&
//     board[4] === playerOne &&
//     board[7] === playerOne
//   ) {
//     console.log(`winner is ${playerOne}`);
//     isGameOver = true;
//   } else if (
//     board[2] === playerOne &&
//     board[5] === playerOne &&
//     board[8] === playerOne
//   ) {
//     console.log(`winner is ${playerOne}`);
//     isGameOver = true;
//   } else if (
//     // diagonal
//     board[0] === playerOne &&
//     board[4] === playerOne &&
//     board[8] === playerOne
//   ) {
//     console.log(`winner is ${playerOne}`);
//     isGameOver = true;
//   } else if (
//     board[2] === playerOne &&
//     board[4] === playerOne &&
//     board[6] === playerOne
//   ) {
//     console.log(`winner is ${playerOne}`);
//     isGameOver = true;
//   }
//   // player two
//   else if (
//     // rows
//     board[0] === playerTwo &&
//     board[1] === playerTwo &&
//     board[2] === playerTwo
//   ) {
//     console.log(`winner is ${playerTwo}`);
//     isGameOver = true;
//   } else if (
//     board[3] === playerTwo &&
//     board[4] === playerTwo &&
//     board[5] === playerTwo
//   ) {
//     console.log(`winner is ${playerTwo}`);
//     isGameOver = true;
//   } else if (
//     board[6] === playerTwo &&
//     board[7] === playerTwo &&
//     board[8] === playerTwo
//   ) {
//     console.log(`winner is ${playerTwo}`);
//     isGameOver = true;
//   } else if (
//     // columns
//     board[0] === playerTwo &&
//     board[3] === playerTwo &&
//     board[6] === playerTwo
//   ) {
//     console.log(`winner is ${playerTwo}`);
//     isGameOver = true;
//   } else if (
//     board[1] === playerTwo &&
//     board[4] === playerTwo &&
//     board[7] === playerTwo
//   ) {
//     console.log(`winner is ${playerTwo}`);
//     isGameOver = true;
//   } else if (
//     board[2] === playerTwo &&
//     board[5] === playerTwo &&
//     board[8] === playerTwo
//   ) {
//     console.log(`winner is ${playerTwo}`);
//     isGameOver = true;
//   } else if (
//     // diagonal
//     board[0] === playerTwo &&
//     board[4] === playerTwo &&
//     board[8] === playerTwo
//   ) {
//     console.log(`winner is ${playerTwo}`);
//     isGameOver = true;
//   } else if (
//     board[2] === playerTwo &&
//     board[4] === playerTwo &&
//     board[6] === playerTwo
//   ) {
//     console.log(`winner is ${playerTwo}`);
//     isGameOver = true;
//   } else if (
//     // draw
//     (board[0] === "x" || board[0] === "o") &&
//     (board[1] === "x" || board[1] === "o") &&
//     (board[2] === "x" || board[2] === "o") &&
//     (board[3] === "x" || board[3] === "o") &&
//     (board[4] === "x" || board[4] === "o") &&
//     (board[5] === "x" || board[5] === "o") &&
//     (board[6] === "x" || board[6] === "o") &&
//     (board[7] === "x" || board[7] === "o") &&
//     (board[8] === "x" || board[8] === "o")
//   ) {
//     console.log(`it's a draw`);
//     isGameOver = true;
//   }
// }

// for (let i = 0; i < board.length; i++) {
//   playerOneTurn();
//   console.log(board);
//   gameStatus();
//   if (isGameOver === true) {
//     break;
//   }
//   playerTwoTurn();
//   console.log(board);
//   gameStatus();
//   if (isGameOver === true) {
//     break;
//   }
// }
