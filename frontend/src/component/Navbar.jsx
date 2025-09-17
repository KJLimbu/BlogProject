import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
        <a href="#">Home</a>
        <Link to={"/createblogs"}>Add Blog</Link>
    </nav>
  )
}

export default Navbar