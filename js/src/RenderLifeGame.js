import draw from '../modules/draw.js';

class RenderLifeGame {
  /**
   * @private
   * @param {CanvasRenderingContext2D} context
   * @param {TypeGridProps} entity
   */
  claerEntity(context, entity) {
    context.clearRect(entity.x, entity.y, entity.width, entity.height);
  }

  /**
   * @public
   * @param {CanvasRenderingContext2D} context
   * @param {TypeGridProps} entity
   */
  drawEntityLive(context, entity) {
    draw.rect(context, { ...entity, type: 'fill', color: 'black' });
  }

  /**
   * @public
   * @param {CanvasRenderingContext2D} context
   * @param {TypeGridProps} entity
   */
  drawEntityDie(context, entity) {
    draw.rect(context, { ...entity, type: 'stroke', color: 'green' });
  }

  /**
   * @public
   * @param {CanvasRenderingContext2D} context
   * @param {TypeGridProps[]} entities
   */
  renderEntities(context, entities) {
    entities.forEach((entity) => {
      entity.alive = entity.nextStateAlive;
      this.claerEntity(context, entity);
      if (entity.alive) this.drawEntityLive(context, entity);
      if (!entity.alive) this.drawEntityDie(context, entity);
    });
  }
}

export default RenderLifeGame;
