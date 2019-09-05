const express = require('express');
const checkAuth = require('../utils/check-auth')
const notFound = require('../utils/not-found')
const router = express.Router();

let db = {};
let sequence = 0;

// POST route - responsible to add the delivery object
router.post('/', checkAuth, (request, response) => {
    if(request.body.orderId === undefined || //Check for missing fields in body
        request.body.clientId === undefined ||
        request.body.receiver === undefined ||
        request.body.receiverCpf === undefined ||
        request.body.receiverIsclient === undefined ||
        request.body.location === undefined){
            response.status(400).json({
                message: "Missing fields in the request. Refer to the docs and try again",
                docs: "Go to'./docs' for further help"
            })
            return response.end()
    }

    const delivery = { //Creates the delivery object
        id: ++sequence,
        orderId: request.body.orderId,
        clientId: request.body.clientId,
        receiver: request.body.receiver,
        receiverCpf: request.body.receiverCpf,
        receiverIsclient: request.body.receiverIsclient || false,
        date: new Date().toISOString(),
        location: request.body.location
    }
    
    db[delivery.id] = delivery; //Store it in an array
    
    response.status(201).json(delivery);
});

// POST route - responsible to fetch all the delivery objects
router.get('/', checkAuth, (request, response) => {
    const toArray = key => db[key];
    const deliveries = Object.keys(db).map(toArray);
    deliveries && deliveries.length //Check if there are deliveries
        ? response.json(deliveries)
        : response.status(204).end();
});

// POST route - responsible to fetch a delivery object that matches with passed id
router.get('/:deliveryId', checkAuth, (request, response) => {
    const delivery = db[request.params.deliveryId];
    delivery //Check if the required delivery exists
        ? response.json(delivery)
        : notFound(request, response);
});

// PATCH route - responsible to update a delivery object that matches with passed id
router.patch('/:deliveryId', checkAuth, (request, response) => {
    const delivery = db[request.params.deliveryId];
    const hasValue = request.body.receiverIsclient != null
    if(delivery) { //Check if the required delivery exists
        delivery.orderId = request.body.orderId || delivery.orderId
        delivery.clientId = request.body.clientId || delivery.clientId
        delivery.receiver = request.body.receiver || delivery.receiver
        delivery.receiverCpf= request.body.receiverCpf || delivery.receiverCpf
        delivery.receiverIsclient = hasValue ? request.body.receiverIsclient : delivery.receiverIsclient
        delivery.location = request.body.location || delivery.location
        response.json(delivery)
    } else {
        notFound(request, response);
    }
});

// DELETE route - responsible to delete a delivery object that matches with passed id
router.delete('/:deliveryId', checkAuth, (request, response) => {
    const delivery = db[request.params.deliveryId];
  if(delivery) { //Check if the required delivery exists
    delete db[delivery.id];
    response.status(200).json({
        message: "The delivery was deleted successfully"
    })
  } else {
    notFound(request, response);
  }
});
   

module.exports = router;