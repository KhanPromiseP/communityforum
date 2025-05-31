const Post = require('../models/Post');

// @desc    Create a post under a topic
exports.createPost = async (req, res) => {
  const { title, content, topicId } = req.body;
  try {
    const post = await Post.create({
      title,
      content,
      topic: topicId,
      author: req.user._id,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

// @desc    Get all posts under a topic
exports.getPostsByTopic = async (req, res) => {
  try {
    const posts = await Post.find({ topic: req.params.topicId })
      .populate('author', 'username')
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};
