var Logger = require('helpers/Logger');
var Common = require('helpers/Common');
var services = require('service/services')();


/**
 * module - description
 *
 * @param  {json} req description
 * @param  {json} res description
 * @return {http}     description
 */
module.exports.checkUser = function(req, res) {
    services.authService.checkUser(req.body).then(
        function(response) {
            res.status(200);
            res.json(response);
        },
        function(err) {
            return Common.handleError(res, err, __filename);
        });
};

module.exports.changePwd = function(req, res) {
    services.authService.changePwd(req.body).then(
        function(response) {
            res.status(200);
            res.json(response);
        },
        function(err) {
            return Common.handleError(res, err, __filename);
        });
};
