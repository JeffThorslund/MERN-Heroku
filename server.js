const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Connect to Mongo
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/api/test", (req, res) => {
  res.send("This is a response from the server.");
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);
