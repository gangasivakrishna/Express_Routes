const fs = require('fs');
const cpath = require('path');
const mm = require('micromatch')
const _app = [];
let slug = '';

// Print all routes
function printRoutes(routerObj) {
    console.log(`[${routerObj.method}] ${routerObj.route}\n`)
}

// creating app routes
function createAppRoutes(routerObj) {
    var app = _app[0];
    app[routerObj.method](routerObj.route, routerObj.action)
    printRoutes(routerObj)

}

//generating router object
function browseController(options, curFilePath) {
    const routes= require(curFilePath)
    let routerObj = {};
    Object.keys(routes).forEach(key => {
        routerObj.route = "/" + options.preURL + "/" + slug + key;
        Object.keys(routes[key]).forEach(key1 => {
            routerObj.method = key1;
            routerObj.action = routes[key][key1].action;
            createAppRoutes(routerObj)

        });

    })
}

//Browse controller directory and get routing file
function browseDirectory(options, ctrlFilepath) {
    fs.readdirSync(ctrlFilepath)
        .forEach((file) => {
            const curFilePath = cpath.join(ctrlFilepath, file);
            const stat = fs.statSync(curFilePath);
            if (stat.isDirectory()) {
                slug = file;
                console.log("___________________________");
                console.log(file)
                console.log("___________________________");
                return browseDirectory(options, curFilePath)
            }
            let ctrlFileName = file.substring(0, file.length - 3);
            if (mm.isMatch(ctrlFileName, '*.routing')) {
                browseController(options, curFilePath)
            }
        });

}

module.exports.load = (app, options = {}) => {
    if (!app) {
        throw new Error('Expected an express app as first argument');
    }
    _app.push(app)
    console.log("*********ROUTES*********\n")
    browseDirectory(options, options.controllers_path)
    console.log("\n")
}
