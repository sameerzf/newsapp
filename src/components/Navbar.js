import React from 'react'
import {Link} from "react-router-dom";

const Navbar=()=>{


    return (
      <div>
             <nav className="navbar">
               <ul>
                <li className='title'>News-Application</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/">General</Link></li>
                <li><Link to="/health">Health </Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                </ul>
             </nav>
      </div>
    )
  }


export default Navbar
