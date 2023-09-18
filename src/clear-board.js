import Board from "./board-logic";
import removeKnight from "./remove-knight";

let boardCells = document.querySelectorAll(".cell");

let clearBoard = () => {
  removeKnight();
  Board.resetBoard();
  boardCells.forEach((cell) => {
    cell.classList.contains("white")
      ? (cell.style.backgroundColor = "white")
      : (cell.style.backgroundColor = "rgb(0, 91, 0)");
  });
};

export default clearBoard;
