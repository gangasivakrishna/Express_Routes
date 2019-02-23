const { getOne, getAll, middlewares, postAction } = require('./student.action');

module.exports = {
    '/': {
        post: {
            middlewares: middlewares,
            action: postAction,
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
