const express = require('express');
const router = express.Router();
const { createPost, getPostsByTopic, getPostWithReplies } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createPost); // For creating new posts under any topic
router.get('/topic/:topicId', getPostsByTopic); // To get all posts for a specific topic (e.g., /api/posts/topic/<topicId>)
router.get('/details/:postId', getPostWithReplies); // To get a single post with all its replies (e.g., /api/posts/details/<postId>)

module.exports = router;