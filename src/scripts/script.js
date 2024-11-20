import { createPlayer } from "./players.js";
import { createGameBoard } from "./gameboard.js";
import { createShip } from "./ship.js";

const playerGrid = document.querySelector('#player-grid');
const botGrid = document.querySelector('#bot-grid');
const player = createPlayer('Kofi');
const bot = createPlayer();

const gameStarted = false;
let shipIndexToPlace = 0;
const shipTypes = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat'];
const orientation = 'vertical'

// for (const ship of Object.entries(player.playerBoard.fleet) ){
//   player.playerBoard.placeShip()
// }

playerGrid.addEventListener('click', (event) => {
  if (!gameStarted){
    const targetBox = event.target.className; 
    const row = targetBox.slice(0, 1).toUpperCase();
    const col = targetBox.slice(1);
    console.log(row, col);

    player.playerBoard.placeShip(row, col, orientation, player.fleet[shipTypes[shipIndexToPlace]]);
    updateGrid(player, playerGrid);

    shipIndexToPlace += 1;
    if (shipIndexToPlace > 4) gameStarted = true;
  }
})

botGrid.addEventListener('click', (event) => {
  if (gameStarted){
    const targetBox = event.target.className 
    const row = targetBox.slice(0, 1).toUpperCase();
    const col = targetBox.slice(1);

    bot.playerBoard.recieveAttack(row, col, bot.fleet);
    updateGrid(bot, botGrid);
  }
})

function updateGrid(player, domGrid) {
  const grid = player.playerBoard.getGrid();

  for (const [rowIndex, row] of grid.entries()) {
    row.forEach((element, index) => {
      if (element === 'X'){
        domGrid.children[rowIndex].children[index].style.backgroundColor = 'red';
      } 
      else if (element === 'M'){
        domGrid.children[rowIndex].children[index].style.backgroundColor = 'blue';
      } 
      else if (element === 'O'){
        domGrid.children[rowIndex].children[index].style.backgroundColor = 'grey';
      }
    })

  }
}