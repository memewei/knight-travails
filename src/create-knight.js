import Knight from "./knight.svg";

function createKnight() {
  let knight = new Image();
  knight.src = Knight;
  knight.classList.add("knight");
  return knight;
}

export default createKnight;
