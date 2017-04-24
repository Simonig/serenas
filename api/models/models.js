var AuthModel = require('models/AuthModel');



/**
 * @constructor
 * @return {json} clases en models
 */
function Models() {
    var models = {};

    models.authModel = new AuthModel();


    return models;
}
module.exports = Models;
