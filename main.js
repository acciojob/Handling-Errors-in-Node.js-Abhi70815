const fs = require('fs');

function printFileContents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
      console.log(`Error: ${err.message}`);
    }
    else{
      console.log(data);
    }
  });
}

let filePath = process.argv[2]; // Get the file path from command-line arguments
console.log(filePath)
printFileContents(filePath);