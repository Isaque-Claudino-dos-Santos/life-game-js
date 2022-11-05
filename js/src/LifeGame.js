import RenderLifeGame from './RenderLifeGame.js';
import UpdateLifeGame from './UpdateLifeGame.js';

class LifeGame {
  /**@private*/
  context;
  /**@private*/
  updateLifeGame;
  /**@private*/
  renderLifeGame;

  /**
   * @param {CanvasRenderingContext2D} context
   * @param {UpdateLifeGame} UpdateLifeGame
   * @param {RenderLifeGame} RenderLifeGame
   */
  constructor(context, UpdateLifeGame, RenderLifeGame) {
    this.context = context;
    this.updateLifeGame = UpdateLifeGame;
    this.renderLifeGame = RenderLifeGame;
    this.build(context);
  }

  /**
   * @private
   * @param {number} screenSize
   * @param {number} pixelSize
   * @return {TypeEntityProps[]}
   */
  createEntities(screenPixelSquere, pixelSize) {
    /**@type {TypeEntityProps[]} */
    const entities = [];

    for (let i = 0; i < screenPixelSquere; i++) {
      for (let j = 0; j < screenPixelSquere; j++) {
        entities.push({
          x: i * pixelSize,
          y: j * pixelSize,
          width: pixelSize,
          height: pixelSize,
          alive: false,
          nextStateAlive: false,
          color: 'green',
          type: 'stroke',
        });
      }
    }
    return entities;
  }

  /**
   * @private
   */
  setEntities() {
    const entities = this.createEntities(
      this.updateLifeGame.screenSquarePixel,
      this.updateLifeGame.pixelSize
    );
    this.updateLifeGame.setEntities(entities);
  }

  /**
   * @private
   * @param {CanvasRenderingContext2D} context
   */
  build(context) {
    this.setEntities();
    this.renderLifeGame.renderEntities(
      context,
      this.updateLifeGame.getEntities()
    );
  }

  next() {
    const modifiedEntities = this.updateLifeGame.run();
    this.renderLifeGame.renderEntities(this.context, modifiedEntities);
  }
}

export default LifeGame;
