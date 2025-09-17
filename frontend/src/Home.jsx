import React from 'react'
import Navbar from './component/Navbar'

const Home = () => {
  return (

    <>
        <Navbar/>
        <div className="container">
            <div className="card">
                <h2>This is title</h2>
                <h4>This is SubTitle</h4>
                <p>This is description</p>
            </div>
        </div>
    </>
  )
}

export default Home