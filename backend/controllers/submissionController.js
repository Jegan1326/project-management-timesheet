const Submission = require('../models/Submission');

// Create new submission
exports.createSubmission = async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    res.status(201).json(submission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all pending submissions
exports.getPendingSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ status: 'Pending' });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Approve or Reject
exports.updateSubmissionStatus = async (req, res) => {
  try {
    const { status } = req.body; // "Approved" or "Rejected"
    const updated = await Submission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
