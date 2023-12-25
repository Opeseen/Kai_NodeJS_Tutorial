const express = require('express');
const app = express();
const blogRouter = require('./routes/blog_routes');
const authRouter = require('./routes/auth_routes');
const { errorHandler, errorConverter, pathNotFoundErrorHandler } = require('./middlewares/error');
const {successLogHandler, errorLogHandler} = require('./config/morgan');

app.use(successLogHandler);
app.use(errorLogHandler);
app.use(express.json());
app.use(blogRouter); // Router level middleware for Blog
app.use(authRouter); // Router level middleware for User
app.use(pathNotFoundErrorHandler); // Handler when path is not found
app.use(errorConverter);
app.use(errorHandler); // Error handler level middleware

module.exports = app;