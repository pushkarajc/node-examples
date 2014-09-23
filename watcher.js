const
fs = require('fs');
fs.watch('target.txt', function() {
	console.log("File 'target.txt' has just changed!");
});
console.log("Now watching target.txt for changes...");

// To run:
// Create a file named 'target.txt', if it doesn't exist, in the same place as
// this file.
// node --harmony watcher.js target.txt
