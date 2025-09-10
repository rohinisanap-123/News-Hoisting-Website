import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

  const isLogout = false ;
    return (
        <nav className="navbar">
            <h2>🗞️ Your World, Your News – All in One Place</h2>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/sports">Sports</NavLink></li>
                <li><NavLink to="/health">Health</NavLink></li>
                <li><NavLink to="/entertainment">Entertainment</NavLink></li>
                <li><NavLink to="/fitness"> Fitness</NavLink></li>
                {/* <li><NavLink to="/admin"> Admin</NavLink></li> */}


                {
                  isLogout ?(
                       <li><NavLink to="/logout"> Logout</NavLink></li>  
                  ):(
                       <li><NavLink to="/login" >🔐</NavLink></li>  

                  )
                }
            </ul>
        </nav>
    );
}

export default Header;



