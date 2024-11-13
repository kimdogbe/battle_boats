import { createShip } from '../src/ship.js'


const testShip = createShip(4);

test('check creates ship', () => {

  expect(testShip.length).toBe(4);
  expect(testShip.getHitCount()).toBe(0);
});

test('check ship hit', () => {
  testShip.hitShip();
  expect(testShip.getHitCount()).toBe(1);

  testShip.hitShip();
  testShip.hitShip();
  
  expect(testShip.getHitCount()).toBe(3);
})

test('check ship sinks', () => {
  testShip.hitShip();
  expect(testShip.getHitCount()).toBe(4);

  testShip.hitShip();
  expect(testShip.getHitCount()).toBe(4);
})