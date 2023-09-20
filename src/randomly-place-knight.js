import Board from "./board-logic";
import dataCell from "./get-data-cell";
import removeKnight from "./remove-knight";
import createKnight from "./create-knight";
import clearBoard from "./clear-board";

const randomlyPlaceKnight = (
  x = Math.floor(Math.random() * 8),
  y = Math.floor(Math.random() * 8),
) => {
  removeKnight();
  clearBoard();
  let randomCell = dataCell(x, y);
  randomCell.appendChild(createKnight());
  randomCell.style.backgroundColor = "rgb(0, 91, 0)";
  Board.getStartingPoint(randomCell);
  Board.getPossibleMoves(Board.startingX, Board.startingY);
};

export default randomlyPlaceKnight;
