const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);

module.exports = app