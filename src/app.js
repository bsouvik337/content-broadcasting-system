const express = require("express");
const app = express();

const liveRoutes = require("./routes/liveRoutes");

app.use("/content", liveRoutes);


app.get("/", (req, res) => {
  res.send("API Running...");
});

module.exports = app;