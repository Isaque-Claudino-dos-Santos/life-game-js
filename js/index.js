//@ts-check
('use strict');

import canvas2d from './modules/canvas2d.js';
import draw from './modules/draw.js';
import matrix from './modules/matrix.js';

const canvas = canvas2d.getElement('#main');
const context = canvas2d.getContext(canvas);

draw.grid(context, {
  x: 0,
  y: 0,
  color: 'black',
  width: canvas.width,
  height: canvas.height,
  gridWidth: canvas.width / 60,
  gridHeight: canvas.height / 60,
});

canvas.addEventListener('mousedown', (e) => {
  const [x, y] = [e.offsetX, e.offsetY];

  console.log(x, y);
});

matrix.forEach([5, 5], (cell) => {});
