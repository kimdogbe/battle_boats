import { createGameBoard } from "./gameboard";

export function createPlayer(playerName) {
  const name = playerName;
  const type = playerName ? 'human' : 'bot';
  const playerBoard = createGameBoard();

  function getWinStatus() {
    if (playerBoard.checkGameOver) {
      return true;
    }
    return false;
  }

  return { name, type, playerBoard, getWinStatus }
}