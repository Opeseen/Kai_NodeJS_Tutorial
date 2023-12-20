const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect('mongodb://127.0.0.1:27017/blogs')
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

const blogSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },

  description:{
    type: String,
    required: true,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

app.use(express.json());

app.get('/blog', async (req, res) => {
  const blogs = await Blog.find({});
  res.send({blogs});
});

app.post('/blog', async (req, res) => {
  // create blog
  await Blog.create(req.body)
  res.send({success: true, message: 'blog created'});
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});