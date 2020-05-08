import React from "react";
import loginImg from "../../../public/static/images/login.svg";
import styles from './styles'

function Login(props) {
    return (
      <>
      <div className="base-container" ref={props.containerRef}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
      <style jsx>
            {styles}
        </style>
      </>
    );
}

export default Login