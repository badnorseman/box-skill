const fs = require("fs");
const request = require("request");

class Api {
  constructor() {
    this.url = process.env.API || "http://159.203.95.88/api/";
  }

  /**
   * testUpload
   * @param {string} file  file
   * @return {Object}
   */
  testUpload(file) {
    return new Promise((resolve, reject) => {
      const options = {
        url: this.url + "test_upload",
        formData: {
          file: file
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
   * @param {string} file  file
   * @return {Object}
   */
  uploadFile(file) {
    return new Promise((resolve, reject) => {
      const options = {
        url: this.url + "classify",
        formData: {
          file: file
        }
      };
      request.post(options, (error, res, body) => {
        if (error) {
          reject(`API returned error on call ${error}`);
        }
        resolve({
          body
        });
      });
    });
  }

  readLocalFile(filename) {
    return fs.createReadStream(__dirname + "/images/" + filename);
  }

  readFile(url) {
    return request.get(url, (error, res, body) => {
      if (error) {
        throw error;
      }
      return body;
    });
  }
}

module.exports = Api;
