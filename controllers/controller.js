const Blog = require('../models/blog.js');

const postBlog = ((req, res) => {
  const blog = new Blog(req.body);
  blog.save().then((result) => {
    res.redirect('/blogs');
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
});

const getBlog = ((req, res) => {
  Blog.find().then((result) => {
      res.render('blogs', {whateverTitle: 'All Blogs', para: result})
  })
  .catch((err) => console.log(err))

});

const createBlog = ((req, res) => {
  res.render('create.ejs', {whateverTitle: 'Create Blog'});
});

module.exports = {postBlog, getBlog, createBlog};
