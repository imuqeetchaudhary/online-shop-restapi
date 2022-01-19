const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const allRoutes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", allRoutes);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan enable...");
}

app.get("/", (req, res) => res.json({ message: "Online Shop RESTful API" }));

module.exports = { app };
