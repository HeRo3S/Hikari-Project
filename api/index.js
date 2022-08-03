const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

app.use(express.json());
dotenv.config();

const authRoute = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// app.use("/", (req, res) => {
//   console.log("hey this is main url");
// });

app.use("/api/auth", authRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
