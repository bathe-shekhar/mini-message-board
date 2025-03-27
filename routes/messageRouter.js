const express = require("express");
const getSingleMessage = require("../controller/messageController");

const messageRouter = express.Router();

messageRouter.get("/:index", getSingleMessage);

module.exports = messageRouter;