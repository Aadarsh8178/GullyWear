import React,{useState,useRef,useEffect} from "react";
import {checkValidity} from './validations';
import styles from './styles'

import Input from '../UI/Input'
const initForm = {
    username:{
        elementConfig: {
            type: 'text',
            placeholder: 'username'
          },
          value: '',
          validation: {
              required: true,
          },
          valid: false,
          touched: false
    },
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
      touched: false
    },
    password:{
      elementConfig: {
        type: 'text',
        placeholder: 'password'
      },
      value: '',
      validation: {
          required: true,
          minLength:6
      },
      valid: {valid:false,error:''},
      touched: false
    }
}
function Register() {
    const usernameRef = useRef() 
    const emailRef = useRef()
    const passwordRef = useRef()
    const registerRef = useRef()

    const [form,setForm] = useState(initForm)
    useEffect(()=>{
      usernameRef.current.focus()
    },[])
    const handleInputChange = (event,controlName)=>{
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
    }
    const firstKeyDown = (e)=>{
      if(e.key==='Enter'){
        emailRef.current.focus()
      }
    }
    const secondKeyDown = (e)=>{
      if(e.key==='Enter'){
        passwordRef.current.focus()
      }
    }
    const thirdKeyDown = (e)=>{
      if(e.key==='Enter'){
        registerRef.current.focus()
      }
    }
    const handleRegister = (e)=>{
      if(e.key==='Enter'){
        alert('Working on Register')
      }
    }
    return (
        <>
        <div className="base-container">
            <div className="form">
                <div className="form-group">
                <Input 
                  ref={usernameRef}
                  label='username'
                  elementType='input'
                  elementConfig={form.username.elementConfig}
                  value={form.username.value}
                  changed={(event) => handleInputChange(event,'username')}
                  invalid={!form.username.valid.valid}
                  shouldValidate={form.username.validation}
                  touched={form.username.touched}
                  error={form.username.valid.error}
                  onKeyDown={firstKeyDown}
                />
                </div>
                <div className="form-group">
                <Input 
                ref={emailRef}
                label='Email'
                elementType='input'
                elementConfig={form.email.elementConfig}
                value={form.email.value}
                changed={(event) => handleInputChange(event,'email')}
                invalid={!form.email.valid.valid}
                shouldValidate={form.email.validation}
                touched={form.email.touched}
                error={form.email.valid.error}
                onKeyDown={secondKeyDown}
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
                  onKeyDown={thirdKeyDown}
                />
                </div>
            </div>
            <button ref={registerRef} onKeyDown={handleRegister} type="button" className="btn">
                Register
            </button>
        </div>
        <style jsx>
            {styles}
        </style>
        </>
    );
}
export default Register