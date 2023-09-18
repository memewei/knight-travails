let dataCell = (x, y) => {
  return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
};

export default dataCell;
