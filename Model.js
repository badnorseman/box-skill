"use strict";
const FormData = require("form-data");
const fs = require("fs");
const request = require("request");

class Model {
  constructor() {
    this.modelURL =
      process.env.MODEL_URL || "http://138.197.66.204:5000/modelpost";
  }

  /**
   * Model.readFile
   * @param {string} fileURL  url to file
   * @return {Object}         data from model
   */
  readFile(fileURL) {
    return new Promise((resolve, reject) => {
      const file = __dirname + fileURL;
      const stream = fs.createReadStream(file);
      console.debug(`file: ${file}\nstream: ${JSON.stringify(stream)}`); // Remove when implemented successfully
      let data;
      stream.on("error", error => {
        reject(`Model returned error on call ${error}`);
      });
      stream.on("data", chunk => {
        data += chunk;
        // process.stdout.write(chunk);
      });
      stream.on("end", () => {
        console.debug(`length: ${data.length}`); // Remove when implemented successfully
        resolve({
          body: JSON.stringify({
            message: "Processed successfully"
          })
        });
      });
    });
  }

  /**
   * Model.testupload
   * @param {string} fileURL  url to file
   * @return {Object}         data from model
   */
  testupload(fileURL) {
    console.debug(`modelURL: ${this.modelURL}`); // Remove when implemented successfully

    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", request(fileURL));

      const options = {
        hostname: this.hostname,
        form: formData
      };
      console.debug(`options: ${JSON.stringify(options)}`); // Remove when implemented successfully

      request.post(options, (error, res, body) => {
        console.debug(`statusCode: ${JSON.stringify(res.statusCode)}`); // Remove when implemented successfully
        console.debug(`body: ${JSON.stringify(body)}`); // Remove when implemented successfully
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

  /**
   * Model.uploadfile
   * @param {string} fileURL  url to file
   * @return {Object}         data from model
   */
  uploadfile(fileURL) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", request(fileURL));

      const options = {
        uri: this.modelURL,
        form: formData
      };

      request.post(options, (error, res, body) => {
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
