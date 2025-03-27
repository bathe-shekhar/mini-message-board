const express = require("express");
const path = require("node:path");
const newMessageRouter = require("./routes/newRoute");
const homeRouter = require("./routes/homeRouter");
const messageRouter = require("./routes/messageRouter");


const port = 8080;

const app = express();

const assetPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/new", newMessageRouter);
app.use("/message", messageRouter)

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});