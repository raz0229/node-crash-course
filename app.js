const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./Routes/router');
const app = express();

//connect to mongodb
const dbURI = '';
mongoose.connect(dbURI, {useUnifiedTopology: true, useNewUrlParser: true})
.then((result) => { console.log('DB CONNECTED'); app.listen(3000);}) //listen when db is connected
.catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

app.use(express.static('public')); //makes 'public' folder public to display image in index.ejs
app.use(express.urlencoded({extended: true}));

app.use(blogRoutes);
app.use(morgan('dev'));

app.get('/', (req, res) => {          //creates a variable to be used in index.ejs
    res.status(200).render('index.ejs', {whateverTitle: 'Home'})
});

app.get('/about', (req, res) => {
  res.status(200).render('about.ejs',{whateverTitle: 'About'});
});

//redirecting to /about page
app.get('/about-me', (req, res) => {
  res.status(301).redirect('/about');
});

//default response
app.use((req, res) => {
  res.status(404).render('404.ejs',{whateverTitle: '404'});
});
