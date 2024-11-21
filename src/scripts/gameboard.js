import { createShip } from "./ship.js";

const gridMapX = { 'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6, 'H':7, 'I':8, 'J':9 };
const gridMapXReverse = { 0:'A', 1:'B', 2:'C', 3:'D', 4:'E', 5:'F', 6:'G', 7:'H', 8:'I', 9:'J' };
const gridMapY = (num) => num - 1;

export function createGameBoard() {
  let grid = [//        1   2   3   4   5   6   7   8   9   10
              /* A */ ['-','-','-','-','-','-','-','-','-','-'],
              /* B */ ['-','-','-','-','-','-','-','-','-','-'],
              /* C */ ['-','-','-','-','-','-','-','-','-','-'],
              /* D */ ['-','-','-','-','-','-','-','-','-','-'],
              /* E */ ['-','-','-','-','-','-','-','-','-','-'],
              /* F */ ['-','-','-','-','-','-','-','-','-','-'],
              /* G */ ['-','-','-','-','-','-','-','-','-','-'],
              /* H */ ['-','-','-','-','-','-','-','-','-','-'],
              /* I */ ['-','-','-','-','-','-','-','-','-','-'],
              /* J */ ['-','-','-','-','-','-','-','-','-','-']
            ]

  const getGrid = () => grid;

  function placeShip(row, col, orientation, ship) {
    const x = gridMapX[row];
    const y = gridMapY(col);
    const shipLength = ship.length;

    if (orientation === 'horizontal' 
        && checkWithinBounds(y + (shipLength - 1))
        && !checkOverlap(x, y, orientation, (shipLength - 1)) ) {
      for(let i = y; i <= y + (shipLength - 1); i++){
        grid[x][i] = 'O';
        ship.addLocation(row, i+1);
      } 
    }
    else if ( orientation === 'vertical' 
              && checkWithinBounds(x + (shipLength-1))
              && !checkOverlap(x, y, orientation, (shipLength - 1)) ) {
      for(let i = x; i <= x + (shipLength - 1); i++){
        grid[i][y] = 'O';
        ship.addLocation(gridMapXReverse[i], col);
      } 
    }
  }

  function recieveAttack(row, col, fleet) {
    if ( (row in gridMapX) && (col < 1) && (col > 10) ) return "Somehow you've you're out of bounds. Try again"
    
    const x = gridMapX[row];
    const y = gridMapY(col);

    if (grid[x][y] === 'O') {
      grid[x][y] = 'X'

      for (const [_, ship] of Object.entries(fleet)) {
        if (ship.getLocation().includes(row + col)){
          ship.hitShip();
          if (ship.getSunk()) return 'hit! ship sunk'
        }
      }

      return 'hit!';
    }
    else if (grid[x][y] === '-') {
      grid[x][y] = 'M'
      return 'miss';
    }
  }

  function checkGameOver(fleet) {
    for (const [index, ship] of Object.entries(fleet)){
      if (!ship.getSunk()) return false
    }
    return true
  }

  function checkWithinBounds(num) {
    return num < 10 
  }

  function checkOverlap(startX, startY, orientation, shipLength) {
    if ( orientation === 'horizontal' ) {
      for(let i = startY; i <= startY + (shipLength); i++){
        if (grid[startX][i] === 'O') {
          return true;
        }
      } 
    }
    else if ( orientation === 'vertical' ) {
      for(let i = startX; i <= startX + (shipLength); i++){
        if (grid[i][startY] === 'O'){
          return true;
        }
      } 
    }

    return false;
  }

  return { getGrid, placeShip, recieveAttack, checkGameOver }
}