const jwt = require("jsonwebtoken");
const auth = async(req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode)
      req.user = decode;
      next();
    } catch (error) {
      return res.json({
        success: false,
        message: "Not authorizaed token",
      });
    }
  }
};
module.exports = { auth };
