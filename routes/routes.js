const express = require('express');
const checkAuth = require('../utils/check-auth')
const router = express.Router();

let db = {};
let sequence = 0;

router.post('/', checkAuth, (request, response) => {
    const delivery = {
        id: ++sequence,
        orderId: request.body.orderId,
        clientId: request.body.clientId,
        receiver: request.body.receiver,
        receiverCpf: request.body.receiverCpf,
        receiverIsclient: request.body.receiverIsclient || false,
        date: request.body.date,
        location: request.body.location
    }
    
    db[delivery.id] = delivery;
    
    response.status(201).json(delivery);
    });

router.get('/', checkAuth, (request, response) => {
    const toArray = key => db[key];
    const deliveries = Object.keys(db).map(toArray);
    deliveries && deliveries.length
        ? response.json(deliveries)
        : response.status(204).end();
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