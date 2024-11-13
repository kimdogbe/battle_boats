import { createGameBoard } from '../src/gameboard.js'

const gameBoard = createGameBoard();

test('check board created', () => {
  
  expect(gameBoard).not.toBe(undefined);
  expect(gameBoard.getGrid()).not.toBe(undefined);
});

test('check place ship', () => {
  const shipOneLength = 4;
  expect(gameBoard.placeShip('a1', 'horizontal', shipOneLength)).toBe('Ship placed at A1 to A4');
  const shipTwoLength = 5;
  expect(gameBoard.placeShip('C4', 'vertical', shipTwoLength)).toBe('Ship placed at C4 to G4');
  
  expect(gameBoard.getGrid()).toBe({
    'A': ['O','O','O','O','-','-','-','-','-','-'],
    'B': ['-','-','-','-','-','-','-','-','-','-'],
    'C': ['-','-','-','-','O','-','-','-','-','-'],
    'D': ['-','-','-','-','O','-','-','-','-','-'],
    'E': ['-','-','-','-','O','-','-','-','-','-'],
    'F': ['-','-','-','-','O','-','-','-','-','-'],
    'G': ['-','-','-','-','O','-','-','-','-','-'],
    'H': ['-','-','-','-','-','-','-','-','-','-'],
    'I': ['-','-','-','-','-','-','-','-','-','-'],
    'J': ['-','-','-','-','-','-','-','-','-','-']
  })
});

// test('check recieve attack hit', () => {
//   expect(1).toBe(2);
// });

// test('check recieve attack miss', () => {
//   expect(1).toBe(2);
// });

// test('check all ships sunk (game over)', () => {
//   expect(1).toBe(2);
// });

// test('show missed attacks', () => {
//   expect(1).toBe(2);
// });