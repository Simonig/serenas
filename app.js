var cors = require('cors');
var Promise = require('bluebird');
var Common = require('helpers/Common');
var Logger = require('helpers/Logger');
var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = require('express')();

var config = {
    appRoot: __dirname // required config
};

var host = Common.settings().get('swagger.host');
var port = Common.settings().get('swagger.port');
Logger.info('Swagger connection http://' + host + ':' + port);


SwaggerExpress.create(config, function(err, swaggerExpress) {
    return new Promise(function(resolve, reject) {
        if (err) {
            Logger.error('Error al iniciar Swagger: ' + err);
            reject(err);
        } else {
            app.use(cors());

            swaggerExpress.runner.swagger.host = host + ':' + port;

            app.use(SwaggerUi(swaggerExpress.runner.swagger));

            // install middleware
            swaggerExpress.register(app);

            app.listen(port, function() {
                Logger.info('Swagger Api iniciada correctamente');
            });

            resolve(app);
        }
    });
});
