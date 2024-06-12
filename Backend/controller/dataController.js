const mongoose = require("mongoose");
const DataModel = require("../model/dataModel");
exports.createData = async (req, res) => {
  try {
    const { email, mobileNo, firstName, lastName } = req.body;
    const createData = await DataModel.create({
      email,
      mobileNo,
      firstName,
      lastName,
    });
    return res.json({
        success:true,
        message:"contact created",
        contact:createData
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
