const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
  })
  .then(console.log("Connect to MongoDB"))
  .catch((err) => console.log(err));

app.use("/", (req, res) => {
  console.log("hey this is main url");
});

app.listen("5000", () => {
  console.log("Backend is running.");
});
