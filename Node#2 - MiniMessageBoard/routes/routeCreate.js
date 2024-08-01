
const { Router } = require("express");
const createControl = require('../controller/controllerCreate');

const createRouter = Router();

createRouter.get("/", createControl.viewPost);
createRouter.post("/", createControl.createPost);

module.exports = createRouter;