import draw from '../modules/draw.js';

class LifeGame {
  /**
   * @private
   * @type {TypeGridProps[]}
   */
  grids = [];

  pixelSquares = 0;

  /**
   * @constructor
   * @param {TypeGridsProps[]} grids
   */
  constructor(grids, pixelSquares) {
    this.grids = grids;
    this.pixelSquares = pixelSquares;
  }

  /**
   *
   * @return {TypeGridsProps}
   */
  getGrids() {
    return this.grids;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} context
   * @param {TypeGridProps} grid
   */
  claerGrid(context, grid) {
    context.clearRect(grid.x, grid.y, grid.width, grid.height);
  }

  /**
   * @param {CanvasRenderingContext2D} context
   * @param {TypeGridProps} grid
   */
  drawAliveGrids(context, grid) {
    draw.rect(context, { ...grid, type: 'fill', color: 'black' });
  }

  /**
   * @param {CanvasRenderingContext2D} context
   * @param {TypeGridProps} grid
   */
  drawDeadGrids(context, grid) {
    draw.rect(context, { ...grid, type: 'stroke', color: 'green' });
  }

  /**
   * @param {CanvasRenderingContext2D} context
   * @param {TypeGridProps[]} grids
   */
  renderGrids(context, grids) {
    grids.forEach((grid) => {
      grid.alive = grid.nextState;
      this.claerGrid(context, grid);
      if (grid.alive) this.drawAliveGrids(context, grid);
      if (!grid.alive) this.drawDeadGrids(context, grid);
    });
  }

  /**
   * @private
   * @param {TypeGridProps} gridRef
   * @param {TypeGridProps[]} grids
   * @return {number}
   */
  getTotalGridsAlive(gridRef, grids) {
    const sumWidth = gridRef.x + gridRef.width;
    const sumHeight = gridRef.y + gridRef.height;
    const subWidth = gridRef.x - gridRef.width;
    const subHeight = gridRef.y - gridRef.height;

    let total = 0;
    grids.forEach((grid) => {
      //Right
      if (grid.x === sumWidth && grid.y === gridRef.y && grid.alive) total++;

      //left
      if (grid.x === subWidth && grid.y === gridRef.y && grid.alive) total++;

      //down
      if (grid.y === sumHeight && grid.x === gridRef.x && grid.alive) total++;

      //top
      if (grid.y === subHeight && grid.x === gridRef.x && grid.alive) total++;

      //top right
      if (grid.x === sumWidth && grid.y === subHeight && grid.alive) total++;

      //top left
      if (grid.x === subWidth && grid.y === subHeight && grid.alive) total++;

      ///down left
      if (grid.x === subWidth && grid.y === sumHeight && grid.alive) total++;

      //down right
      if (grid.x === sumWidth && grid.y === sumHeight && grid.alive) total++;
    });

    return total;
  }

  /**
   * @return {TypeGridProps[]}
   */
  checkNextState() {
    const modifiedGrids = [];
    this.grids.forEach((grid, index) => {
      const adjacentsGrids = [
        this.grids[index + 1],
        this.grids[index - 1],
        this.grids[index + this.pixelSquares],
        this.grids[index - this.pixelSquares],
        this.grids[index + this.pixelSquares + 1],
        this.grids[index + this.pixelSquares - 1],
        this.grids[index - this.pixelSquares + 1],
        this.grids[index - this.pixelSquares - 1],
      ].filter(Boolean);

      const totalAlive = this.getTotalGridsAlive(grid, adjacentsGrids);

      //NACE
      if (!grid.alive && totalAlive === 3) {
        grid.nextState = true;
        modifiedGrids.push(grid);
        return;
      }

      //VIVER
      if (grid.alive && (totalAlive === 3 || totalAlive === 2)) {
        grid.nextState = true;
        modifiedGrids.push(grid);
        return;
      }

      //MORRER
      if (grid.alive && (totalAlive < 2 || totalAlive > 3)) {
        grid.nextState = false;
        modifiedGrids.push(grid);
        return;
      }
    });
    return modifiedGrids;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} context
   */
  aplicateNextState(context) {
    const modifiedGrids = this.checkNextState(context);
    this.renderGrids(context, modifiedGrids);
  }
}

export default LifeGame;
