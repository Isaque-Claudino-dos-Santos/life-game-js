//@ts-check
('use strict');

import canvas2d from './modules/canvas2d.js';
import draw from './modules/draw.js';

const context = canvas2d.getContext(canvas2d.getElement('#main'));

draw.rect(context, {
  x: 10,
  y: 10,
  width: 30,
  height: 30,
  type: 'fill',
  color: 'red',
});
