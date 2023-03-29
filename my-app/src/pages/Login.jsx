import React from 'react'
import '../style.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      
      <form >
     <center><h1>GİRİŞ YAP</h1></center> 
        <input required type="text" placeholder='username' />
        <input required type="password" placeholder='password' />
        <button >GİRİŞ YAP</button>
        <p>Şifreniz yada kullanıcı adınız hatalı </p>
        <span >Hala kayıt olmadınız mı?<br></br><Link to="/register">Kayıt Ol</Link></span>
      </form>
    </div>
  )
}

export default Login