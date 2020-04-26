const mongoose = require('mongoose');
const config = require('config');

// Grab the Connection string URL from the default.json file
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connectDB;