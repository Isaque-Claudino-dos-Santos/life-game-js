//@ts-check
('use strict');

import canvas2d from './modules/canvas2d.js';
import DataGrid from './src/DataGrid.js';

const canvas = canvas2d.getElement('#main');
const context = canvas2d.getContext(canvas);

const dataGrid = new DataGrid();
dataGrid.create(canvas.width, canvas.height, 20, 20);
dataGrid.renderInCanvas(context);
