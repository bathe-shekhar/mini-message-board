const express = require("express");
const { getForm, postMessage } = require("../controller/newMessageController");

const newMessageRouter = express.Router();

console.log("here........");


newMessageRouter.get("/", getForm);
newMessageRouter.post("/", postMessage);

module.exports = newMessageRouter;