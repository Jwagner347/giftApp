const fs = require('fs');

module.exports = (dataSource) => {
  const dataStoreFile = fs.readFileSync(dataSource);
  const parsedDataStoreFile = JSON.parse(dataStoreFile);
  return parsedDataStoreFile;
};
