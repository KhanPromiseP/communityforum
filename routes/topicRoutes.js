const express = require('express');
const router = express.Router();
const { createTopic, getTopics } = require('../controllers/topicController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createTopic);
router.get('/', getTopics);

module.exports = router;
