import { createPlayer } from "../src/players";

const player = createPlayer('kofi');
const bot = createPlayer('');

test('check player has gameboard', () => {
  expect(player.playerBoard).not.toBe(undefined);
});

test('check player has name and is human', () => {
  expect(player.name).toBe('kofi');
  expect(player.type).toBe('human');
});

test('check bot has no name and is bot type', () => {
  expect(bot.name).toBe('');
  expect(bot.type).toBe('bot');
});

test('check player win status', () => {
  expect(player.getWinStatus()).toBe(false);
});