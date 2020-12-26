const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Express server up and running');
});

app.get('/', (req, res) => {
  res.status(200).sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
  res.status(200).sendFile('./views/about.html', {root: __dirname});
});

//redirecting to /about page
app.get('/about-me', (req, res) => {
  res.status(301).redirect('/about');
});

//default response
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', {root: __dirname});
});
