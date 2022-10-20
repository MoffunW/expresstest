const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.set("port", 3000);

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
