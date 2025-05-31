const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

// This ensures Mongoose registers the schemas when the server starts.
require('./models/User');    // Assuming you have a User.js model
require('./models/Topic');   // Make sure the filename is Topic.js
require('./models/Post');    // Make sure the filename is Post.js
require('./models/Reply');   // Make sure the filename is Reply.js

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
