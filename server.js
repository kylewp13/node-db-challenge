const express = require('express');
const projectRouter = require("./projects/project-router.js");
const resourceRouter = require("./resources/resource-router.js");

const server = express();

server.use(express.json())

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use(doesNotExist);

function doesNotExist (req, res) {
    res.send('<h1>Path does not exist.</h1><p>Please refer to documentation.</p><img src="https://picsum.photos/800/500" />');
}
module.exports = server;