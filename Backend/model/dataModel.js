const mongoose = require("mongoose");
const schema = new mongoose.Schema({
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
