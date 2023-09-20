import Board from "./board-logic";

let boardCells = document.querySelectorAll(".cell");
const knight = document.querySelector(".knight");

const removeKnight = () => {
  console.log("removeKnight triggered");
  Board.resetBoard();
  boardCells.forEach((cell) => {
    if (cell.style.backgroundColor === "rgb(0, 91, 0)") {
      cell.textContent = "";
      cell.dataset.originalColor === "white"
        ? (cell.style.backgroundColor = cell.dataset.originalColor)
        : (cell.style.backgroundColor = "black");
    }
    if (cell.hasChildNodes()) cell.removeChild(knight);
  });
  if (knight) {
    knight.style.transform = "";
  }
};

export default removeKnight;
