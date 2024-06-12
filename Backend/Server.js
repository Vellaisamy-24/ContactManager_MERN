const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({});
const cors = require("cors");
const path = require("path");
const __dirname = path.resolve();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is listening to the port ${process.env.PORT}`);
});
const userRoute = require("./route/userRoute");
const dataRoute = require("./route/dataRoute");
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Db not connected" + error);
  });
app.use("/api/user", userRoute);
app.use("/api/data", dataRoute);
app.use(express.static(path.join(__dirname, "/contactmanager/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "contactmanager", "dist", "index.html"));
});
