const fs = require('fs');


function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  fs.readFile(filePath,(err, data)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(data.toString());
    }
  })
}
let filePath ='./output.txt';
printFileContents(filePath)
// TODO: Call printFileContents with the command-line argument
