const express = require('express')
const path = require('path');
const Avis = require('../Avis/index');
const app = express();
console.log(__dirname)
app.use(function (req, res, next) {
	console.log(req.rawHeaders[1]+req.url+"\n")
	next();
})

Avis.create(app,{
	preURL: 'api',
	ignore: ['*.test', '*.action'],
	controllers_path: path.join(__dirname, 'controllers')
});

const port = 3000

app.load(port, () => console.log(`Example app listening on port ${port}!\n`))


module.exports = app;