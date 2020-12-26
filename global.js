const fs = require('fs');

if(!fs.existsSync('./test.txt')) {
  fs.writeFile('./test.txt', 'Node JS writeFile test', (err) => {
    if(err) console.log('Something went wrong');
  });
}
else {
  console.log('File already exists');
  fs.unlink('./test.txt', () => {
    console.log('File deleted');
});
}
