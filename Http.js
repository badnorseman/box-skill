class Http {
  constructor(message) {
    this.message = message || "Processed successfully";
  }

  /**
   * Http.get
   * @return {Object} data
   */
  get() {
    return {
      body: JSON.stringify({
        message: this.message
      })
    };
  }
}

module.exports = Http;
