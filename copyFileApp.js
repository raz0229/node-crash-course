/*
@author: raz0229
package required: prompt-sync (npm i prompt-sync)
NodeJS application to copy files
Piping FileSystem readStream and writeStream
{ Example_Input:
    {SRC: /home/raz0229/Documents/somefile.jpg},
    {DEST: /home/raz0229/Pictures}
}
*/


const prompt = require('prompt-sync')();

function copyFile(SRC, DEST) {

const fs = require('fs');
  this.SRC = SRC; //source File
  this.DEST = DEST; //dest path

const getFileName = function getFileName(SRC) {
  const arr = SRC.split('/');
  return arr[arr.length - 1];
}

const readStream = fs.createReadStream(SRC)
  .on('error', () => console.log('\nSource File Not Found'));
const writeStream = fs.createWriteStream(DEST + '/' + getFileName(SRC))
  .on('error', () => console.log('\nNo Such Directory'));

readStream.pipe(writeStream);

}

copyFile(prompt('Source file> '), prompt('Destination path> '));
