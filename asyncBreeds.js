// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) callback(data);
    else callback(undefined);
  });
};

// we try to get the return value

// => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;
