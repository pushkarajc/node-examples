const fs = require('fs');
fs.writeFile('target.txt', 'This is Captain Picard of the Federation Starship Enterprise!', function(err){
	if(err){
		throw err;
	}
	console.log('Welcome to Node, Captain Picard!');
});
