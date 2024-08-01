const { Router } = require("express");
const homeController = require("../controller/controllerHome");

const homeRouter = Router();

homeRouter.get("/", homeController.getMessages);
homeRouter.get("/view/:index", homeController.viewMessages);

module.exports = homeRouter;