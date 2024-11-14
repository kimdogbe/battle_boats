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

  const getGrid = () => grid;

  function placeShip(startLocation, orientation, shipLength) {
    let endLocation = '';
    const row = Number(startLocation.split('')[0]);
    const col = Number(startLocation.split('')[1]);

    if (orientation === 'horizontal' && checkWithinBounds(col + (shipLength-1)) ) {
      for(let i = col; i <= col + (shipLength - 1); i++) grid[row][i] = 'O';
    }
    else if (orientation === 'vertical' && checkWithinBounds(row + (shipLength-1)) ) {
      for(let i = row; i <= row + (shipLength - 1); i++) grid[i][col] = 'O';
    }
  }

  // TODO: place ship could simply take the location and ship and add the locations to the ship

  function recieveAttack(row, col) {
    if ( (row in gridMapX) && (col < 1) && (col > 10) ) return "Somehow you've you're out of bounds. Try again"
    
    const x = gridMapX[row];
    const y = gridMapY(col);

    if (grid[x][y] === 'O') {
      grid[x][y] = 'X'
      return 'hit!';
    }
    else if (grid[x][y] === '-') {
      grid[x][y] = 'M'
      return 'miss';
    }

    // TODO: implement ship sink + record coords of shot
  }

  function checkWithinBounds(num){
    return num < 10 
  }

  return { getGrid, placeShip, recieveAttack }
}

export function createFleet(){
  const carrier = createShip(5);
  const battleship = createShip(4);
  const destroyer = createShip(3);
  const submarine = createShip(3);
  const patrolBoat = createShip(2);

  return { carrier, battleship, destroyer, submarine, patrolBoat }
}