import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getRouter } from './routes/routes';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();



//mysql db connection
createConnection()
  .then(async (connection) => {
    console.log('Connected to database.');

    app.use(cors());
    app.use(bodyParser.json());
    app.use('/api', getRouter());

    //set port, listen for requests
    app.listen(port, () => {
      console.log('Server is running on port ' + port);
    });

  })
  .catch((error) => console.log('Database connection failed:' + error));
