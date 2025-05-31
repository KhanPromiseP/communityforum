const express = require('express');
const router = express.Router();
const { createReply, getRepliesByPost, getPostWithReplies } = require('../controllers/replyController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createReply); // route to create a on a post reply
router.get('/:postId', getRepliesByPost); // route to Get replies for a particular post
router.get('/details/:postId', getPostWithReplies); // get a particular post with it replies

module.exports = router;
