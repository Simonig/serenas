const models = require('models/models')();

const AuthService = require('service/AuthService');


/**
 * @constructor
 * @return {json} clases de servicio
 */
function Services() {
	const services = {};
	console.log(models);

	services.authService = new AuthService(models.authModel);


	return services;
}
module.exports = Services;
