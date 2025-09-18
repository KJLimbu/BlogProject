// REQUIRES EXPRESS
const express = require("express");

// REQUIRES DATABASE CONNECTION
const { databaseConnect } = require("./database/dbConnect");

// REQUIRES MODEL BLOG SCHEMA
const Blog = require("./model/blogModel");

// REQUIRES CORS
const cors = require("cors");

// REQUIRES DOTNENV CONFIG
require("dotenv").config();

const app = express();

app.use(cors());// allows all APIs to interact with the frontend

// DATABASE CONNECTION
databaseConnect(process.env.MONGO_URI);

// PREPARE APIs FOR JSON DATA
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello World");
// })

// GET ALL BLOGS
app.get("/blogs", async (req, res)=> {

    const blogs = await Blog.find();

    if(blogs.length === 0) {
        res.status(404).json({
            message: "Blog not found"
        });
    }else {
        res.status(200).json({
            message: "Blog found",
            data: blogs
        });
    }
});


// CREATE A NEW BLOG 
app.post("/blogs", async (req, res)=> {
    const { title, subTitle, description } = req.body;

    await Blog.create({
        title: title,
        subTitle: subTitle,
        description: description
    });

    res.status(200).json({
        message: "Blog created successfully"
    });
});


// GET SINGLE BLOG BY ID
app.get("/blogs/:id", async(req, res)=> {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        
        res.status(200).json({
            message: "Blog found",
            data: blog
        });
    } catch (error) {
        res.status(404).json({
            message: "Blog not found",
            data: error
        });
    }
});


// UPDATE BLOG BY ID
app.patch("/blogs/:id", async(req, res) => {
    const { title, subTitle, description } = req.body;
    const { id } = req.params;

    try {
        await Blog.findByIdAndUpdate(id, {
            title: title,
            subTitle: subTitle,
            description: description
        });
        
        res.status(200).json({
            message: "Blog updated successfully"
        });
    } catch (error) {
        res.status(404).json({
            message: "Sorry, Could not update blog",
            data: error
        })
    }
});


// DELETE BLOG BY ID
app.delete("/blogs/:id", async(req, res)=> {
    const { id } = req.params;

    await Blog.findByIdAndDelete(id);

    res.status(200).json({
        message: "Blog deleted successfully"
    });
});




app.listen(process.env.PORT, (req, res)=> {
    console.log("Server is running");
});