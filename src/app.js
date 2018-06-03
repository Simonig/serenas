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

app.post('/submitForm', postForm);

app.use(express.static(path.resolve(__dirname, '..', 'form', 'build')));

app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'form', 'build', 'index.html'));
});


// Express serve
const host = settings.get('host');
const port = settings.get('port');
app.listen(port, () => {
  Logger.info(`Api running http://${host}:${port}`);
});

