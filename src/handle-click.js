import Board from "./board-logic";
import dataCell from "./get-data-cell";

let handleClick = (e) => {
  let boardCells = document.querySelectorAll(".cell");
  if (Board.checkValidEnd(e.target)) {
    Board.getEndingPoint(e.target);
    let endCell = dataCell(e.target.dataset.x, e.target.dataset.y);
    endCell.style.backgroundColor = "rgb(180, 224, 180)";
    boardCells.forEach((cell) => {
      cell.removeEventListener("click", handleClick);
    });
  }
};

export default handleClick;
