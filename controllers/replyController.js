const Reply = require('../models/Reply');

// @desc    Create a reply to a post
exports.createReply = async (req, res) => {
  const { content, postId } = req.body;

  try {
    const reply = await Reply.create({
      content,
      post: postId,
      author: req.user._id,
    });

    res.status(201).json(reply);
  } catch (error) {
    res.status(500).json({ message: 'Error creating reply' });
  }
};

// @desc    Get all replies for a post
exports.getRepliesByPost = async (req, res) => {
  try {
    const replies = await Reply.find({ post: req.params.postId })
      .populate('author', 'username')
      .sort({ createdAt: -1 });

    res.json(replies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching replies' });
  }
};
