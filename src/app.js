const express = require('express');
const cors = require('cors');
const app = express();
// ==> Rotas da API:
const index = require('./rotas/index');
const usersRoute = require('./rotas/users.rotas');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(index);
 app.use('/api/', usersRoute);
module.exports = app;