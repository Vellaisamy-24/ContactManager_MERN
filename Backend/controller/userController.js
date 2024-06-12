const User = require("../model/userModel");
const bcryptjs = require("bcryptjs");
exports.signUp = async (req, res) => {
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

exports.signIn = (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
