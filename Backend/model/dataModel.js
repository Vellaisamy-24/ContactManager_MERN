const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "user",
  },
  mobileNo: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
});
const DataModel = mongoose.model("data", schema);
module.exports = DataModel;
