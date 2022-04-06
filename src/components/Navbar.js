import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-wrapper" style={{backgroundColor : "rgb(1 133 109)"}}>
                    <Link to="/" className="brand-logo left">Viralit</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/createpost"><i className="material-icons" style={{color:"white"}}>add</i></Link></li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
