import Board from "./board-logic";
import dataCell from "./get-data-cell";
import appendNewKnight from "./append-new-knight";

let animatePath = (path) => {
  let knight = document.querySelector(".knight");
  if (Board.endingX === null || Board.startingX === null) return;
  let timeCount = 0;
  let totalX = 0;
  let totalY = 0;
  let newCell;
  let appendKnight = (cell, timeCount) => {
    setTimeout(() => {
      appendNewKnight(cell);
    }, timeCount);
  };

  let animate = (timeCount, totalX, totalY, cell, i) => {
    setTimeout(() => {
      knight.style.transform = `translateY(${totalX}px) translateX(${totalY}px)`;
      if (cell) {
        cell.style.backgroundColor = "rgb(0, 91, 0)";
        cell.textContent = i + 1;
      }
    }, timeCount);
  };

  for (let i = 0; i < path.length - 1; i++) {
    console.log("Path :", path[i + 1][0], path[i + 1][1]);
    let animateY =
      path[i][0] > path[i + 1][0]
        ? (path[i][0] - path[i + 1][0]) * 100
        : -Math.abs((path[i + 1][0] - path[i][0]) * 100);
    totalX += animateY;
    animate(timeCount, totalX, totalY);
    timeCount += 301;

    let animateX =
      path[i][1] > path[i + 1][1]
        ? -Math.abs((path[i][1] - path[i + 1][1]) * 100)
        : (path[i + 1][1] - path[i][1]) * 100;
    totalY += animateX;
    newCell = dataCell(path[i + 1][0], path[i + 1][1]);
    animate(timeCount, totalX, totalY, newCell, i);
    timeCount += 301;
  }

  let newStarting = dataCell(Board.startingX, Board.startingY);
  appendKnight(newStarting, timeCount);
};

export default animatePath;
