import { createPlayer } from "./players.js";
import { createGameBoard } from "./gameboard.js";
import { createShip } from "./ship.js";

const playerGrid = document.querySelector('#player-grid');
const botGrid = document.querySelector('#bot-grid');

playerGrid.style.backgroundColor = 'red';
botGrid.style.backgroundColor = 'green';

playerGrid.addEventListener('click', (event) => {
  console.log(event.target.className);
})

botGrid.addEventListener('click', (event) => {
  console.log(event.target.className);
})