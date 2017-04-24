var Q = require('q');
var Logger = require('helpers/Logger');
var Common = require('helpers/Common');


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
    authService.checkUser = function (body) {
        Logger.debug('Login AuthService: ' + JSON.stringify(body));

        var deferred = Q.defer();


        return deferred.promise;
    }
    /**
     * authService - description
     *
     * @param  {type} body description
     * @return {type}      description
     */
    authService.changePwd = function (body) {
        Logger.debug('Login AuthService: ' + JSON.stringify(body));

        var deferred = Q.defer();


        return deferred.promise;
    }

    return authService;
}
module.exports = authService;
