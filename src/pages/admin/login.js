import React,{useState,useContext, useEffect} from 'react'
import axios from 'axios'

import {LookContext} from '../../store/context'
import Modal from '../../components/UI/Modal'
import Login from '../../components/Login/Login'
import { useRouter } from 'next/router'
function login() {
    const Router = useRouter()
    const [showLogin,setShowLogin] = useState(true)
    const [error,setError] = useState(false)
    const context = useContext(LookContext)
    const {adminLogin,adminLogout,admin} = context
    
    const handleLogin = async (email,password)=>{  
        try{
            let error = await adminLogin(email,password)
            if(error){
                throw new Error()
            }
            Router.push('/')
            return false;
        } catch(e){
            return true
        }
    }  
    const handleLogout = async ()=>{
        try{
            let error = await adminLogout()
            if(error){
                throw new Error()
            }
            Router.push('/');
        }catch(e){
            setError(true)
        } 
    }
    return (
        <div>
            <Modal show={showLogin}>
                {error?
                    <p 
                    style={{margin:'2rem',textAlign:'center',cursor:'pointer'}}
                    onClick={()=>window.location.reload()}>Unabel to login/logout try again </p>:
                    admin?
                    <p style={{margin:'2rem',textAlign:'center'}}>
                        Already logged in <span onClick={handleLogout} 
                        style={{fontWeight:'bold',display:'block',cursor:'pointer',margin:'1rem'}}>logout</span>
                    </p>:
                    <Login handleLoginClick={handleLogin}/>
                }
            </Modal>
        </div>
    )
}

export default login
