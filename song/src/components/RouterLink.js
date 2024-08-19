import React from 'react';
import "./RouterLink.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Features from '../Pages/Features';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const RouterLink = () => {
  return (
    <Router>
         <div className='container'>
           <nav className='nav'>
             <div>
                 <ul>
                  <li>
                     <Link to="/">Muzic</Link>
                  </li>
                 </ul>
         </div>
         <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="about">About</Link>
            </li>
            <li>
                <Link to="/features">Features</Link>
            </li>
            <li>
                 <Link to="/contact">Contact</Link>
            </li>
          </ul>
         </div>
         <div>
             <ul>
               <li>
                    <Link to="/signIn">Sign In</Link>
                </li>
                <li>
                     <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
          </div>
        </nav>  
      </div>        
     <Routes> 
        <Route Path='/' element={<Home />}/>
        <Route Path='/about' element={<About/>} />
        <Route Part='/features' element={<Features />} />
        <Route part='/contact' element={<Contact />} />
        <Route part='/signIn' element={<SignIn />} />
        <Route part='/signup' element={<SignUp />} />
      </Routes> 
    </Router>   
  )
}

export default RouterLink