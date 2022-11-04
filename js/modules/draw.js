const draw = {};

/**
 * @typedef {{x:number, y:number, width:number, height:number, color:string, type:'fill' | 'stroke' }} TypeRectProps
 * @param {CanvasRenderingContext2D} context
 * @param {TypeRectProps} param1
 */
draw.rect = (context, { x, y, width, height, color, type }) => {
  context[`${type}Style`] = color;
  context[`${type}Rect`](x, y, width, height);
  context[type]();
};

/**
 * @param {CanvasRenderingContext2D} context
 * @param {{ x:number, y:number, width:number, height:number, color:string, gridWidth:number, gridHeight:number }} param1
 */
draw.grid = (
  context,
  { x, y, width, height, color, gridWidth, gridHeight }
) => {
  const iRow = width / gridWidth;
  const iColumn = height / gridHeight;

  for (let i = 0; i < iRow; i++) {
    for (let j = 0; j < iColumn; j++) {
      draw.rect(context, {
        x: i * gridHeight + x,
        y: j * gridHeight + y,
        width: gridWidth,
        height: gridHeight,
        type: 'stroke',
        color,
      });
    }
  }
};

export default draw;
