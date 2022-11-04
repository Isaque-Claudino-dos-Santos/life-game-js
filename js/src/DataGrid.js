import draw from '../modules/draw.js';
import matrix from '../modules/matrix.js';

class DataGrid {
  /**
   * @private
   * @type {TypeGridProps[]}
   */

  grids = [];

  /**
   * return the all grids
   * @public
   * @return {TypeGridProps[]}
   */
  getGrids() {
    return this.grids;
  }

  /**
   * update grid
   * @param {number} index
   * @param {Partial<TypeGridProps>} props
   */
  updateGrid(index, props) {
    Object.assign(this.grids[index], { ...props });
  }

  /**
   * Create datas of the grids
   * @public
   * @param {number} areaWidth
   * @param {number} areaHeight
   * @param {number} gridWidth
   * @param {number} gridHeight
   */
  create = (areaWidth, areaHeight, gridWidth, gridHeight) => {
    const iRow = areaWidth / gridWidth;
    const iColumn = areaHeight / gridHeight;

    matrix.forEach([iRow, iColumn], ({ column, row }) => {
      this.grids.push({
        x: row * gridWidth,
        y: column * gridHeight,
        column,
        height: gridHeight,
        width: gridWidth,
        row,
        color: 'black',
      });
    });
  };

  /**
   * @param {CanvasRenderingContext2D} context
   */
  renderInCanvas(context) {
    this.grids.forEach(({ x, y, width, height, color, type }) => {
      draw.rect(context, {
        x,
        y,
        width,
        height,
        color,
        type: type ?? 'stroke',
      });
    });
  }
}

export default DataGrid;
