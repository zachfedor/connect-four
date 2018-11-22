/****************
 * Connect Four *
 ****************/

const PLAYERS = ['x', 'o'];
// const PLAYERS = ['a20e0e', '444'];
let t = 0;
let grid;

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
  if (row > 0) {
    grid[row][col] = color;
  } else {
    console.log("Can't, column is filled");
  }
};

const init = () => {
  resetGrid();
  placeByCol(PLAYERS[0], 5);
  placeByCol(PLAYERS[1], 5);
  placeByCol(PLAYERS[0], 4);
  placeByCol(PLAYERS[1], 3);
};

window.onload = init;
