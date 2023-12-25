const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRouter = require('./routes/blog_routes');
const config = require('./config/config');
const { errorHandler, errorConverter } = require('./middlewares/error');


mongoose
  .connect(config.dbConnection)
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(blogRouter); // Router level middleware
app.use(errorConverter);
app.use(errorHandler); // Error handler level middleware


app.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});
