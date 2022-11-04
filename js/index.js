//@ts-check
('use strict');

import LifeGame from './LifeGame.js';
import canvas2d from './modules/canvas2d.js';
import DataGrid from './src/DataGrid.js';

const canvas = canvas2d.getElement('#main');
const context = canvas2d.getContext(canvas);

const dataGrid = new DataGrid();
dataGrid.create(
  canvas.width,
  canvas.height,
  canvas.width / 3,
  canvas.height / 3
);
dataGrid.renderInCanvas(context);

dataGrid.updateGrid(4, { color: 'red', type: 'fill' });

dataGrid.renderInCanvas(context);

const lifeGame = new LifeGame(dataGrid.getGrids());

lifeGame.aplicateRules();
