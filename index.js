var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, file) {
    if (err) throw err;
    var files = file.join(', ');
    fs.writeFile('info.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano'.green);
    });
});