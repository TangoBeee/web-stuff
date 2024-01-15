const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const dbConnect = async () => {
  const localMongod = await MongoMemoryServer.create();
  const mongoUri = localMongod.getUri();

  const mongoDB = await mongoose.connect(mongoUri);

  console.log("MongoDB connected");

  return mongoDB;
};

module.exports = dbConnect;
