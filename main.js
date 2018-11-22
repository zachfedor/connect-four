/****************
 * Connect Four *
 ****************/

const PLAYERS = ['red', 'black'];
let t = 0;
let grid;

const nextTurn = () => {
  t = t === 0 ? 1 : 0;
};

const resetGrid = () => {
  // Create an empty array of 6 rows. Fill it with null values in order
  // to map and replace with an array of 7 columns with null values.
  grid = Array(6).fill(null).map(row => Array(7).fill(null));
};

const findEmptyRowByCol = (col) => {
  let row = 5;
  while (grid[row][col] !== null) {
    row--;
    if (row < 0) break;
  }
  return row;
};

const placeByCol = (color, col) => {
  let row = findEmptyRowByCol(col);
  if (row < 0) {
    console.log("Can't, column is filled");
  } else {
    grid[row][col] = color;
  }
};

const placeOnClick = (e) => {
  if (e.target !== e.currentTarget) {
    placeByCol(PLAYERS[t], e.target.dataset.column);
    nextTurn();
    drawGrid();
  }
  e.stopPropagation();
};

const clearElement = (el) => {
  while(el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const drawGrid = () => {
  const tableEl = document.querySelector('table');
  clearElement(tableEl);

  grid.forEach(row => {
    const rowEl = document.createElement('tr');

    row.forEach((col, index) => {
      const cellEl = document.createElement('td');
      cellEl.dataset.column = index;
      cellEl.dataset.player = col;
      rowEl.appendChild(cellEl);
    });

    tableEl.appendChild(rowEl);
  });
};

const init = () => {
  const tableEl = document.querySelector('table');
  tableEl.addEventListener('click', placeOnClick, false);

  resetGrid();
  drawGrid();
};

window.onload = init;
