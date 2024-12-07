const Mongoose = require("mongoose");

const uri =
  "mongodb+srv://shruti:KTe07Bjumxjv5K6q@cluster0.km88t.mongodb.net/devTinder?retryWrites=true&w=majority";

const connectDB = async () => {
  await Mongoose.connect(uri, {
    tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false,
  });
};

module.exports = connectDB;

