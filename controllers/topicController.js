const Topic = require('../models/Topic');

// @desc    Create a new topic
exports.createTopic = async (req, res) => {
  const { title } = req.body;
  try {
    const topic = await Topic.create({
      title,
      author: req.user._id,
    });
    res.status(201).json(topic);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all topics
exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find().populate('author', 'username');
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
