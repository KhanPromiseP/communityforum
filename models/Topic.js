const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }
}, {timestamps: true});


TopicSchema.index({ title: 'text', description: 'text' });  // for searching functionality

module.exports = mongoose.model('Topic', topicSchema);