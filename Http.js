class Http {
  constructor(event) {
    this.event = event;
  }

  /**
   * Http.get
   * @return {Object}  event
   */
  get() {
    return this.event;
  }
}

module.exports = Http;
