const mongoose = require("mongoose");

const blog = new mongoose.Schema({
    title: {
        type: String
    },

    subTitle: {
        type: String
    },

    description: {
        type: String
    }
}, {
    timestamps: true
});

const Blog = mongoose.model("Blog", blog);

module.exports = Blog;