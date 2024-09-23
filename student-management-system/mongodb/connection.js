const mongoose = require("mongoose");

const mongoconnection = mongoose.connect(
  "mongodb://127.0.0.1:27017/nemevaluation"
);

module.exports = { mongoconnection };
