//@ts-check
('use strict');

import canvas2d from './modules/canvas2d.js';
import draw from './modules/draw.js';
import matrix from './modules/matrix.js';
import DataGrid from './src/DataGrid.js';

const canvas = canvas2d.getElement('#main');
const context = canvas2d.getContext(canvas);

const dataGrid = new DataGrid();
dataGrid.create(canvas.width, canvas.height, 20, 20);
dataGrid.renderInCanvas(context);

canvas.addEventListener('mousedown', (e) => {
  const [mX, mY] = [e.offsetX, e.offsetY];

  dataGrid.getGrids().forEach(({ x, y, width, height, color }, index) => {
    if (mX > x && mX < x + width && mY > y && mY < y + height) {
      color = 'blue';
      draw.rect(context, {
        x,
        y,
        width,
        height,
        color,
        type: 'fill',
      });
    }
  });
});
