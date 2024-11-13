import { createGameBoard } from '../src/gameboard.js'

const gameBoard = createGameBoard();

test('check board created', () => {
  
  expect(gameBoard).not.toBe(undefined);
  expect(gameBoard.getGrid()).not.toBe(undefined);
});

test('check place ship', () => {
  const shipOneLength = 4;
  gameBoard.placeShip('00', 'horizontal', shipOneLength)
  const shipTwoLength = 5;
  gameBoard.placeShip('24', 'vertical', shipTwoLength)
  
  expect(gameBoard.getGrid()).toEqual([
    ['O','O','O','O','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-','-','-','-']
  ])
});

// test('check place ship not out of bounds', () => {

// })

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