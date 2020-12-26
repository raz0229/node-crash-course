const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res) => {
  console.log(req.url, req.method);

  //lodash function to load fucnction only once

const once = _.once(() => {
  console.log('Lodash run test once() function');
});
once(); //this is gonna work
once(); //this is not gonna work

  res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
      case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
      case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
        case '/about-me':
          res.setHeader('Location', '/about') //redirecting user to about page
          res.statusCode = 301;
          res.end();
          break;
      default:
        path += '404.html';
        res.statusCode = 404;
        break;
    }

  fs.readFile(path, (err, dat) => {
    if (err) {
      console.log(err);
      res.end();
    }
    else {
      res.write(dat);
      res.end();
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Listening to server on port 3000');
});
