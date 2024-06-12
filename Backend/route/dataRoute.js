const express = require("express");
const { createData, updateData } = require("../controller/dataController");
const { deleteData } = require("../controller/dataController");
const { auth } = require("../middleware/auth");
const router = express.Router();
router.route("/createData").post(auth, createData);
router.route("/deleteData/:id").delete(auth,deleteData);
router.route("/updateData/:id").patch(auth,updateData);

module.exports = router;
