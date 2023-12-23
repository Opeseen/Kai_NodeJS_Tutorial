const express = require('express');
const mongoose = require('mongoose');
const app = express();
const blogRouter = require('./routes/blog_routes');
const config = require('./config/config')


mongoose
  .connect(config.dbConnection)
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(blogRouter)


app.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});
