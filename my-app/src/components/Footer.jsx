import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo2.png"



const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footerana">



          <div className="logo-text">
            <img className='logo' src={Logo} alt="" />
            <div className="text">

              <h1> DANIŞMANLIK</h1>
              <p>YAZILIM - DANIŞMANLIK - EĞİTİM</p>

            </div>



          </div>




          <div className="iletisim">
            <center><h1>İletişim</h1></center>
            <br></br>


            <div className='phone'>
              <div className="phone-icon">

                <svg class="feather feather-phone" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div> 
              
              <div className="phone-text">
             
              0551 609 42 50
             
                
              </div>

            </div>
            <br></br>
            <Link className='link' to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#drafts?compose=jrjtXDztHdmNbsjVQJtSfbhGwLsQPkDkVkNbvWqdQtwjSFTkjMgTwkDNnnLxpKPsZFLRjBjs"><div className="email">
              <div className="email-icon">
                <svg class="feather feather-mail" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" /></svg>
              </div>

              <div className="email-text">
              ameandanismanlik@gmail.com
              </div>
            </div> </Link>
            <br></br>
            <Link className='link' to="https://www.instagram.com/ameandanismanlik/"> <div className="insta">
              <div className="icon">
                <svg class="feather feather-instagram" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </div>

              <div className="insta-text">
              ameandanismanlik
              </div>

            </div></Link>  

           

          </div>


          <div className="map">
          <center><div className="map1">
               <iframe width="400" height="240px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=834&amp;height=280&amp;hl=en&amp;q=%20Antalya+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
             

            </div>
            </center>
          </div>


        </div>
        <div className="info">

          <div className="hak">
            <p>Tüm Hakları saklıdır.</p>
          </div>
          <div className="hak2">
            <p>Amean Danışmanlık</p></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer