import {handleError} from '../helpers/Common';
import AuxmoneyService from '../services/auxmoney';
import {camelCaseKeysToUnderscore} from '../helpers/Transformations';
import {convertMomentToDate} from '../../../form/src/Utils/Transforms';
import Logger from "../helpers/Logger";

/**
 * module - description
 *
 * @param  {json} req description
 * @param  {json} res description
 * @return {http}     description
 */

// eslint-disable-next-line import/prefer-default-export
export async function postForm(req, res) {
  try {
    const data = req.body;
    const toSend = camelCaseKeysToUnderscore(data);
    const normalizedToSend = convertMomentToDate(toSend);
    Logger.info('Send Form');
    const response = await AuxmoneyService.postForm(normalizedToSend);
    res.status(200);

    Logger.info(response.data);

    return res.json(response.data);
  } catch (err) {
    Logger.error(err);
    return handleError(res, err, __filename);
  }
}

