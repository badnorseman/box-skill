const fs = require("fs");

const readLocalFile = filename => {
  return fs.createReadStream(__dirname + "/images/" + filename);
};

module.exports = readLocalFile;
