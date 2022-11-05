//@ts-check
('use strict');

import LifeGame from './src/LifeGame.js';
import canvas2d from './modules/canvas2d.js';

import UpdateLifeGame from './src/UpdateLifeGame.js';
import RenderLifeGame from './src/RenderLifeGame.js';

const canvas = canvas2d.getElement('#main');
const context = canvas2d.getContext(canvas);

const updateLifeGame = new UpdateLifeGame(canvas.width, 3);
const renderLifeGame = new RenderLifeGame();
const lifeGame = new LifeGame(context, updateLifeGame, renderLifeGame);

updateLifeGame.modEntity(3, {
  alive: true,
  nextStateAlive: true,
});

updateLifeGame.modEntity(4, {
  alive: true,
  nextStateAlive: true,
});

updateLifeGame.modEntity(5, {
  alive: true,
  nextStateAlive: true,
});

lifeGame.next();
lifeGame.next();
