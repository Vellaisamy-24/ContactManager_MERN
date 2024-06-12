const express = require("express");
const {
  createData,
  updateData,
  getData,
  singleUserById,
} = require("../controller/dataController");
const { deleteData } = require("../controller/dataController");
const { auth } = require("../middleware/auth");
const router = express.Router();
router.route("/getData").get(auth, getData);
router.route("/createData").post(auth, createData);
router.route("/deleteData/:id").delete(auth, deleteData);
router.route("/updateData/:id").put(auth, updateData); //patch for some modification and put for entire
router.route("/user/:id").get(auth, singleUserById);

module.exports = router;
