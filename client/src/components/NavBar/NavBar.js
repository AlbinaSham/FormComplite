import React from 'react';


import { Link } from "react-router-dom";
import "./NavBar.css";



const NavBar = () =>{
    return(
        <div className = 'navBar'>
             <div className = "links">
              <Link className = "form" to = "/" >
                 Form
              </Link>
              <Link className = "students" to = "/data" >
                 Students
              </Link>
            </div> 
        </div>
    );
};


export default NavBar;