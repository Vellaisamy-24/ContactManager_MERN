const express = require("express");
const { signUp, signIn } = require("../controller/userController");
const router = express.Router();
router.route("/sign-up").post(signUp);
router.route("/sign-in").post(signIn);
module.exports = router;
