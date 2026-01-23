const express = require('express');
const router = express.Router();
const controller = require('../controllers/submissionController');

router.post('/', controller.createSubmission); // user submit
router.get('/pending', controller.getPendingSubmissions); // admin fetch pending
router.patch('/:id', controller.updateSubmissionStatus); // admin approve/reject

module.exports = router;
