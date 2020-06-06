import React,{useState,useRef,useEffect} from "react";

import {checkValidity} from './validations';
import styles from './styles'

import Input from '../UI/Input';

const initForm = {
    email:{
      elementConfig: {
        type: 'email',
        placeholder: 'Mail Address'
      },
      value: '',
      validation: {
          required: true,
          isEmail:true
      },
      valid: {valid:false,error:''},
      touched: false,
    },
    password:{
      elementConfig: {
        type: 'password',
        placeholder: 'password'
      },
      value: '',
      validation: {
          required: true,
          minLength:6
      },
      valid: {valid:false,error:''},
      touched: false,
    }
}
function Login({handleLoginClick}) {
    const emailref = useRef()
    const passwordRef = useRef()
    const loginRef = useRef()
    const [form,setForm] = useState(initForm)
    const [error,setError] = useState(false)
    
    useEffect(()=>{
      emailref.current.focus()
    },[])
    const handleInputChange =(event,controlName)=>{
      const updatedControls = {
        ...form,
        [controlName] : {
            ...form[controlName],
            value: event.target.value,
            valid: checkValidity(event.target.value,form[controlName].validation),
            touched : true
        }
      } 
      setForm(updatedControls) 
      setError(false)
    }
    const firstKeyDown = (e)=>{
      if(e.key==='Enter'){
        passwordRef.current.focus()
      }
    }
    const secondKeyDown = (e)=>{
      if(e.key==='Enter'){
        loginRef.current.focus()
      }
    }
    const handleLogin = async (e)=>{
      if(!(form.email.valid.valid&&form.password.valid.valid)){
        return;
      }
      let err = await handleLoginClick(form.email.value,form.password.value)
      setError(err)
    }
    return (
      <>
      <div className="base-container">
          {error?<p className="error">INVALID EMAIL OR PASSWORD</p>:null}
          <div className="form">
            <div className="form-group">
              <Input 
                ref={emailref}
                label='Email'
                elementType='input'
                elementConfig={form.email.elementConfig}
                value={form.email.value}
                changed={(event) => handleInputChange(event,'email')}
                invalid={!form.email.valid.valid}
                shouldValidate={form.email.validation}
                touched={form.email.touched}
                error={form.email.valid.error}
                onKeyDown={firstKeyDown}
              />
            </div>
            <div className="form-group">
              <Input 
                  ref={passwordRef}
                  label='password'
                  elementType='input'
                  elementConfig={form.password.elementConfig}
                  value={form.password.value}
                  changed={(event) => handleInputChange(event,'password')}
                  invalid={!form.password.valid.valid}
                  shouldValidate={form.password.validation}
                  touched={form.password.touched}
                  error={form.password.valid.error}
                  onKeyDown={secondKeyDown}
                />
            </div>
          </div>
        <div className="footer">
          <button className={form.email.valid.valid&&form.password.valid.valid?"btn":"btn disabled"} ref={loginRef} onClick={handleLogin} type="button" >
            Login
          </button>
        </div>
      </div>
      <style jsx>{styles} </style>
      </>
    );
}

export default Login