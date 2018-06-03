import path from 'path';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import { settings } from './api/helpers/Common';
import Logger from './api/helpers/Logger';

import { postForm } from './api/controllers/form';
import GenerateSignature from './api/helpers/GenerateSignature';

// Mongodb Connection
mongoose.connect(settings.get('dbUrl'));
mongoose.Promise = global.Promise;


// Express routes and middleware
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submitForm', postForm);

app.use(express.static(path.resolve(__dirname, '..', 'form', 'build')));

app.all('/', (req, res) => {
  if (req.method === 'POST') {
    const url = req.body.x_url_callback;

    const obj = {
      x_gateway_reference: req.body.x_reference,
      x_result: 'In-Progress',
    };
    const secret = settings.get('versaSecret');
    Logger.info('Object to Sign =>', obj);
    Logger.info('Secret =>', secret);
    const signature = GenerateSignature(obj, secret);

    Logger.info('Generated Signature =>', signature);
    obj.x_signature = signature;

    Logger.info('Final Object =>', obj);

    let queryParams = Object.entries(obj).sort().reduce((str, [k, v]) => `${str}&${k}=${v}`, '');
    queryParams = queryParams.slice(1, queryParams.length);


    Logger.info('Callback URL =>', url);
    Logger.info('Query Params =>', queryParams);
    Logger.info('Final URL =>', `${url}?${queryParams}`);
  }

  res.sendFile(path.join(__dirname, '..', 'form', 'build', 'index.html'));
});


// Express serve
const host = settings.get('host');
const port = settings.get('port');
app.listen(port, () => {
  Logger.info(`Api running http://${host}:${port}`);
});

