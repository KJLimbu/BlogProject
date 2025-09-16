const mongoose = require("mongoose");

exports.databaseConnect = () => {
    mongoose.connect("mongodb+srv://kjlimbu:kj1236@cluster0.2vxutd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to Database successfully");
}