const draw = {};

/**
 * @param {CanvasRenderingContext2D} context
 * @param {{ x:number, y:number, width:number, height:number, color:string, type:'fill' | 'stroke' } param1
 */
draw.rect = (context, { x, y, width, height, color, type }) => {
  context[`${type}Style`] = color;
  context[`${type}Rect`](x, y, width, height);
  context[type]();
};

export default draw;
