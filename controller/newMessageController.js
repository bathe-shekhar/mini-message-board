const messages = require("../db");


module.exports = {

    getForm: (req, res) => {
        res.render("new");
    },


    postMessage: (req, res) => {
        const { messageText, userName } = req.body;
        messages.push({ text: messageText, user: userName, added: new Date() });
        res.redirect("/");
    }

}

