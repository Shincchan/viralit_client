import React from 'react'

export default function CreatePost() {
  return (
    <div className='card input-filed'
      style={{
        marginTop: "20px",
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center"
      }}
    >
      <input type="text" placeholder='title' />
      <input type="text" placeholder='body' />
      <div className="file-field input-field">
        <div className="btn">
          <span>Upload img</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">
        Add Post
        <i className="material-icons right">send</i>
      </button>
    </div>
  )
}
