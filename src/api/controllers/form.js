import Logger from '../helpers/Logger';
import Common from 'helpers/Common';
import AuxmoneyService from '../services/auxmoney'

/**
 * module - description
 *
 * @param  {json} req description
 * @param  {json} res description
 * @return {http}     description
 */

export async function postForm (req, res) {

	try {
		const data = req.body.data;
		const response = await AuxmoneyService.postForm(data);
		res.status(200);
		res.json(response);
	} catch (err) {
		return Common.handleError(res, err, __filename);
	}

};

