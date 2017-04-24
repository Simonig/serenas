var Q = require('q');
var curl = require('curlrequest');
var Logger = require('helpers/Logger');
var Common = require('helpers/Common');


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
    authModel.checkUser = function (body) {
        var deferred = Q.defer();

        return deferred.promise;
    };

    /**
     * authModel - description
     *
     * @param  {type} body description
     * @return {type}      description
     */
    authModel.changePwd = function (body) {
        var deferred = Q.defer();

        return deferred.promise;
    };

}
module.exports = authModel;
