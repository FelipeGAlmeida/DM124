const checkAuth = (request, response, next) => {
 const token = request.headers.authorization;
 if (/YWRtaW46cHJvdmVkb3IyMDE5/.test(token)) { //Auth -> admin:provedor2019
   next();
 } else {
   response.status(401).json({
     message: 'Not authorized'
   });
 }
};

module.exports = checkAuth;
