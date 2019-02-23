const test = require('ava');
const request = require('supertest');
const app = require('../../app');

test('[POST] /user should pass', async (t) => {
    const { body, status } = await request(app)
    .post('/api/user')
    .send({})
    .set('Accept','application/json');

    t.is(body.msg, 'The User have been created');
    t.is(status,200);

});

test('[GET] /user should pass', async (t) => {
    const { body, status } = await request(app)
    .get('/api/user');

    t.is(body.length,3);
    t.is(status,200);
});

test('[GET] /user/:id should pass', async (t) => {
    const { body, status } = await request(app)
    .get('/api/user/1');
    
    t.is(body.name, 'Avis');
    t.is(body.age,21);
    t.is(status,200);
} )