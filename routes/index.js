// indexing route files
// https://stackoverflow.com/a/6064205

const fs = require('fs');
const path = require('path');

module.exports = function(app){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == 'index.js') return;
        var name = file.substr(0, file.indexOf('.'));
        require(path.join(__dirname, name))(app);
    });
}