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
const updateLifeGame = new UpdateLifeGame(canvas.width, 50);
const renderLifeGame = new RenderLifeGame();
const lifeGame = new LifeGame(context, updateLifeGame, renderLifeGame);

//Set up interval loop Life Game
const loopNextState = new IntervalHendler(
  'Life Game Loop',
  () => lifeGame.next(),
  100
);
updateLifeGame.mouseEvent(canvas, context, renderLifeGame);

for (const element of document.querySelectorAll('.dropdown')) {
  //@ts-ignore
  element.onclick = () => {
    element.classList.toggle('open');
  };
}

function setUpRandonPopulation() {
  const btnRandonPopulation = document.querySelector(
    '.setUpArea #randonPopulation'
  );

  //@ts-ignore
  btnRandonPopulation.onclick = () => {
    for (let i = 0; i < 1000; i++) {
      const rnIndex = Math.floor(Math.random() * 2500);
      updateLifeGame.modEntity(rnIndex, { alive: true, nextStateAlive: true });
      renderLifeGame.drawEntityLive(
        context,
        updateLifeGame.getEntities(rnIndex)
      );
    }
  };
}

function setUpButtonNextState() {
  const btnNextState = document.querySelector('.setUpArea #nextState');
  //@ts-ignore
  btnNextState.onclick = () => {
    lifeGame.next();
  };
}

function setUpLoopNextState() {
  const checkInLoop = document.querySelector('.setUpArea #inLoop');

  //@ts-ignore
  checkInLoop.onclick = () => {
    loopNextState.toggle();
  };
}

function setUpSpeed() {
  const rngSpeed = document.querySelector('.setUpArea #speed');
  const textSpeed = document.querySelector(
    '.setUpArea label[for="speed"] span'
  );

  //@ts-ignore
  rngSpeed.onmousemove = () => {
    //@ts-ignore
    textSpeed.textContent = rngSpeed.value;
    //@ts-ignore
    loopNextState.setTime(Number(rngSpeed.value));
    loopNextState.reset();
  };
}

setUpRandonPopulation();
setUpButtonNextState();
setUpLoopNextState();
setUpSpeed();
