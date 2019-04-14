"use strict";
const FormData = require("form-data");
const fs = require("fs");
const https = require("http");
const request = require("request");

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
   * Model.getImage
   * @param {string} imageURL  url to image
   * @return {Object}          data from model
   */
  getImage() {
    return new Promise((resolve, reject) => {
      request(this.imageURL)
        .on("error", error => {
          reject(`Model returned error on call ${error}`);
        })
        .on("response", res => {
          console.debug(`statusCode: ${res.statusCode}`); // Remove when implemented successfully
          console.debug(`res: ${JSON.stringify(res)}`); // Remove when implemented successfully
          resolve({
            body: JSON.stringify({
              message: "Processed successfully"
            })
          });
        });
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
      // request(this.imageURL).pipe(fs.createWriteStream("newImage.jpg"));

      const formData = new FormData();
      // formData.append("data", request(this.imageURL));
      formData.append("file", fs.createReadStream("./image.jpg"));
      console.debug(`formData: ${JSON.stringify(formData)}`); // Remove when implemented successfully

      const options = {
        url: this.modelURL,
        headers: {
          "Content-Type": "image/jpeg",
          "Content-Length": Buffer.byteLength(this.imageURL)
        }
      };
      console.debug(`options: ${JSON.stringify(options)}`); // Remove when implemented successfully

      request.post(options, formData, (error, res, body) => {
        console.debug(`res: ${res}`); // Remove when implemented successfully
        if (error) {
          reject(`Model returned error on call ${error}`);
        }
        resolve({
          body: JSON.stringify({
            message: "Processed successfully"
          })
        });
      });
    });
  }
}

module.exports = Model;
