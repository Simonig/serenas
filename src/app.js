import Common from './api/helpers/Common';
import Logger from './api/helpers/Logger';
import path from 'path';
import {postForm } from './api/controllers/form';

const app = require('express')();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/templates'));


app.get('/', (req, res) => {
	res.render('index')
});



app.post('/submitForm', postForm);

const host = Common.settings().get('host');
const port = Common.settings().get('port');


app.listen(port, function () {
	Logger.info(`Api running http://${host}:${port}`);
});


