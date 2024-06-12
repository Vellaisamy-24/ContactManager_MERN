const User = require("../model/userModel");
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
    const newUser = await User.create({ email, password });
    return res.json({
      success: true,
      message: "User singup success",
      user: newUser,
    });
  } catch (error) {}
};
