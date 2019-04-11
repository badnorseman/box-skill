"use strict";
const https = require("http");

class Model {
  constructor(imageURL) {
    this.imageURL = imageURL;
    this.modelURL =
      process.env.MODEL_URL || "http://138.197.66.204:5000/modelpost";
  }

  /**
   * Model.get
   * @param {string} imageURL  url to image
   * @return {Object}          data from model
   */
  get() {
    console.debug(`modelURL: ${this.modelURL}`); // Remove when implemented successfully

    return new Promise((resolve, reject) => {
      const req = https.request(this.modelURL, res => {
        if (res.statusCode !== 200) {
          const error = new Error(res.statusCode);
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

  /**
   * Model.post
   * @param {string} imageURL  url to image
   * @return {Object}          data from model
   */
  post() {
    console.debug(`modelURL: ${this.modelURL}`); // Remove when implemented successfully

    return new Promise((resolve, reject) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": this.imageURL.length
        }
      };

      const req = https.request(this.modelURL, options, res => {
        let rawData = "";
        res.setEncoding("utf8");
        res.on("data", chunk => (rawData += chunk));
        res.on("end", () => {
          resolve({
            body: JSON.stringify({
              message: "Processed successfully"
            })
          });
        });
      });
      req.on("error", error => {
        reject(`Model returned error on call ${error}`);
      });
      req.write(this.imageURL);
      req.end();
    });
  }
}

module.exports = Model;
