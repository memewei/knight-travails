import userPlaceKnight from "./user-placed-knight";

let boardCells = document.querySelectorAll(".cell");

let placeKnight = () => {
  boardCells.forEach((cell) => {
    cell.addEventListener("click", userPlaceKnight);
  });
};

export default placeKnight;
