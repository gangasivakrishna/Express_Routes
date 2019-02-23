const test = require('ava');
const expressApp = require('./index');

test('should fail without express app', (t) => {
    const error = t.throws(() => {
        expressApp.load();
    }, Error);

    t.is(error.message, 'Expected an express app as first argument')
});
