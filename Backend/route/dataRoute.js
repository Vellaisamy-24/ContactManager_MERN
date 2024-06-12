const express = require("express");
const { createData } = require("../controller/dataController");
const { deleteData } = require("../controller/userController");
const router = express.Router();
router.route("/createData").post(createData);
router.route("/deleteData/:id").delete(deleteData);
module.exports = router;
