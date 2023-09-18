import Board from "./board-logic";
import dataCell from "./get-data-cell";

let boardCells = document.querySelectorAll(".cell");

let handleClick = (e) => {
  if (Board.checkValidEnd(e.target)) {
    Board.getEndingPoint(e.target);
    let endCell = dataCell(e.target.dataset.x, e.target.dataset.y);
    endCell.style.backgroundColor = "rgb(0, 91, 0)";
    boardCells.forEach((cell) => {
      cell.removeEventListener("click", handleClick);
    });
  }
};

export default handleClick;
