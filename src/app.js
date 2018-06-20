import path from 'path';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import { settings } from './api/helpers/Common';
import Logger from './api/helpers/Logger';

import { postForm } from './api/controllers/form';
import GenerateSignature from './api/helpers/GenerateSignature';

// Mongodb Connection
//mongoose.connect(settings.get('dbUrl'));
//mongoose.Promise = global.Promise;


// Express routes and middleware
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submitForm', postForm);

app.use(express.static(path.resolve(__dirname, '..', 'form', 'build')));

app.all('/', (req, res) => {
  if (req.method === 'POST') {
    const customer = `${req.body.x_customer_first_name} ${req.body.x_customer_last_name}`;

    res.cookie('serenas_total', req.body.x_amount);
    res.cookie('serenas_customer', customer);
    res.cookie('serenas_currency', req.body.x_currency);
    res.cookie('serenas_order', req.body.x_invoice);

    const total = req.body.x_cart_total_price;
    const currency = req.body.x_currency;

    const url = req.body.x_url_callback;

    /*
    const obj = {
      x_gateway_reference: req.body.x_reference,
      x_result: 'In-Progress',
    };
    */

    const obj = {
      x_gateway_reference: req.body.x_reference,
      x_result: 'Completed',
      x_amount: total,
      x_currency: currency,
    };

    const secret = settings.get('versaSecret');
    console.log('\n\n\n');
    console.log('Object to Sign =>', obj);
    console.log('Secret =>', secret);
    console.log('\n\n');
    const signature = GenerateSignature(obj, secret);

    console.log('Generated Signature =>', signature);
    console.log('\n\n');
    obj.x_signature = signature;

    console.log('Final Object =>', obj);
    console.log('\n\n\n');

    let queryParams = Object.entries(obj).sort().reduce((str, [k, v]) => `${str}&${k}=${v}`, '');
    queryParams = queryParams.slice(1, queryParams.length);


    console.log('Callback URL =>', url);
    console.log('Query Params =>', queryParams);
    console.log('Final URL =>', `${url}?${queryParams}`);
  }

  res.sendFile(path.join(__dirname, '..', 'form', 'build', 'index.html'));
});


// Express serve
const host = settings.get('host');
const port = settings.get('port');
app.listen(port, () => {
  Logger.info(`Api running http://${host}:${port}`);
});

