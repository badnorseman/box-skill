const request = require("request");

const readFile = url => {
  return request.get(url, (error, res, body) => {
    if (error) {
      throw error;
    }
    return body;
  });
};

module.exports = readFile;
