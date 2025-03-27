
const express = require("express");
const getMessages = require("../controller/homeController");


const homeRouter = express.Router();


homeRouter.get("/", getMessages);


module.exports = homeRouter;