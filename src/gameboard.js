const newGrid = {
  //     1   2   3   4   5   6   7   8   9   10
  'A': ['-','-','-','-','-','-','-','-','-','-'],
  'B': ['-','-','-','-','-','-','-','-','-','-'],
  'C': ['-','-','-','-','-','-','-','-','-','-'],
  'D': ['-','-','-','-','-','-','-','-','-','-'],
  'E': ['-','-','-','-','-','-','-','-','-','-'],
  'F': ['-','-','-','-','-','-','-','-','-','-'],
  'G': ['-','-','-','-','-','-','-','-','-','-'],
  'H': ['-','-','-','-','-','-','-','-','-','-'],
  'I': ['-','-','-','-','-','-','-','-','-','-'],
  'J': ['-','-','-','-','-','-','-','-','-','-']
}

export function createGameBoard() {
  let grid = newGrid;

  const getGrid = () => grid;

  return { getGrid }
}