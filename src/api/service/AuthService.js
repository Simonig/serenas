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
		console.log(authModel);


		const result = await authModel.checkUser();

		return result
	}
	/**
	 * authService - description
	 *
	 * @param  {type} body description
	 * @return {type}      description
	 */
	authService.changePwd = function (body) {
		Logger.debug('Login AuthService: ' + JSON.stringify(body));



	};

	return authService;
}

module.exports = authService;
