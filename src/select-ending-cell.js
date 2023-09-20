import Board from "./board-logic";
import handleClick from "./handle-click";

let selectEndingCell = () => {
  let boardCells = document.querySelectorAll(".cell");
  boardCells.forEach((cell) => {
    if (cell.style.backgroundColor === "rgb(180, 224, 180)") {
      Board.resetEnd();
      cell.classList.contains("white")
        ? (cell.style.backgroundColor = "white")
        : (cell.style.backgroundColor = "black");
    }
    cell.addEventListener("click", handleClick);
    console.log("selectEndingCell triggered");
  });
};

export default selectEndingCell;
