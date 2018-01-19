import Logger from 'helpers/Logger'
import Common from 'helpers/Common'


/**
 * @constructor
 *
 * @param  {type} authModel description
 * @return {type}           description
 */
function authService(authModel) {

	/**
	 * authService - description
	 *
	 * @param  {type} body description
	 * @return {type}      description
	 */
	authService.checkUser = async function (body) {
		Logger.debug('Login AuthService: ' + JSON.stringify(body));

		return  await authModel.checkUser();
	};

	return authService;
}

module.exports = authService;
