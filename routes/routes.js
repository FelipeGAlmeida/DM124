const express = require('express');
const router = express.Router();

router.get('/test', (request, response) => {
 response.status(200).json({
   message: 'got the /test message !'
 });
});

module.exports = router;