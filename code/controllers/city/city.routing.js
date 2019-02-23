const { getOne, getAll } = require('./city.action')
module.exports = {
    '/' : {
        get : {
            action : getAll
        }
    },
    '/:id' : {
        get: {
            action: getOne
        }
    }
}