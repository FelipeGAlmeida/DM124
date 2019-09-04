const notFound = (request, response, next) => {
  response.status(404).json({
    message: `Route to ${request.method} ${request.url} not found`,
    docs: "Go to'./docs' for further help"
  });
}
   
module.exports = notFound;