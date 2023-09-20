import userPlaceKnight from "./user-placed-knight";

let placeKnight = () => {
  let boardCells = document.querySelectorAll(".cell");
  boardCells.forEach((cell) => {
    cell.addEventListener("click", userPlaceKnight);
  });
};

export default placeKnight;
