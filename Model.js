"use strict";
const http = require("http");

class Model {
  constructor(imageURL) {
    this.imageURL = imageURL || require("./image.jpg");
    this.modelURL =
      process.env.MODEL_URL || "http://138.197.66.204:5000/modelpost";
  }

  /**
   * Model.get
   * @param {string} imageURL  url to image
   * @return {Object}          data from model
   */
  get() {
    console.debug(`imageURL: ${this.imageURL}`); // Remove when implemented successfully
    console.debug(`modelURL: ${this.modelURL}`); // Remove when implemented successfully

    return new Promise((resolve, reject) => {
      // resolve ({
      //   body: JSON.stringify({
      //     message: "Processed successfully"
      //   })
      // });
      const req = http.request(this.modelURL, res => {
        console.debug(`statusCode: ${res.statusCode}`); // Remove when implemented successfully

        if (res.statusCode !== 200) {
          const error = new Error();
          reject(`Model returned error on call ${error}`);
        }

        let rawData = "";
        res.setEncoding("utf8");
        res.on("data", chunk => (rawData += chunk));
        console.debug(`rawData: ${rawData}`); // Remove when implemented successfully
        res.on("end", () => {
          try {
            const parsedData = JSON.parse(rawData);
            resolve(parsedData);
          } catch (error) {
            reject(`Model returned error on parse ${error}`);
          }
        });
      });
      req.on("error", error => {
        reject(`Model returned error on call ${error}`);
      });
      req.end();
    });
  }
}

module.exports = Model;
