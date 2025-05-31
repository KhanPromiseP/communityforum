const Post = require('../models/Post');
const Reply = require('../models/Reply');
const Topics = require('../models/Topic');

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



// @desc    Get a post with its replies and topic
exports.getPostWithReplies = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate('author', 'username')
      .populate('topic', 'title');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const replies = await Reply.find({ post: post._id })
      .populate('author', 'username')
      .sort({ createdAt: 1 });

    res.json({ post, replies });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post and replies' });
  }
};