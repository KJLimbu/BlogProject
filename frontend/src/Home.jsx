import React from 'react'
import Navbar from './component/Navbar'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
    const blogProject = import.meta.env.VITE_BACKEND_URI;
    const [data, setData] = useState([]);

    const fetchData = async()=> {
        const res = await axios.get(blogProject + "/blogs");

        setData(res.data.data);
    }

    useEffect(()=> {
        fetchData();
    }, [])

  return (

    <>
        <Navbar/>
        <div className="container">
            {data.map((item)=> {
                return(
                    <div key={item._id} className="card">
                        <h2>{item.title}</h2>
                        <h4>{item.subTitle}</h4>
                        <p>{item.description}</p>
                        <Link to={`/singlepage/${item._id}`} >See more</Link>
                    </div>
                )
            })

            }
        </div>
    </>
  )
}

export default Home