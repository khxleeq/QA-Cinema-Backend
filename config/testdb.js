const mongoose = require("mongoose");

const MongoDBConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("TEST MongoDB Connected");
};

module.exports = MongoDBConnect;
