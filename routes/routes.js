const express = require('express');
const checkAuth = require('../utils/check-auth')
const router = express.Router();

router.post('/test', checkAuth, (request, response) => {
    response.status(200).json({
        message: 'post to the /test path !'
    });
});

router.get('/test', (request, response) => {
    response.status(200).json({
        message: 'got the /test message !'
    });
});

router.get('/test/:taskId', checkAuth, (request, response) => {
    const id = request.params.taskId; //Get the parameter passed
    response.status(200).json({
        message: `Task with ID = ${id} was fetched`
    });
});

router.patch('/test/:taskId', checkAuth, (request, response) => {
    const id = request.params.taskId; //Get the parameter passed
    response.status(200).json({
        message: `Task with ID = ${id} was updated`
    });
});

router.delete('/test/:taskId', checkAuth, (request, response) => {
    const id = request.params.taskId; //Get the parameter passed
    response.status(200).json({
        message: `Task with ID = ${id} was deleted`
    });
});
   

module.exports = router;