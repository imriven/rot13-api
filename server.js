const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const server = express();
const rotRouter = require("./rot13Router.js");
const catFactsRouter = require("./catFactsRouter.js");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/api/rot13", rotRouter);
// server.use("/api/catFacts", catFactsRouter);

module.exports = server;
