import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Raju</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="card-content"> 
        <i className="material-icons" style={{color:"red"}}>favorite</i> 

          <h6>title</h6>
          <p>body ...something</p>
          <input type="text" placeholder="add a comment " />
        </div>
      </div>
      <div className="card home-card">
        <h5>Raju</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1624623306028-9c536fd89960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
            alt=""
          />
        </div>
        <div className="card-content"> 
        <i className="material-icons">favorite</i> 

          <h6>title</h6>
          <p>body ...something</p>
          <input type="text" placeholder="add a comment " />
        </div>
      </div>
      <div className="card home-card">
        <h5>Raju</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1624623306028-9c536fd89960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
            alt=""
          />
        </div>
        <div className="card-content">
        <i className="material-icons">favorite</i> 
          <h6>title</h6>
          <p>body ...something</p>
          <input type="text" placeholder="add a comment " />
        </div>
      </div>
    </div>
  );
}
