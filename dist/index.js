"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 8080; // default port to listen
// Set a view engine to serve static html files
app.set("view options", { layout: false });
app.use(express.static(__dirname + '/public'));
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.render("index.html");
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map