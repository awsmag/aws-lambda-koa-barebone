const {createServer, proxy} = require("aws-serverless-express");

const app = require("./app");

const server = createServer(app.callback());

exports.handler = (event, context) => proxy(server, event, context);
