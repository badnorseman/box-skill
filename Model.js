"use strict";
const fs = require("fs");
const request = require("request");

class Model {
  constructor() {
    this.modelURL = process.env.MODEL_URL || "http://159.203.95.88/api/";
  }

  /**
   * testUpload
   * @param {string} fileURL  url to file
   * @return {Object}         data from model
   */
  testUpload(fileURL) {
    return new Promise((resolve, reject) => {
      const options = {
        url: this.modelURL + "test_upload",
        formData: {
          file: request(fileURL)
        }
      };

      request.post(options, (error, res, body) => {
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
   * uploadFile
   * @param {string} fileURL  url to file
   * @return {Object}         data from model
   */
  uploadFile(fileURL) {
    return new Promise((resolve, reject) => {
      const options = {
        url: this.modelURL + "classify",
        formData: {
          file: request(fileURL)
        }
      };

      request.post(options, (error, res, body) => {
        console.debug(`statusCode: ${JSON.stringify(res.statusCode)}`); // Remove when implemented successfully
        console.debug(`error: ${JSON.stringify(error)}`); // Remove when implemented successfully
        console.debug(`body: ${JSON.stringify(body)}`); // Remove when implemented successfully

        if (error) {
          reject(`Model returned error on call ${error}`);
        }
        resolve({
          body
        });
      });
    });
  }
}

module.exports = Model;
