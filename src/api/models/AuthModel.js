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


	return authModel

}
module.exports = authModel;
