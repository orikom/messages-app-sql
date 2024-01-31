const express = require('express');
// require('dotenv').config({path: './config/.env'});

const app = express();

const messagesRouter = require('./routers/messagesRouter');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(messagesRouter);

const port = process.env.PORT;

const sequelize = require('./db/sequelize');
sequelize.sync()
  .then(()=> app.listen(port, () => console.log(`listening on port ${port}...!`)))
  .catch(err => console.log(err));