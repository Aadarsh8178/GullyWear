import React from "react";
import styles from './styles'

function Register() {
    return (
        <>
        <div className="base-container">
            <div className="form">
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" />
                </div>
            </div>
            <button type="button" className="btn">
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