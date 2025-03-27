const messages = require("../db");

const getMessages = (req, res) => {
    res.render("index", { messages: messages });
}

module.exports = getMessages;