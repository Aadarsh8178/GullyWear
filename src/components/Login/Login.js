import React,{useState} from "react";
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
function Login() {
    const [form,setForm] = useState(initForm)
    
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
    return (
      <>
      <div className="base-container">
          <div className="form">
            <div className="form-group">
              <Input 
                label='Email'
                elementType='input'
                elementConfig={form.email.elementConfig}
                value={form.email.value}
                changed={(event) => handleInputChange(event,'email')}
                invalid={!form.email.valid.valid}
                shouldValidate={form.email.validation}
                touched={form.email.touched}
                error={form.email.valid.error}
              />
            </div>
            <div className="form-group">
              <Input 
                  label='password'
                  elementType='input'
                  elementConfig={form.password.elementConfig}
                  value={form.password.value}
                  changed={(event) => handleInputChange(event,'password')}
                  invalid={!form.password.valid.valid}
                  shouldValidate={form.password.validation}
                  touched={form.password.touched}
                  error={form.password.valid.error}
                />
            </div>
          </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
      <style jsx>{styles} </style>
      </>
    );
}

export default Login