import React, { useState } from 'react';
import './Signup.css'
import { Link, Navigate } from 'react-router-dom';
import logo from "../../image/logo2.png"
import useAuth from '../hooks/useAuth';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {signUpNewUser} = useAuth();

    const handelEmail = e => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    };
    const handelPassword = e => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    };
    const handelSubmit = e => {
        e.preventDefault();
        signUpNewUser(email, password);
        console.log(email, password);

    }
    return (
        <div className='login-from'>
                <Link to="/">
                    <img className='img-fluid px-3' style={{ width: "25rem" }} src={logo} alt="logo" />
                </Link>
            <div className='login-from-children'>
                <h2 className='text-danger my-3 text-center'>Sign up</h2>
                <form onSubmit={handelSubmit}>
                    <input className="input" type="text"placeholder='Name' required />
                    <br />
                    <br />
                    <input className="input" type="email" onBlur={handelEmail} placeholder='Email' required />
                    <br />
                    <br />
                    <input className="input" type="password" onBlur={handelPassword} placeholder='Password' required />
                    <br />
                    <br />
                    <input className="input" type="password" onBlur={handelPassword} placeholder='Confirm Password' name="" id="" required />
                    <br />
                    <br />
                    <button type='submit' className='btn-regular'>Sign up</button>
                </form>
                <div>

                    <Link style={{ textDecoration: "none"}} to='/login'>
                    <p className='text-danger link-text'>Already have an account</p>    
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;