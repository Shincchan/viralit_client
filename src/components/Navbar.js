import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
export default function Navbar() {
    const { state, dispatch } = useContext(UserContext);
    const navigate =useNavigate();
    const renderList = () => {
        if (state) {
            return [
                <li>
                    <Link to="/profile">Profile</Link>
                </li>,
                <li>
                    <Link to="/createpost">
                        <i className="material-icons" style={{ color: "white" }}>
                            add
                        </i>
                    </Link>
                </li>,
                <button className="btn waves-effect waves-light" type="submit" name="action" style={{backgroundColor:"transparent",
                    border:"none"
                    }}
                    onClick={()=>{
                        localStorage.clear();
                        dispatch({type:"CLEAR"})
                        navigate('/login')
                    }}
                >
                    Logout
                    

                </button>
            ];
        } else {
            return [
                <li>
                    <Link to="/login">Login</Link>
                </li>,
                <li>
                    <Link to="/signup">Signup</Link>
                </li>,
            ];
        }
    };

    return (
        <>
            <nav>
                <div
                    className="nav-wrapper"
                    style={{ backgroundColor: "rgb(1 133 109)" }}
                >
                    <Link to={state ? "/" : "/login"} className="brand-logo left">
                        Viralit
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {renderList()}
                    </ul>
                </div>
            </nav>
        </>
    );
}
