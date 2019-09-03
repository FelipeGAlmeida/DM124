const http = require('http')
const express = require('express');
const routes = require('./routes/routes.js')
const app = express();

const host = 'localhost';
const port = 8080;

//Setup CORS policy
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();
});

//Setup the routes file
app.use('/api', routes);

//Start the server
http.createServer(app)
    .listen(port, function() {
        console.log(`Server up on http://${host}:${port}`);
});
