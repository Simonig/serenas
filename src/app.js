import path from 'path';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import { settings } from './api/helpers/Common';
import Logger from './api/helpers/Logger';

import { postForm } from './api/controllers/form';

// Mongodb Connection
mongoose.connect(settings.get('dbUrl'));
mongoose.Promise = global.Promise;


// Express routes and middleware
const app = express();

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
  if (req.method !== 'POST') {
    next();
  } else {
    req.method = 'GET';
    next();
  }
});
app.use(express.static(path.resolve(__dirname, '..', 'form', 'build')));


app.post('/submitForm', postForm);


// Express serve
const host = settings.get('host');
const port = settings.get('port');
app.listen(port, () => {
  Logger.info(`Api running http://${host}:${port}`);
});

