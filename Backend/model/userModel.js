const mongoose = require("mongoose");

const schema = new mongoose.Schema({

  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
  },
  photo: {
    type: String,
  },
});
const User=mongoose.model("user",schema)
module.exports=User