const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');

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

blogSchema.plugin(toJson);
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;