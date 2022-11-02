const canvas2d = {};

/**
 * Create get element canvas in html
 * @param {string} querySelector
 * @return {HTMLCanvasElement}
 */
canvas2d.getElement = (querySelector) => {
  const e = document.querySelector(querySelector);
  if (e) return e;
  throw new Error('The querySelector not exist ' + querySelector);
};

/**
 * Get context to rendering 2d in canvas
 * @param {HTMLCanvasElement} canvasElement
 * @return {CanvasRenderingContext2D}
 */
canvas2d.getContext = (canvasElement) => {
  const c = canvasElement.getContext('2d');
  if (c) return c;
  throw new Error('The element passed not valid');
};
