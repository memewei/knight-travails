import Board from "./board-logic";
import removeKnight from "./remove-knight";

let clearBoard = () => {
  let boardCells = document.querySelectorAll(".cell");
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
