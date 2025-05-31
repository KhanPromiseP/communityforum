const express = require('express');
const router = express.Router();
const { createPost, getPostsByTopic } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createPost); 
router.get('/:topicId', getPostsByTopic); 

module.exports = router;
