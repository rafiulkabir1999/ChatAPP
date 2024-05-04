const mongoose = require("mongoose");

const ConnectMongoDB = () => {
  try {
    const url = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@cluster0.aeubn.mongodb.net/chatApp?retryWrites=true&w=majority&appName=Cluster0`;
    const URL = "mongodb://localhost:27017/chatapp";
    mongoose.connect(URL);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  ConnectMongoDB,
};
