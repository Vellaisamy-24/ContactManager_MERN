const express = require("express");
const { createData } = require("../controller/dataController");
const router = express.Router();
router.route("/createData").post(createData);
module.exports = router;
