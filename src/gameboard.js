import { createShip } from "./ship";

const newGrid = [
  //        1   2   3   4   5   6   7   8   9   10
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
const gridMapX = { 'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6, 'H':7, 'I':8, 'J':9 };
const gridMapY = (num) => num - 1;

export function createGameBoard() {
  let grid = newGrid;

  const fleet = {
    'carrier': { 'ship': createShip(5), 'location': [] },
    'battleship': { 'ship': createShip(4), 'location': [] },
    'destroyer': { 'ship': createShip(3), 'location': [] },
    'submarine': { 'ship': createShip(3), 'location': [] },
    'patrolBoat': { 'ship': createShip(2), 'location': [] },
  }

  const getGrid = () => grid;

  function placeShip(row, col, orientation, ship) {
    const x = gridMapX[row];
    const y = gridMapY(col);
    const shipLength = ship.ship.length;

    if (orientation === 'horizontal' && checkWithinBounds(y + (shipLength-1)) ) {
      for(let i = y; i <= y + (shipLength - 1); i++){
        grid[x][i] = 'O';
        ship.location.push(row + col);
      } 
    }
    else if (orientation === 'vertical' && checkWithinBounds(x + (shipLength-1)) ) {
      for(let i = x; i <= x + (shipLength - 1); i++){
        grid[i][y] = 'O';
        ship.location.push(row + col);
      } 
    }
  }

  function recieveAttack(row, col) {
    if ( (row in gridMapX) && (col < 1) && (col > 10) ) return "Somehow you've you're out of bounds. Try again"
    
    const x = gridMapX[row];
    const y = gridMapY(col);

    if (grid[x][y] === 'O') {
      grid[x][y] = 'X'

      for (const [_, ship] of Object.entries(fleet)) {
        if (ship.location.includes(row + col)){
          ship.ship.hitShip();
          if (ship.ship.sunk) return 'hit! ship sunk'
        }
      }

      return 'hit!';
    }
    else if (grid[x][y] === '-') {
      grid[x][y] = 'M'
      return 'miss';
    }
  }

  function checkGameOver() {
    for (const [_, ship] of Object.entries(fleet)){
      if (!ship.ship.sunk) return false
    }
    return true
  }

  function checkWithinBounds(num){
    return num < 10 
  }

  return { getGrid, placeShip, recieveAttack, checkGameOver }
}