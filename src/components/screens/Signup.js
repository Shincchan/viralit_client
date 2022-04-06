import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import M from 'materialize-css'
export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const postData = ()=>{
        fetch("/signup",{
            method:"post",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password,
            })

        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }else{
                M.toast({html:"User Created",classes:"#66bb6a green lighten-1"});
                navigate('/login');
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <form className='mycard' onSubmit={(e)=>{e.preventDefault();postData()}}>
            <div className="card auth-card">
                <h2>Viralit</h2>
                <input type="text" placeholder='email' value={email} 
                    onChange= {(e)=>{setEmail(e.target.value)}}
                    
                />
                <input type="text" placeholder='Username'
                     value={name} 
                     onChange= {(e)=>{setName(e.target.value)}}
                     minLength={4}
                     
                />

                <input type="Password" placeholder='Password' 
                     value={password} 
                     onChange= {(e)=>{setPassword(e.target.value)}}
                     minLength={4}
                    
                />
                

                <button className="btn waves-effect waves-light" type="submit" name="action">
                    SignUp
                    <i className="material-icons right">send</i>
                </button>
                <h5>
                    <Link to="/login" style={{color:"black"}}>Already have an account ?</Link>
                </h5>

            </div>
        </form>
  )
}
