const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const topicRoutes = require('./routes/topicRoutes');
const postRoutes = require('./routes/postRoutes'); 
const replyRoutes = require('./routes/replyRoutes');

const searchRoute = require('./routes/search');



app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/replies', replyRoutes);
app.use('/api/search', searchRoute);

module.exports = app;
