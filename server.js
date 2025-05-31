const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

// This ensures Mongoose registers the schemas when the server starts.
require('./models/User');    
require('./models/Topic');   
require('./models/Post');   
require('./models/Reply');   

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
