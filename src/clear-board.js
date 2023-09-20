import Board from "./board-logic";
import removeKnight from "./remove-knight";

let boardCells = document.querySelectorAll(".cell");

let clearBoard = () => {
  console.log("clearBoard triggered");
  removeKnight();
  Board.resetBoard();
  boardCells.forEach((cell) => {
    cell.classList.contains("white")
      ? (cell.style.backgroundColor = "white")
      : (cell.style.backgroundColor = "black");
  });
};

export default clearBoard;
