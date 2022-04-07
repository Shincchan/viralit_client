import React, { useState, useEffect,useContext  } from "react";
import {format} from 'timeago.js';
import { UserContext } from "../../App";


export default function Home() {
  const [data, setData] = useState([]);
  const {state,dispatch} = useContext(UserContext); 
  useEffect(() => {
    fetch('/allpost', {
      method:"get",
      headers: {
        "Authorization": "Bearer "+localStorage.getItem('jwt')
      }
    }).then(res => res.json())
      .then(result => {
        
        setData(result.posts);
        
      })



  }, []);

  const likePost = (id)=>{
      fetch('/like',{
        method :"put",
        headers:{
          'Content-Type':'application/json',
          "Authorization" : "Bearer "+ localStorage.getItem('jwt')
        },
        body:JSON.stringify({
          postId:id
        }) 
      }).then(res=>res.json())
      .then(result=>{
        //making new array with updated data
        const newData = data.map(item=>{
          if(item._id===result._id){
            //updated data
            return result
          }else{
            //old data
            return item
          }
        })
        setData(newData)
      }).catch(err=>{
        console.log(err)
      })
  }
  const unlikePost = (id)=>{
    fetch('/unlike',{
      method :"put",
      headers:{
        'Content-Type':'application/json',
        "Authorization" : "Bearer "+ localStorage.getItem('jwt')
      },
      body:JSON.stringify({
        postId:id
      }) 
    }).then(res=>res.json())
    .then(result=>{
      const newData = data.map(item=>{
        if(item._id===result._id){
          //updated data
          return result
        }else{
          //old data
          return item
        }
      })
      setData(newData)
    })
    .catch(err=>{
      console.log(err)
    })
}
  const makeComment = (text,postId)=>{
      fetch('/comment',{
        method:"put",
        headers:{
          'Content-Type':'application/json',
          "Authorization" : "Bearer "+ localStorage.getItem('jwt')
          },
        body:JSON.stringify({
          postId :postId,
          text:text,
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        const newData = data.map(item=>{
          if(item._id===result._id){
            //updated data
            return result
          }else{
            //old data
            return item
          }
        })
        setData(newData)
      }).catch(err=>{
        console.log(err);
      })
  }

  return (
    <div className="home">

      {data&&data.map(item => {
        return (
          <div className="card home-card" key={item._id}>
            <span><h5 style={{display:"inline-block",marginRight:"5px"}}>{item.postedBy.name}</h5></span>
            <span><smal>{format(item.createdAt)}</smal></span>
            <div className="card-image">
              <img
                src={item.photo}
                alt=""
              />
            </div>
            <div className="card-content">
              <div style={{display:"flex", alignItems:"center"}}>
              {item.likes.includes(state._id)
              ?<i className="material-icons" style={{ color: "red" , cursor:"pointer"}} onClick={()=>{unlikePost(item._id)}} >favorite</i>
              :
              <i className="material-icons" style={{ color: "Black", cursor:"pointer"}} onClick={()=>{likePost(item._id)}} >favorite</i>
              }
              
              <span>{item.likes.length} likes</span>
              </div>


              <h6>{item.title}</h6>
              <p>{item.body}</p>
              {
                item.comments &&  item.comments.map(record=>{
                  return (
                    <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}:-</span>{record.text}</h6>
                  )
                })
              }
              <form onSubmit={(e)=>{e.preventDefault(); makeComment(e.target[0].value,item._id);}}>
                <input type="text" placeholder="add a comment" />  
              </form>
              
            </div>
          </div>
        )
      })}

    </div>
  );
}
