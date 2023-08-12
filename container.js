const { createContainer, asFunction } = require("awilix");
const corsMiddleware = require("./middlewares/cors");
const jsonResponseMiddleware = require("./middlewares/jsonResponse");

const container = createContainer();

container.register({
  corsMiddleware: asFunction(() => corsMiddleware),
  jsonResponseMiddleware: asFunction(() => jsonResponseMiddleware),
});

module.exports = container;
