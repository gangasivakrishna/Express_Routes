const { create, getOne, getAll } = require('./user.action');

module.exports = {
    '/': {
        post: {
            action: create,
        },
        get: {
            action: getAll,
        }
    },
    '/:id': {
        get: {
            action: getOne,
        }
    }
};
