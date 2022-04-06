import React from 'react'

export default function Profile() {
  return (
    <div style={{maxWidth :"800px", margin :"auto" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "1.8rem 0rem",
        borderBottom:"1px solid grey"
      }}>
        <div style={{ marginRight: "10px" }} >
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" style={{ width: "16rem", height: "16rem", borderRadius: "50%" }} />
        </div>
        <div>
          <h4>Udit Rai</h4>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "108%",

          }}>
            <h6>40 Posts</h6>
            <h6>40 Followers</h6>
            <h6>40 Following</h6>

          </div>
        </div>
      </div>
      <div className='gallery'>
          <img className='item' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""

          />
          <img className='item' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""

          />
          <img className='item' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""

          />
          <img className='item' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""

          />
          <img className='item' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""

          />
          


      </div>
    </div>
  )
}
