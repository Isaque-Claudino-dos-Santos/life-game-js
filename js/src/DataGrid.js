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
   * Create datas of the grids
   * @public
   * @param {number} areaWidth
   * @param {number} areaHeight
   * @param {number} gridWidth
   * @param {number} gridHeight
   */
  create(areaWidth, areaHeight, gridWidth, gridHeight) {
    const iRow = areaWidth / gridWidth;
    const iColumn = areaHeight / gridHeight;

    matrix.forEach([iRow, iColumn], ({ column, row }) => {
      this.grids.push({
        x: row * gridWidth,
        y: column * gridHeight,
        height: gridHeight,
        width: gridWidth,
        color: 'black',
        type: 'fill',
        alive: false,
        nextStateAlive: false,
      });
    });
  }
}

export default DataGrid;
