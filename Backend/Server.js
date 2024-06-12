const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({});
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is listening to the port ${process.env.PORT}`);
});
const userRoute = require("./route/userRoute");
mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Db not connected" + error);
  });
app.use("/api/user", userRoute);
