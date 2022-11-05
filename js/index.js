//@ts-check
('use strict');

import LifeGame from './src/LifeGame.js';
import canvas2d from './modules/canvas2d.js';
import DataGrid from './src/DataGrid.js';
import draw from './modules/draw.js';
import IntervalHendler from './src/IntervalHandler.js';

const canvas = canvas2d.getElement('#main');
const context = canvas2d.getContext(canvas);
const pixelSquares = 5;

const dataGrid = new DataGrid();
dataGrid.create(
  canvas.width,
  canvas.height,
  canvas.width / pixelSquares,
  canvas.height / pixelSquares
);

dataGrid.renderInCanvas(context);

//Draw with mouse
canvas.addEventListener('mouseup', (e) => {
  const [mouseX, mouseY] = [e.offsetX, e.offsetY];
  dataGrid.getGrids().forEach(({ x, y, width, height, ...res }, index) => {
    if (mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height) {
      dataGrid.updateGrid(index, { alive: true });
      draw.rect(context, { ...res, x, y, width, height });
      return;
    }
  });
});

//Execute game
const lifeGame = new LifeGame(dataGrid.getGrids(), pixelSquares);

function nextState() {
  lifeGame.aplicateNextState(context);
}

const loopLifeGame = new IntervalHendler(
  'Loop life game',
  () => {
    lifeGame.aplicateNextState(context);
  },
  100
);

/** @type {HTMLButtonElement | null}*/

const buttonNext = document.querySelector('#nextState');
/** @type {HTMLInputElement | null}*/
const buttonPlay = document.querySelector('#play');

/**@type {HTMLInputElement | null} */
const inputSpeed = document.querySelector('#speed');

if (buttonNext) buttonNext.onclick = nextState;

if (buttonPlay)
  buttonPlay.onclick = (e) => {
    loopLifeGame.toggle();
  };

if (inputSpeed)
  inputSpeed.onkeyup = () => {
    const inputValue = Number(inputSpeed.value);
    loopLifeGame.setTime(inputValue);
    loopLifeGame.reset();
  };
