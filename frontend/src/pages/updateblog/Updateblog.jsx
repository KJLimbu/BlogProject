import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const Updateblog = () => {

  const navigate = useNavigate();
 
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: ""
  });
  const { id } = useParams();

  
  const handleChange = (e)=> {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  const fetchData = async()=> {
    const res =  await axios.get("http://localhost:3000/blogs/"+ id);

    if(res.status == 200) {
      setData(res.data.data);
    }
  };

  const updateBlog = async(e)=> {
    e.preventDefault(); 

    const res = await axios.patch("http://localhost:3000/blogs/"+ id, data);

    if(res.status == 200 ) {
      alert("Blog updated!");
      navigate("/singlepage/"+ id);
    }
  };

  useEffect(()=> {
    fetchData();
  }, []);

  return (
      <>
        <form onSubmit={updateBlog}>
            <div>
              <label>Title</label>
              <input 
                  type="text"
                  name='title'
                  value={data.title}
                  placeholder='Enter title' 
                  onChange={handleChange}
              />
            </div>

            <div>
              <label>SubTitle</label>
              <input
                  type="text"
                  name='subTitle'
                  value={data.subTitle}
                  placeholder='Enter SubTitle'
                  onChange={handleChange}
              />
            </div>

            <div>
                <label>Description</label>
                <input 
                    type="text"
                    name='description'
                    value={data.description}
                    placeholder='Write description'
                    onChange={handleChange}
                />
            </div>

            <button type='submit'>Update</button>
        </form>
      </>
  )
}

export default Updateblog