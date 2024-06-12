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
      success: true,
      message: "contact created",
      contact: createData,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const exitsId = await DataModel.findOne({ _id: id });
    if (!exitsId) {
      return res.json({
        success: false,
        message: "data id not exits",
      });
    }
    const deleteData = await DataModel.findByIdAndDelete(id);
    return res.json({
      success: true,
      message: "Data deleted succesfully",
      deleteData,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateData = async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    const existId = await DataModel.findOne({ _id: req.params.id });
    if (!existId) {
      return res.json({
        success: false,
        message: "data id not exits for update",
      });
    }
    const updateData = await DataModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          email: req.body.email,
          mobileNo: req.body.mobileNo,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        },
      },
      {
        new: true,
      }
    );
    return res.json({
      success: true,
      message: "data updated",
      data: updateData,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
