/*
    morrer = (< 2) || (> 3)
    vivo = (== 3) || (== 2)
    nacer = (== 3)
*/

import calcAG from './calcAdjacentsGrids.js';

class LifeGame {
  /**
   * @private
   * @type {TypeGridProps[]}
   */
  grids = [];

  /**
   * @constructor
   * @param {TypeGridsProps[]} grids
   */
  constructor(grids) {
    this.grids = grids;
  }

  /**
   * @private
   * @param {TypeGridProps[]} grids
   */
  getTotalGridsAlive(grids) {
    let total = 0;
    grids.forEach((grid) => {
      if (grid.alive) total++;
    });

    return total;
  }

  aplicateRules() {
    this.grids.forEach((grid, index) => {
      const adjacentsGrids = [
        this.grids[calcAG.down(index)],
        this.grids[calcAG.left(index)],
        this.grids[calcAG.right(index)],
        this.grids[calcAG.topLeft(index)],
        this.grids[calcAG.topRight(index)],
      ].filter(Boolean);

      const totalAlive = this.getTotalGridsAlive(adjacentsGrids);
    });
  }
}

export default LifeGame;
