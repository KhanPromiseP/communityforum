const express = require('express');
const router = express.Router();
const Topic = require('../models/topic');
const Post = require('../models/post');

// Full-text search endpoint
router.get('/', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ message: "Search query required." });

    // Text search in Topics and Posts
    const [topics, posts] = await Promise.all([
      Topic.find({ $text: { $search: q } }),
      Post.find({ $text: { $search: q } }).populate('topicId')
    ]);

    res.json({ topics, posts });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ message: "Server error while searching." });
  }
});

module.exports = router;
