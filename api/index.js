const express = require("express");
const app = express();

console.log("Yo");

app.listen("5000", () => {
  console.log("Backend is running.");
});
