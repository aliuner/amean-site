import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo-black.png"
import "./navbar.scss"


const Navbar = () => {

  return (
    <div className="app">
      <div className='navbar'>
        <div className="container2">

          <Link className='link' to="/"><div className="logo">
            <div className='logo'> <img src={Logo} alt="" /></div>
            <div className=''><h1> DANIŞMANLIK</h1>
              <p>YAZILIM - DANIŞMANLIK - EĞİTİM</p></div>

          </div></Link>

          <div className="links">
            <ul className="topList">
              <Link className='link' to="/"><li className="topListItem">HOME</li></Link>
              <Link className='link' to="/calismalarimiz"><li className="topListItem">ÇALIŞMALARIMIZ</li></Link>
              <Link className='link' to="/ekibimiz"><li className="topListItem">EKİBİMİZ</li></Link>
              
             
        
            </ul>
            
            <Link className='link' to="/login"><button className='login-btn'>GİRİŞ YAP</button></Link>
           
            </div>
            <div className="toggle">
            <svg  class="feather feather-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
            </div>
            <div className="menu">

            <ul className="topList">
              <Link className='link' to="/"><li className="topListItem">HOME</li></Link>
              <Link className='link' to="/calismalarimiz"><li className="topListItem">ÇALIŞMALARIMIZ</li></Link>
              <Link className='link' to="/ekibimiz"><li className="topListItem">EKİBİMİZ</li></Link>
              
             <li><Link className='link' to="/login"><button >GİRİŞ YAP</button></Link></li>
        
            </ul>


            


            </div>
            
           
            
          
        </div>
        
      </div>
    </div>
  )
}

export default Navbar