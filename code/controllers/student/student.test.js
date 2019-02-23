const test = require('ava');
const request = require('supertest');
const app = require('../../app');

test('[POST] /user should pass', async (t) => {
    const { body, status } = await request(app)
    .post('/api/student')
    .send({})
    .set('Accept','application/json');

    t.is(body.msg, 'Your entry have been created');
    t.is(status,200);

});

test('[GET] /user should pass', async (t) =>{
    const { body, status } = await request(app)
    .get('/api/student');

    t.is(body.length, 2);
    t.is(status,200);
});


test('[GET] /user/:id should pass', async (t) =>{
    const { body, status } = await request(app)
    .get('/api/student/:id');

    t.is(body.name,'siva');
    t.is(body.age,'20')
    t.is(status,200);
})