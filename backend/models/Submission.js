const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  softwareUsed: { type: String, required: true },
  timeTaken: { type: Number, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Approved, Rejected
});

module.exports = mongoose.model('Submission', submissionSchema);
