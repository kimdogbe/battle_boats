const newGrid = [
  //     1   2   3   4   5   6   7   8   9   10
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

export function createGameBoard() {
  let grid = newGrid;

  const getGrid = () => grid;

  function placeShip(startLocation, orientation, shipLength) {
    let endLocation = '';
    const row = Number(startLocation.split('')[0]);
    const col = Number(startLocation.split('')[1]);

    if (orientation === 'horizontal') {
      checkWithinBounds(col + (shipLength-1));
      for(let i = col; i <= col + (shipLength - 1); i++) grid[row][i] = 'O';
    }
    else if (orientation === 'vertical') {
      checkWithinBounds(row + (shipLength-1));
      for(let i = row; i <= row + (shipLength - 1); i++) grid[i][col] = 'O';
    }
  }

  function checkWithinBounds(num){
    return num < 10 
  }

  return { getGrid, placeShip }
}