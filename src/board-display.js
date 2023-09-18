import Board from "./board-logic";

const generateBoard = (board = Board.generate()) => {
  const boardDisplay = document.querySelector(".board-display");
  for (let x = 0; x < board.length; x++) {
    let row = document.createElement("div");
    for (let y = 0; y < board[x].length; y++) {
      let cell = document.createElement("div");
      if (x % 2 === 0)
        y % 2 === 0 ? cell.classList.add("white") : cell.classList.add("black");
      else
        y % 2 === 0 ? cell.classList.add("black") : cell.classList.add("white");

      cell.dataset.originalColor = cell.classList;
      cell.classList.add("cell");
      cell.dataset.row = x;
      cell.dataset.x = x;
      cell.dataset.column = y;
      cell.dataset.y = y;

      row.appendChild(cell);
    }
    row.classList.add("row");
    boardDisplay.appendChild(row);
  }
};

export default generateBoard;
