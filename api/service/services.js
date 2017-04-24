var models = require('models/models')();

var AuthService = require('service/AuthService');



/**
 * @constructor
 * @return {json} clases de servicio
 */
function Services() {
    var services = {};

    services.authService = new AuthService(models.authModel);


    return services;
}
module.exports = Services;
