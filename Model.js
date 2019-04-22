"use strict";
const FormData = require("form-data");
const fs = require("fs");
const request = require("request");

class Model {
  constructor() {
    this.modelURL =
      process.env.MODEL_URL || "http://159.203.95.88/api/test_upload";
  }

  /**
   * Model.testupload
   * @param {string} fileURL  url to file
   * @return {Object}         data from model
   */
  testupload(fileURL) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "POST",
        url: this.modelURL,
        formData: {
          file: fs.createReadStream(__dirname + fileURL)
        }
      };

      request(options, (error, res, body) => {
        if (error) {
          reject(`Model returned error on call ${error}`);
        }
        resolve({
          body
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
