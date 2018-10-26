let fs = require("fs");

let jokes = {};

jokes.allJokes = function() {
  let fileContents = fs.readFileSync(__dirname);
};
