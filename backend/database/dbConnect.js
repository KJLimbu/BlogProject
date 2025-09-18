const mongoose = require("mongoose");

exports.databaseConnect = (URI) => {
    mongoose.connect(URI);
    console.log("Connected to Database successfully");
}