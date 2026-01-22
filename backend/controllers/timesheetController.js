const Timesheet = require("../models/Timesheet");

// Submit work
exports.createTimesheet = async (req, res) => {
  try {
    const timesheet = new Timesheet(req.body);
    await timesheet.save();
    res.status(201).json(timesheet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ADMIN fetches only pending submissions
exports.getTimesheets = async (req, res) => {
  try {
    const allData = await Timesheet.find(); // all submissions
    res.json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ADMIN approves or rejects based on hoursWorked
exports.approveTimesheet = async (req, res) => {
  try {
    const sheet = await Timesheet.findById(req.params.id);
    if (!sheet) return res.status(404).json({ error: "Timesheet not found" });

     const action = req.body.action; // "approve" or "reject"

    if (action === "approve") sheet.status = "Approved";
    else if (action === "reject") sheet.status = "Rejected";

    await sheet.save();
    res.json(sheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
