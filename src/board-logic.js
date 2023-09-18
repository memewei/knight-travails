import dataCell from "./get-data-cell";

const Board = {
  startingX: null,
  startingY: null,
  endingX: null,
  endingY: null,
  possibleX: [2, 1, -1, -2, -2, -1, 1, 2],
  possibleY: [1, 2, 2, 1, -1, -2, -2, -1],
  board: {},
  movesQueue: [],
  previous: [...Array(8)].map(() => Array(8).fill(0)),
  generate() {
    return [...Array(8)].map(() => Array(8).fill(""));
  },
  getStartingPoint(cell) {
    this.startingX = parseInt(cell.dataset.x);
    this.startingY = parseInt(cell.dataset.y);
    this.movesQueue = [];
    this.movesQueue.push([this.startingX, this.startingY]);
    this.board[JSON.stringify([this.startingX, this.startingY])] = 1;
  },
  getEndingPoint(cell) {
    this.endingX = parseInt(cell.dataset.x);
    this.endingY = parseInt(cell.dataset.y);
  },
  checkValidEnd(cell) {
    if (typeof cell.dataset.x === "undefined") return false;
    return true;
  },
  getPossibleMoves(x, y, possibleMoves = []) {
    for (let i = 0; i < 8; i++) {
      let newX = x + this.possibleX[i];
      let newY = y + this.possibleY[i];
      if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
        possibleMoves.push([newX, newY]);
      }
    }
    return possibleMoves;
  },
  findPath(queue = this.movesQueue) {
    if (this.endingX === null || this.startingX === null) return;
    while (queue.length) {
      const location = queue.shift();
      if (location[0] === this.endingX && location[1] === this.endingY) break;
      const moves = this.getPossibleMoves(location[0], location[1]);
      moves.forEach((move) => {
        if (this.board[JSON.stringify(move)]) return;
        queue.push(move);
        this.board[JSON.stringify(move)] = 1;
        this.previous[move[0]][move[1]] = [location[0], location[1]];
      });
    }
    let path = [];
    let currentLocation = [this.endingX, this.endingY];
    while (
      currentLocation[0] !== this.startingX ||
      currentLocation[1] !== this.startingY
    ) {
      path.unshift(currentLocation);
      currentLocation = this.previous[currentLocation[0]][currentLocation[1]];
    }
    path.unshift([this.startingX, this.startingY]);

    this.getStartingPoint(
      dataCell(path[path.length - 1][0], path[path.length - 1][1]),
    );
    return path;
  },
  resetBoard() {
    this.startingX = null;
    this.startingY = null;
    this.endingX = null;
    this.endingY = null;
    this.board = {};
    this.movesQueue = [];
    this.previous = [...Array(8)].map(() => Array(8).fill(0));
  },
  chainReset() {
    this.previous = [...Array(8)].map(() => Array(8).fill(0));
    this.board = {};
  },
  resetEnd() {
    this.endingX = null;
    this.endingY = null;
  },
};

export default Board;
