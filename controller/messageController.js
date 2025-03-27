const messages = require("../db");

const getSingleMessage = (req, res) => {
    const { index } = req.params;

    res.render("singleMessageView", { message: messages[index] });
}

module.exports = getSingleMessage;