var path = require('path');
var fs = require('fs');



function writeIt(input){
	fs.writeFile("./save.json", JSON.stringify(input), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
})
}

module.exports = writeIt