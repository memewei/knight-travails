import Board from "./board-logic";
import handleClick from "./handle-click";

let boardCells = document.querySelectorAll(".cell");

let selectEndingCell = () => {
  boardCells.forEach((cell) => {
    if (cell.style.backgroundColor === "rgb(0, 91, 0") {
      Board.resetEnd();
      cell.classList.contains("white")
        ? (cell.style.backgroundColor = "white")
        : (cell.style.backgroundColor = "black");
    }
    cell.addEventListener("click", handleClick);
  });
};

export default selectEndingCell;
