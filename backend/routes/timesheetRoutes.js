const express = require("express");
const router = express.Router();
const controller = require("../controllers/timesheetController");

router.post("/submit", controller.createTimesheet);
router.get("/", controller.getTimesheets);
router.put("/approve/:id", controller.approveTimesheet);

module.exports = router;
