import removeKnight from "./remove-knight";
import createKnight from "./create-knight";
import Board from "./board-logic";
import dataCell from "./get-data-cell";

let userPlaceKnight = (e) => {
  let boardCells = document.querySelectorAll(".cell");
  removeKnight();
  console.log("userPlaceKnight");
  let parent = dataCell(e.target.dataset.x, e.target.dataset.y);
  parent.appendChild(createKnight());
  parent.style.backgroundColor = "rgb(0, 91, 0)";
  Board.getStartingPoint(parent);
  Board.getPossibleMoves(Board.startingX, Board.startingY);
  boardCells.forEach((cell) => {
    cell.removeEventListener("click", userPlaceKnight);
  });
};

export default userPlaceKnight;
