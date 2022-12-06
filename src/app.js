const express = require('express');
const UserRouter = require('./routes/user.route');

// ...

const app = express();

app.use(express.json());
app.use('', UserRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
