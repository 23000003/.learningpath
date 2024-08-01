const categoryControl = require('../controller/categoryController')
const { Router } = require("express");

const categoryRouter = Router();

categoryRouter.get("/", categoryControl.viewAllCategory);
categoryRouter.get("/:cat_name", categoryControl.viewCategory);

module.exports = categoryRouter 
