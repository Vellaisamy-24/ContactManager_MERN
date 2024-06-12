const express = require("express");
const {
  createData,
  updateData,
  getData,
} = require("../controller/dataController");
const { deleteData } = require("../controller/dataController");
const { auth } = require("../middleware/auth");
const router = express.Router();
router.route("/getData").get(auth, getData);
router.route("/createData").post(auth, createData);
router.route("/deleteData/:id").delete(auth, deleteData);
router.route("/updateData/:id").patch(auth, updateData);

module.exports = router;
