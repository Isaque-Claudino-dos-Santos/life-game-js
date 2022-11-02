//@ts-check
'use strict';

/**@type {HTMLCanvasElement} */
const canvas =
  document.querySelector('#main') ?? document.createElement('canvas');
const context = canvas.getContext('2d');
