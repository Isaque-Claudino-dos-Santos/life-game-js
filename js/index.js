//@ts-check
('use strict');

import LifeGame from './src/LifeGame.js';
import canvas2d from './modules/canvas2d.js';
import DataGrid from './src/DataGrid.js';
import draw from './modules/draw.js';
import IntervalHendler from './src/IntervalHandler.js';
import UpdateLifeGame from './src/UpdateLifeGame.js';
import RenderLifeGame from './src/RenderLifeGame.js';

const canvas = canvas2d.getElement('#main');
const context = canvas2d.getContext(canvas);

const updateLifeGame = new UpdateLifeGame(canvas.width, 3);
const renderLifeGame = new RenderLifeGame();
const lifeGame = new LifeGame(context, updateLifeGame, renderLifeGame);

lifeGame.next();
