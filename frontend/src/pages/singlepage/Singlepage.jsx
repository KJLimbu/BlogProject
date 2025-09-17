import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Singlepage = () => {
    
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const { id } = useParams();

    const fetchData = async ()=> {
        const res = await axios.get("http://localhost:3000/blogs/" + id);

        if(res.status == 200){
            setData(res.data.data);
        }
    }

    const deleteBlog = async ()=> {
        alert("Would you like to delete this blog ?");

        const res = await axios.delete("http://localhost:3000/blogs/"+ id);

        if(res.status == 200) {
            alert("Blog deleted!");
            navigate("/");
        }
    };

    useEffect(()=> {
        fetchData();
    }, []);

  return (
    <>
        <div className="card">
            <h2>{data.title}</h2>
            <h4>{data.subTitle}</h4>
            <p>{data.description}</p>

            <button onClick={deleteBlog}>Delete</button>
            <Link to={`/updateblog/${data._id}`} >Edit</Link>
        </div>
    </>
  )
}

export default Singlepage