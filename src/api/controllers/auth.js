import Logger from '../helpers/Logger';
import Common from 'helpers/Common';
const services = require('service/services')();


/**
 * module - description
 *
 * @param  {json} req description
 * @param  {json} res description
 * @return {http}     description
 */

module.exports.checkUser = async function (req, res) {

	try {
		const response = await services.authService.checkUser();
		res.status(200);
		res.json(response);
	} catch (err) {
		return Common.handleError(res, err, __filename);
	}

};

module.exports.changePwd = function (req, res) {
	services.authService.changePwd(req.body).then(
		function (response) {
			res.status(200);
			res.json(response);
		},
		function (err) {
			return Common.handleError(res, err, __filename);
		});
};
