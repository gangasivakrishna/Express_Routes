# Express_Routes
Make a robust node API

It is a lightweight module that allows you to set up a scalable controllers architecture for your nodejs project.

Avis goes through the files and folders inside your controllers directory to find what we call "routing definitions".
Each controllers are defined in files, which export their routing definitions ( example )

By default, we use the name of the file that exports the routing definition to name the route

/ > controllers > users > users.routing.js will create the endpoints /users/*
/ > controllers > students > student.routing.js will create the endpoints /student/*
## ⚙️ CONFIGURATION

```js

Avis.load(app,{
	preURL: 'api',
	ignore: ['*.test', '*.action'],
	controllers_path: path.join(__dirname, 'controllers')
});

```


## FILE STRUCTURE
```txt
project/
├── controllers/
│   ├── user/
│   │   ├── user.routing.js
│   │   ├── user.action.js
│   │   └── user.test.js
│   ├── student/
│   │   ├── student.routing.js
│   │   ├── student.test.js
|   |   ├── student-get.action.js
│   │   └── student-post.action.js
│   └── sample-ctrl.js
├── app.js
└── package.json
```
