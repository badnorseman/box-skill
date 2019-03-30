class Http {
  constructor(event) {
    this.event = event;
  }

  /**
   * Http.get
   * @return {Object}  event
   */
  get() {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: this.event
      })
    };
  }
}

module.exports = Http;
