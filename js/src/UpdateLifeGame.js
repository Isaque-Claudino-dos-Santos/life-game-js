import RenderLifeGame from './RenderLifeGame.js';

class UpdateLifeGame {
  /**
   * @readonly
   * @type {number}
   */
  screenSize = 0;

  /**
   * @readonly
   * @type {number}
   */
  screenSquarePixel = 0;

  /**
   * @readonly
   * @type {number}
   */
  pixelSize = 0;

  /**
   * @private
   * @type {TypeEntityProps[]}
   */
  entities = [];

  constructor(screenSize, screenSquarePixel) {
    this.screenSize = screenSize;
    this.screenSquarePixel = screenSquarePixel;
    this.pixelSize = this.screenSize / this.screenSquarePixel;
  }

  /**
   * @param {number | null} index
   * @return {TypeEntityProps[]}
   */
  getEntities(index = null) {
    if (index) return this.entities[index];
    return this.entities;
  }

  /**
   * @param {number} index
   * @param {Partial<TypeEntityProps>} props
   */
  modEntity(index, props) {
    Object.assign(this.entities[index], { ...props });
  }

  /**
   * @public
   * @param {TypeEntityProps[]} entities
   */
  setEntities(entities) {
    this.entities = entities;
  }

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {CanvasRenderingContext2D} context
   * @param {RenderLifeGame} renderLifeGame
   */
  mouseEvent(canvas, context, renderLifeGame) {
    canvas.addEventListener('mousedown', (e) => {
      const [x, y] = [e.offsetX, e.offsetY];

      for (const entity of this.entities) {
        if (
          x > entity.x &&
          x < entity.x + entity.width &&
          y > entity.y &&
          y < entity.y + entity.height
        ) {
          if (e.button === 0) {
            entity.alive = true;
            renderLifeGame.drawEntityLive(context, entity);
          }
        }
      }
    });
  }

  /**
   * @private
   * @param {TypeEntityProps} entity
   * @param {number} totalEntitiesAlive
   * @return {boolean}
   */
  entityWillBorn(entity, totalEntitiesAlive) {
    return !entity.alive && totalEntitiesAlive === 3 ? true : false;
  }

  /**
   * @private
   * @param {TypeEntityProps} entity
   * @param {number} totalEntitiesAlive
   * @return {boolean}
   */
  entityWillLive(entity, totalEntitiesAlive) {
    return entity.alive &&
      (totalEntitiesAlive === 3 || totalEntitiesAlive === 2)
      ? true
      : false;
  }

  /**
   * @private
   * @param {TypeEntityProps} entity
   * @param {number} totalEntitiesAlive
   * @return {boolean}
   */
  entityWillDie(entity, totalEntitiesAlive) {
    return entity.alive && (totalEntitiesAlive < 2 || totalEntitiesAlive > 3)
      ? true
      : false;
  }

  /**
   * @private
   * @param {TypeEntityProps} entityRef
   * @param {TypeEntityProps[]} entities
   * @return {number}
   */
  getTotalEntitiesAlivesAndAdjacents(entityRef, entities) {
    const sumWidth = entityRef.x + entityRef.width;
    const sumHeight = entityRef.y + entityRef.height;
    const subWidth = entityRef.x - entityRef.width;
    const subHeight = entityRef.y - entityRef.height;

    let total = 0;
    entities.forEach((entity) => {
      if (!entity.alive) return;
      //Right
      if (entity.x === sumWidth && entity.y === entityRef.y) total++;
      //left
      if (entity.x === subWidth && entity.y === entityRef.y) total++;
      //down
      if (entity.y === sumHeight && entity.x === entityRef.x) total++;
      //top
      if (entity.y === subHeight && entity.x === entityRef.x) total++;
      //top right
      if (entity.x === sumWidth && entity.y === subHeight) total++;
      //top left
      if (entity.x === subWidth && entity.y === subHeight) total++;
      ///down left
      if (entity.x === subWidth && entity.y === sumHeight) total++;
      //down right
      if (entity.x === sumWidth && entity.y === sumHeight) total++;
    });
    return total;
  }

  /**
   * @private
   * @return {TypeGridProps[]}
   */
  runRules() {
    const modifiedEntities = [];
    this.entities.forEach((entity, index) => {
      const cloneEntities = [
        this.entities[index + 1],
        this.entities[index - 1],
        this.entities[index + this.screenSquarePixel],
        this.entities[index - this.screenSquarePixel],
        this.entities[index + this.screenSquarePixel + 1],
        this.entities[index + this.screenSquarePixel - 1],
        this.entities[index - this.screenSquarePixel + 1],
        this.entities[index - this.screenSquarePixel - 1],
      ].filter(Boolean);

      const totalEntitiesAlive = this.getTotalEntitiesAlivesAndAdjacents(
        entity,
        cloneEntities
      );

      if (this.entityWillBorn(entity, totalEntitiesAlive)) {
        entity.nextStateAlive = true;
        modifiedEntities.push(entity);
        return;
      }

      if (this.entityWillLive(entity, totalEntitiesAlive)) {
        entity.nextStateAlive = true;
        modifiedEntities.push(entity);
        return;
      }

      if (this.entityWillDie(entity, totalEntitiesAlive)) {
        entity.nextStateAlive = false;
        modifiedEntities.push(entity);
        return;
      }
    });
    return modifiedEntities;
  }

  /**
   * @public
   * @return {TypeGridProps[]}
   */
  run() {
    return this.runRules();
  }
}

export default UpdateLifeGame;
