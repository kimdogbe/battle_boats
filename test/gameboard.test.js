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

test('check place ship not out of bounds', () => {
  const shipLength = 4;
  gameBoard.placeShip('09', 'horizontal', shipLength);
  gameBoard.placeShip('90', 'vertical', shipLength);

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
})

test('check recieve attack hit', () => {
  expect(gameBoard.recieveAttack('C', '5')).toBe('hit!');
});

test('check recieve attack miss', () => {
  expect(gameBoard.recieveAttack('C', '4')).toBe('miss');
});

test('check gameboard updated after attacks', () => {
  expect(gameBoard.getGrid()).toEqual([
    ['O','O','O','O','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-','-','-','-'],
    ['-','-','-','M','X','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','O','-','-','-','-','-'],
    ['-','-','-','-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','-','-','-','-']
  ])
});

// test('check all ships sunk (game over)', () => {
//   expect(1).toBe(2);
// });

// test('show missed attacks', () => {
//   expect(1).toBe(2);
// });