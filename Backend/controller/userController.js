const User = require("../model/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const DataModel = require("../model/dataModel");
exports.signUp = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const userExits = await User.findOne({ email });
    if (userExits) {
      return res.json({
        status: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcryptjs.hashSync(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    const { password: pass, ...rest } = newUser._doc;
    return res.json({
      success: true,
      message: "User singup success",
      user: rest,
    });
  } catch (error) {}
};

exports.signIn = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        success: false,
        message: "please fill all fields",
      });
    }
    const userExits = await User.findOne({ email });
    if (!userExits) {
      return res.json({
        success: false,
        message: "User not exists",
      });
    }
    const validPassword =await bcryptjs.compare(password, userExits.password);
    if (!validPassword) {
      return res.json({
        success: false,
        message: "Invalid Password",
      });
    }
    const { password: pass, ...rest } = userExits._doc;
    const token = jwt.sign({ id: userExits._id }, process.env.JWT_SECRET);
    return res.json({
      success: true,
      message: "User sigin success",
      token: token,
      user: rest,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
