import curl from 'curlrequest';
import Logger from 'helpers/Logger';
import Common from 'helpers/Common';
// @flow

/**
 * @constructor
 * @return {type}  description
 */
function authModel() {


	/**
	 * authModel - descriptions
	 *
	 * @param  {type} body description
	 * @return {type}      description
	 */
	authModel.checkUser = async function (body:object): Promise<string> {
		return "hello world"
	};

	/**
	 * authModel - description
	 *
	 * @param  {type} body description
	 * @return {type}      description
	 */
	authModel.changePwd = async function (body:object) {
		return
	};

	return authModel

}
module.exports = authModel;
