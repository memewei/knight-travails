import Board from "./board-logic";
import handleClick from "./handle-click";

let selectEndingCell = () => {
  let boardCells = document.querySelectorAll(".cell");
  boardCells.forEach((cell) => {
    if (cell.style.backgroundColor === "rgb(180, 224, 180)") {
      Board.resetEnd();
      cell.classList.contains("lilac")
        ? (cell.style.backgroundColor = "lilac")
        : (cell.style.backgroundColor = "purple");
    }
    cell.addEventListener("click", handleClick);
    console.log("selectEndingCell triggered");
  });
};

export default selectEndingCell;
