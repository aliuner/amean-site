import React from 'react'

import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      
      <form className='login-form'>
    <center><h1 className='h1'>KAYIT OL</h1></center>  
        <input required type="text" placeholder='username' className='input'/>
        <input required type="email" placeholder='email' className='input'/>

        <input required type="password" placeholder='password' className='input' />
        <button className='login-button'>KAYIT OL</button>
        <p className='p1'>Şifreniz yada kullanıcı adınız hatalı </p>
        <span className='span1'>Zaten kayıtlı mısın?<br></br><Link to="/login">Giriş Yap</Link></span>
      </form>
    </div>
  )
}

export default Register