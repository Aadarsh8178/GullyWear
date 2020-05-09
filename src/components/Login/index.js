import React,{useState} from 'react'
import Register from './Register'
import Login from './Login'
function index() {
  const [signin,setSignin] = useState(true)
  
  return (
    <div className="login-form">
      <div className="SigninUp">
      <span onClick={()=>setSignin(true)} className={signin?'active login':'login'}>Signin</span>
      <span onClick={()=>setSignin(false)} className={signin?'login':'active login'}>SignUp</span>
      </div>
      {signin?<Login/>:<Register/>}
      <style jsx>{`
      .SigninUp{
        display:flex;
        margin:0.5rem 0;
        justify-content:center;
      }
      .active{
        color:blue;
      }
      .login{
        cursor:pointer;
        margin:0 1rem;
      }
      .login-form{
        transition: height 0.3s ease-out;
      }
      
      `}</style>
    </div>
  )
}

export default index
