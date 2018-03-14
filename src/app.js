import Common from './api/helpers/Common';
import Logger from './api/helpers/Logger';
import path from 'path';
import mongoose from 'mongoose';
import express from 'express'

import {postForm } from './api/controllers/form';

mongoose.connect(Common.settings().get('db_url'));
mongoose.Promise = global.Promise;

const app = require('express')();


app.use(express.static(path.resolve(__dirname, '..', 'form', 'build')));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'form', 'build'), 'index.html');
});



app.post('/submitForm', postForm);

const host = Common.settings().get('host');
const port = Common.settings().get('port');


app.listen(port, function () {
	Logger.info(`Api running http://${host}:${port}`);
});


