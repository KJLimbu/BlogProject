import React from 'react'

const Updateblog = () => {
  return (
      <>
        <form>
            <div>
              <label>Title</label>
              <input 
                  type="text"
                  name='title'
                  placeholder='Enter title' 
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

            <button type='submit'>Update</button>
        </form>
      </>
  )
}

export default Updateblog