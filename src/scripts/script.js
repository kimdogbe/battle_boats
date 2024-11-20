import { createPlayer } from "./players.js";
import { createGameBoard } from "./gameboard.js";
import { createShip } from "./ship.js";

const playerGrid = document.querySelector('#player-grid');
const botGrid = document.querySelector('#bot-grid');
const player = createPlayer('Kofi');
const bot = createPlayer();

// for (const ship of Object.entries(player.playerBoard.fleet) ){
//   player.playerBoard.placeShip()
// }

playerGrid.addEventListener('click', (event) => {
  console.log(event.target.className);
})

botGrid.addEventListener('click', (event) => {
  console.log(event.target.className);
})

function updateGrid(player, domGrid) {
  const grid = player.playerBoard.getGrid();

  for (const [rowIndex, row] of grid.entries()) {
    console.log(rowIndex, row);

    row.forEach((element, index) => {
      if (element === 'X'){
        domGrid.children[rowIndex].children[index].style.backgroundColor = 'red';
      } else if (element === 'M'){
        domGrid.children[rowIndex].children[index].style.backgroundColor = 'blue';
      }
    })

  }
}

updateGrid(bot, botGrid);
updateGrid(player, playerGrid)