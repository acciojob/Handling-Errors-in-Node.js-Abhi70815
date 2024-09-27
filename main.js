const fs = require('fs');

function printFileContents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
      console.log(`Error: Unable to read file at ${filePath}. Error message: ${err.message}`);
    }
    else{
      console.log(data);
    }
  });
}

let filePath = process.argv[2]; // Get the file path from command-line arguments

if(filePath) {
  printFileContents(filePath);
} else {
  console.log('Please provide a valid file path as a command-line argument.');
}