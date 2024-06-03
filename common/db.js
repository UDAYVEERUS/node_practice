const mongoose = require("mongoose");

const MONGOURL =
  "mongodb+srv://uday:9670957901@cluster0.4j1e9wt.mongodb.net/test";

const connectToMongo = () => {
  try {
    mongoose
      .connect(MONGOURL)
      .then(console.log("Database Connected Successfully"));
  } catch (err) {
    console.log(err);
  }
};

mongoose.set("strictQuery", true);

module.exports = connectToMongo;
