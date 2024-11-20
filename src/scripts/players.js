import { createGameBoard } from "./gameboard.js";
import { createShip } from "./ship.js";

export function createPlayer(playerName) {
  const name = playerName;
  const type = playerName ? 'human' : 'bot';
  const playerBoard = createGameBoard();

  const fleet = {
    'carrier': createShip(5),
    'battleship': createShip(4),
    'destroyer': createShip(3),
    'submarine': createShip(3),
    'patrolBoat': createShip(2),
  }

  function getWinStatus() {
    if (playerBoard.checkGameOver) {
      return false;
    }
    return true;
  }

  return { name, type, playerBoard, getWinStatus, fleet }
}