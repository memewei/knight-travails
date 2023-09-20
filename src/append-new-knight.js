import createKnight from "./create-knight";

let appendNewKnight = (newCell) => {
  const knight = document.querySelector(".knight");
  let oc = knight.parentNode;
  oc.removeChild(knight);
  newCell.appendChild(createKnight());
};

export default appendNewKnight;
