const mongoose = require("mongoose");

const timesheetSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  projectName: { type: String, required: true },
  softwareUsed: { type: String, required: true },
  description: { type: String },
  hoursWorked: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Timesheet", timesheetSchema);
