
const { Router } = require("express");
const itemControl = require('../controller/itemController');

const itemRouter = Router();

itemRouter.get("/", itemControl.viewAllItem);
itemRouter.get("/:index", itemControl.viewSingleItem);
itemRouter.get("/items/createItem", itemControl.createItem);
itemRouter.post('/items/createItem', itemControl.postItem)

module.exports = itemRouter 