import React from 'react'
import { Link } from 'react-router-dom'
import Emin from "../img/emin.jpg"
import Ali from "../img/ali.jpg"
import Bayram from "../img/bayram.jpg"
import Batuhan from "../img/batuhan.jpeg"
import Ceyda from "../img/ceyda.jpg"
import User from "../img/user-pp.jpg"
const Ekibimiz = () => {
  return (
   <div className="ekibimiz">
      <div className="satir1">
        
        <div className="uye">
        <div className="photo"><img src={Emin} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Emin Kartcı</h4><br />
            <p><b>şirketin kurucusu</b> </p>
            <br />
            <p>amean grubun kurucu ortağı ve CEO'su</p>
            <br />
            </center>
            </div>
            <div className="social">
          <Link className='link' to="https://eminkartci.com/#home"><svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg></Link>  
              <Link className='link' to="https://www.instagram.com/kartciemin/">
              <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
              </Link>   
                  
            </div>
            </div>
        

        </div>
        <div className="uye">
        <div className="photo"><img src={Ali} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Ali Üner</h4><br />
            <p><b>Stajer</b> </p>
            <br />
            <p>akdeniz ünüversitesi bilgisayar programcılığı öğrencisi</p>
            <br />
            </center>
            </div>
            <div className="social">
            <Link className='link'>
            <svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" /></svg></Link> 
      
              <Link className='link' to="https://www.instagram.com/aliuner07/">
              <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
                </Link>   
                  
            </div>
            </div>
        </div>
        <div className="uye">
        <div className="photo"><img src={Bayram} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Yavuz Bayram</h4><br />
            <p> </p>
            </center>
            </div>
            <div className="social">
            <svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg>
                  <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
                  
            </div>
            </div>

        </div>

      </div>

      <div className="satir2">

        <div className="uye">
        <div className="photo"><img src={User} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Durmuş Kartcı</h4><br />
            <p> </p>
            </center>
            </div>
            <div className="social">
            <svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg>
                  <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
                  
            </div>
            </div>

        </div>

        <div className="uye">
        <div className="photo"><img src={User} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Muhammet Kartcı</h4><br />
            <p> </p>
            </center>
            </div>
            <div className="social">
            <svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg>
                  <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
                  
            </div>
            </div>

        </div>

        <div className="uye">
        <div className="photo"><img src={Batuhan} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Batuhan Semiz</h4><br />
            <p> </p>
            </center>
            </div>
            <div className="social">
            <svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg>
                  <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
                  
            </div>
            </div>
        </div>

      </div>
      <div className="satir3">

        <div className="uye">
          <div className="photo"><img src={Ceyda} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Ceyda Urhan </h4><br />
            <p> </p>
            </center>
            </div>
            <div className="social">
            <svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg>
                  <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
                  
            </div>
            </div>
        

        </div>
        <div className="uye">
        <div className="photo"><img src={User} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Ali Mansuroğlu</h4><br />
            <p> </p>
            </center>
            </div>
            <div className="social">
            <svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg>
                  <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
                  
            </div>
            </div>

        </div>

        <div className="uye">
        <div className="photo"><img src={User} alt="" />
          
          </div>

          <div className="uye-info">
            <div className="hakkinda">
            <center>  <h4>Hakkıcan Soysal</h4><br />
            <p> </p>
            </center>
            </div>
            <div className="social">
            <svg class="feather feather-mail" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg>
                  <svg class="feather feather-instagram" fill="none" height="25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>    
                  
            </div>
            </div>

        </div>

      </div>
   </div>
  )
}

export default Ekibimiz