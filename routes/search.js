const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');
const Post = require('../models/Post');

// Full-text search endpoint
router.get('/', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ message: "Search query required." });

    // Text search in Topics and Posts
    // const [topics, posts] = await Promise.all([
    //   Topic.find({ $text: { $search: q } }),
    //   Post.find({ $text: { $search: q } }).populate('topicId')
    // ]);

     const [topics, posts] = await Promise.all([
      Topic.find({ $text: { $search: q } }),
      // Change 'topicId' to 'topic' here
      Post.find({ $text: { $search: q } }).populate('topic') // Corrected populate
    ]);

    res.json({ topics, posts });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ message: "Server error while searching." });
  }
});

module.exports = router;
