//@ts-check
('use strict');

import canvas2d from './modules/canvas2d.js';
import LifeGame from './src/LifeGame.js';
import UpdateLifeGame from './src/UpdateLifeGame.js';
import RenderLifeGame from './src/RenderLifeGame.js';
import IntervalHendler from './src/IntervalHandler.js';

const canvas = canvas2d.getElement('#main');
const context = canvas2d.getContext(canvas);

//Set up Life Game
const updateLifeGame = new UpdateLifeGame(canvas.width, 3);
const renderLifeGame = new RenderLifeGame();
const lifeGame = new LifeGame(context, updateLifeGame, renderLifeGame);

//Set up interval loop Life Game
const loopNextState = new IntervalHendler(
  'Life Game Loop',
  () => lifeGame.next(),
  100
);

for (const element of document.querySelectorAll('.dropdown')) {
  //@ts-ignore
  element.onclick = () => {
    element.classList.toggle('open');
  };
}
