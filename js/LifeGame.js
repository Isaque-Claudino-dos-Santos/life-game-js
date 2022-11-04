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
   *
   * @param {TypeGridProps[]} grids
   */
  checkGridsAlive(grids) {
    grids.forEach(() => {});
  }

  aplicateRules() {
    this.grids.forEach((grid, index) => {
      const adjacentsGrids = [
        this.grids[calcAG.down(index)],
        this.grids[calcAG.left(index)],
        this.grids[calcAG.right(index)],
        this.grids[calcAG.topLeft(index)],
        this.grids[calcAG.topRight(index)],
        this.grids[calcAG.downLeft(index)],
        this.grids[calcAG.downRight(index)],
      ].filter(Boolean);

      const totalAlive = this.checkGridsAlive(adjacentsGrids);

      console.log(adjacentsGrids);
    });
  }
}

export default LifeGame;
