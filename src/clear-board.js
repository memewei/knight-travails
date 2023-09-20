import Board from "./board-logic";
import removeKnight from "./remove-knight";

let clearBoard = () => {
  let boardCells = document.querySelectorAll(".cell");
  console.log("clearBoard triggered");
  removeKnight();
  Board.resetBoard();
  boardCells.forEach((cell) => {
    cell.classList.contains("lilac")
      ? (cell.style.backgroundColor = "rgb(193, 182, 217)")
      : (cell.style.backgroundColor = "rgb(81, 17, 67)");
  });
};

export default clearBoard;
