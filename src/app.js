import Common from './api/helpers/Common';
import Logger from './api/helpers/Logger';
import {checkUser} from 'controllers/auth';

const app = require('express')();


app.get('/helloWorld', checkUser);

const host = Common.settings().get('host');
const port = Common.settings().get('port');


app.listen(port, function () {
	Logger.info(`Api running http://${host}:${port}`);
});


