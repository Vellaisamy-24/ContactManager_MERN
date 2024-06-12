const express = require("express");
const { createData, updateData } = require("../controller/dataController");
const { deleteData } = require("../controller/dataController");
const router = express.Router();
router.route("/createData").post(createData);
router.route("/deleteData/:id").delete(deleteData);
router.route("/updateData/:id").put(updateData);

module.exports = router;
