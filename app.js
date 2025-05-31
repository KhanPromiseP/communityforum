const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const topicRoutes = require('./routes/topicRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/topics', topicRoutes);

module.exports = app;
