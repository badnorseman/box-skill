const request = require("request");

class Api {
  constructor() {
    this.apiURL = process.env.API_URL || "http://165.227.214.162/api/";
  }

  /**
   * readFileAndtestUpload
   * @param {string} fileURL  url to file
   * @return {Object}
   */
  readFileAndtestUpload(fileURL) {
    return new Promise((resolve, reject) => {
      request
        .get(fileURL)
        .on("error", error => {
          reject(`API returned error on call ${error}`);
        })
        .on("response", res => {
          const options = {
            url: this.apiURL + "test_upload",
            formData: {
              file: res
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
    });
  }

  /**
   * readAndClassifyFile
   * @param {string} fileURL  url to file
   * @return {Object}
   */
  readAndClassifyFile(fileURL) {
    return new Promise((resolve, reject) => {
      request
        .get(fileURL)
        .on("error", error => {
          reject(`API returned error on call ${error}`);
        })
        .on("response", res => {
          const options = {
            url: this.apiURL + "classify/",
            formData: {
              file: res
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
    });
  }
}

module.exports = Api;
