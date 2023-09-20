import createKnight from "./create-knight";

const knight = document.querySelector(".knight");

let appendNewKnight = (newCell) => {
  let oc = knight.parentNode;
  oc.removeChild(knight);
  newCell.appendChild(createKnight());
};

export default appendNewKnight;
