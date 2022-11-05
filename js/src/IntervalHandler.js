class IntervalHendler {
  /**
   * @private
   * @type {number}
   */
  id = 0;

  /**
   * @private
   * @type {string}
   */
  name = '';

  /**
   * @private
   * @type {number}
   */
  time = 0;

  constructor(name, callback, time) {
    this.name = name;
    this.callback = callback;
    this.time = time;
  }

  stop() {}

  start() {
    this.id = setInterval();
  }

  reset() {}
}
