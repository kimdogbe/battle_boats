import { createGameBoard } from '../src/gameboard.js'
import { createShip } from '../src/ship.js';

const gameBoard = createGameBoard();

test('check board created', () => {
  
  expect(gameBoard).not.toBe(undefined);
  expect(gameBoard.getGrid()).not.toBe(undefined);
});

test('check place ship', () => {
  const shipOne = {'carrier': { 'ship': createShip(4), 'location': [] },}
  gameBoard.placeShip('A', '1', 'horizontal', shipOne.carrier)
  const shipTwo = {'carrier': { 'ship': createShip(5), 'location': [] },}
  gameBoard.placeShip('C', '5', 'vertical', shipTwo.carrier)
  
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
  const ship = {'carrier': { 'ship': createShip(4), 'location': [] },}
  gameBoard.placeShip('A', '10', 'horizontal', ship.carrier);
  gameBoard.placeShip('J', '1', 'vertical', ship.carrier);

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

test('check all ships sunk (game over)', () => {
  expect(1).toBe(2);
});

// test('show missed attacks', () => {
//   expect(1).toBe(2);
// });