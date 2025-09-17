import React from 'react'

const CreateBlogs = () => {
  return (
    <>
        <form action="">
            <div>
                <label>Title</label>
                <input 
                    type="text"
                    name='title'
                    placeholder='Enter Title'    
                />
            </div>

            <div>
                <label>SubTitle</label>
                <input 
                    type="text"
                    name='subTitle'
                    placeholder='Enter SubTitle'
                 />
            </div>

            <div>
                <label>Description</label>
                <input
                    type="text"
                    name='description'
                    placeholder='Write description'
                />
            </div>

            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default CreateBlogs