const request = require("request");

/**
 * uploadFile
 * @param {string} file  file
 * @return {Object}      data from model
 */
const uploadFile = file => {
  return new Promise((resolve, reject) => {
    const options = {
      url: "http://159.203.95.88/api/classify",
      formData: {
        file: file
      }
    };
    console.debug(`options: ${JSON.stringify(options)}`); // Remove when implemented successfully
    request.post(options, (error, res, body) => {
      console.debug(`statusCode: ${JSON.stringify(res.statusCode)}`); // Remove when implemented successfully

      if (error) {
        reject(`API returned error on call ${error}`);
      }
      console.debug(`body: ${JSON.stringify(body)}`); // Remove when implemented successfully
      resolve({
        body
      });
    });
  });
};

module.exports = uploadFile;
