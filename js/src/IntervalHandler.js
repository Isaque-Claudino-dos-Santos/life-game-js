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
   * @type {() => void}
   */
  callback = () => {};

  /**
   * @private
   * @type {number}
   */
  time = 0;

  /**
   * @private
   * @type {boolean}
   */
  created = false;

  /**
   * @param {string} name
   * @param {() => void} callback
   * @param {number} time in ms
   */
  constructor(name, callback, time) {
    this.name = name;
    this.callback = callback;
    this.time = time;
  }

  /**
   * @param {number} time in ms
   */
  setTime(time) {
    this.time = time;
  }

  stop() {
    if (!this.created)
      throw new Error('The event ' + this.name + ' not created');

    clearInterval(this.id);
  }

  start() {
    if (this.created)
      throw new Error('The event ' + this.name + 'allready created');
    this.id = setInterval(this.callback, this.time);
    this.created = true;
  }

  reset() {
    if (!this.created) return;
    this.stop();
    this.start();
  }
}
