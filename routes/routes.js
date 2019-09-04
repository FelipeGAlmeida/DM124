const express = require('express');
const checkAuth = require('../utils/check-auth')
const router = express.Router();

let db = {};
let sequence = 0;

router.post('/', checkAuth, (request, response) => {
    if(request.body.orderId === undefined ||
        request.body.clientId === undefined ||
        request.body.receiver === undefined ||
        request.body.receiverCpf === undefined ||
        request.body.receiverIsclient === undefined ||
        request.body.location === undefined){
            response.status(400).json({
                message: "Missing fields in the request. Refer to the docs and try again"
            })
            return response.end()
    }

    const delivery = {
        id: ++sequence,
        orderId: request.body.orderId,
        clientId: request.body.clientId,
        receiver: request.body.receiver,
        receiverCpf: request.body.receiverCpf,
        receiverIsclient: request.body.receiverIsclient || false,
        date: new Date().toISOString(),
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

router.get('/:deliveryId', checkAuth, (request, response) => {
    const delivery = db[request.params.deliveryId];
    delivery
        ? response.json(delivery)
        : notFound(request, response);
});

router.patch('/:deliveryId', checkAuth, (request, response) => {
    const delivery = db[request.params.deliveryId];
    const hasValue = request.body.receiverIsclient != null
    if(delivery) {
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

router.delete('/:deliveryId', checkAuth, (request, response) => {
    const delivery = db[request.params.deliveryId];
  if(delivery) {
    delete db[delivery.id];
    response.status(200).end();
  } else {
    notFound(request, response);
  }
});
   

module.exports = router;