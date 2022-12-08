const express = require('express');
const UserRouter = require('./routes/user.route');
const CategoryRouter = require('./routes/category.route');
const PostRouter = require('./routes/post.route');

// ...

const app = express();

app.use(express.json());
app.use('', UserRouter);
app.use('', CategoryRouter);
app.use('', PostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
