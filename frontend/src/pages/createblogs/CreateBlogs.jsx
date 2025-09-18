import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';

const CreateBlogs = () => {

    const blogProjects = import.meta.env.VITE_BACKEND_URI;
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        subTitle: "",
        description: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        });
    }

    const createblog = async (e) => {
        e.preventDefault();

        const res = await axios.post(blogProjects+"/blogs", data);

        if(res.status == 200) {
            alert("Blog created successfully");
            navigate("/");
        }else {
            alert("Something went wrong");
        }
    };

  return (
    <>
        <form onSubmit={createblog}>
            <div>
                <label>Title</label>
                <input 
                    type="text"
                    name='title'
                    placeholder='Enter Title'  
                    onChange={handleInput}  
                />
            </div>

            <div>
                <label>SubTitle</label>
                <input 
                    type="text"
                    name='subTitle'
                    placeholder='Enter SubTitle'
                    onChange={handleInput}
                 />
            </div>

            <div>
                <label>Description</label>
                <input
                    type="text"
                    name='description'
                    placeholder='Write description'
                    onChange={handleInput}
                />
            </div>

            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default CreateBlogs