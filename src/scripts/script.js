import { createPlayer } from "./players.js";
import { createGameBoard } from "./gameboard.js";
import { createShip } from "./ship.js";

const playerGrid = document.querySelector('#player-grid');
const botGrid = document.querySelector('#bot-grid');
const orientationButton = document.querySelector('#orientation-btn')
const player = createPlayer('Kofi');
const bot = createPlayer();

let gameStarted = false;
let shipIndexToPlace = 0;
const shipTypes = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat'];
let orientation = 'vertical';

placeBotShips();
let botAttackChoices = allBoxesIds();

orientationButton.addEventListener('click', () => {  
  if (orientation === 'vertical'){
    orientation = 'horizontal';
    orientationButton.textContent = 'Change to Vertical';
  } 
  else if (orientation === 'horizontal') {
    orientation = 'vertical'
    orientationButton.textContent = 'Change to Horizontal';
  }
})

playerGrid.addEventListener('click', (event) => {
  if (!gameStarted){
    const targetBox = event.target.className; 
    const row = targetBox.slice(0, 1).toUpperCase();
    const col = targetBox.slice(1);
    console.log(row, col);
    const nextShip = player.fleet[shipTypes[shipIndexToPlace]];

    player.playerBoard.placeShip(row, col, orientation, nextShip);
    console.log(nextShip.getLocation());
    
    if (nextShip.getLocation().length != 0){
      updateGrid(player, playerGrid);
      shipIndexToPlace += 1;
    }

    if (shipIndexToPlace > 4) gameStarted = true;
  }
})

botGrid.addEventListener('click', (event) => {
  if (gameStarted){
    const targetBox = event.target.className 
    const row = targetBox.slice(0, 1).toUpperCase();
    const col = targetBox.slice(1);
    let gameover = false;

    bot.playerBoard.recieveAttack(row, col, bot.fleet);
    updateGrid(bot, botGrid);
    gameover = bot.playerBoard.checkGameOver(bot.fleet);    
    if (gameover) handleGameover('player');

    const index = botAttack(botAttackChoices);
    botAttackChoices.splice(index, 1);
    updateGrid(player, playerGrid);
    gameover = player.playerBoard.checkGameOver(player.fleet);
    if (gameover) handleGameover('bot');
  }
})

function handleGameover(winner) {
  console.log("Winner:" + winner);
  
}

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
      else if (element === 'O' && player.type === 'human'){
        domGrid.children[rowIndex].children[index].style.backgroundColor = 'grey';
      }
    })

  }
}

function placeBotShips() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for ( let i = 0; i < 5; ){
    const row = letters[getRandomInt(10)];
    const col = getRandomInt(10) + 1;
    const orientation = getRandomInt(2) === 0 ? 'horizontal' : 'vertical';
    bot.playerBoard.placeShip(row, col, orientation, bot.fleet[shipTypes[i]]);

    if (bot.fleet[shipTypes[i]].getLocation().length != 0) i++
  }
}

function allBoxesIds() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const boxes = letters.flatMap(letter => numbers.map(num => letter + num))
  return boxes;
}

function botAttack(choices) {
  const index = getRandomInt(choices.length);
  const boxToAttack = choices[index];
  const row = boxToAttack.slice(0, 1).toUpperCase();
  const col = boxToAttack.slice(1);
  console.log(`Bot attacking ${boxToAttack}`)
  player.playerBoard.recieveAttack(row, col, player.fleet);
  return index;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}