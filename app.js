const http = require('http')
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js')
const not_found = require('./utils/not-found')
const app = express();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

//Setup CORS policy
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();
});

//Setup body-parser to access req. body
app.use(bodyParser.json());

//Setup the routes file
app.use('/api/deliveries', routes);

//Setup default route for not found requests
app.use(not_found);

//Start the server
http.createServer(app)
    .listen(port, function() {
        console.log(`Server up on http://${host}:${port}`);
});
