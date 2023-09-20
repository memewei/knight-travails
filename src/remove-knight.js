import Board from "./board-logic";

const removeKnight = () => {
  let boardCells = document.querySelectorAll(".cell");
  const knight = document.querySelector(".knight");
  console.log("removeKnight triggered");
  Board.resetBoard();
  boardCells.forEach((cell) => {
    if (cell.style.backgroundColor === "rgb(0, 91, 0)") {
      cell.textContent = "";
      cell.dataset.originalColor === "lilac"
        ? (cell.style.backgroundColor = cell.dataset.originalColor)
        : (cell.style.backgroundColor = "rgb(81, 17, 67)");
    }
    if (cell.hasChildNodes()) cell.removeChild(knight);
  });
  if (knight) {
    knight.style.transform = "";
  }
};

export default removeKnight;
