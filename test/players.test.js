import { createPlayer } from "../src/players";

const player = createPlayer('kofi');

test('check player has gameboard', () => {
  expect(player.getGameboard()).not.toBe(undefined);
});

test('check player has name', () => {
  expect(player.getName()).toBe('kofi');
});

test('check player win status', () => {
  expect(player.getWinStatus()).toBe('win');
});