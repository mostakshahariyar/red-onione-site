import React, { useState } from 'react';
import './Signup.css'
import { Link, Navigate } from 'react-router-dom';
import logo from "../../image/logo2.png"
import useAuth from '../hooks/useAuth';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();
    const [error, setError] = useState();
    const { signUpNewUser } = useAuth();

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    const handelSubmit = e => {
        e.preventDefault();
        if (validateEmail(email)) {
            if (password != rePassword) {
                setError("password not same.");
                return;
           }
           else if(password.length<6)
           {
            setError("password must be at least 6 character.");
            return;
           }
           signUpNewUser(email, password);
        }
        else
        {
            setError("email is not valid");
        }
        
    }
    const handelEmail = e => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    };
    const handelPassword = e => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    };
    const RehandelPassword = e => {
        const passwordValue = e.target.value;
        setRePassword(passwordValue);
    };

    return (
        <div className='login-from'>
            <Link to="/">
                <img className='img-fluid px-3' style={{ width: "25rem" }} src={logo} alt="logo" />
            </Link>
            <div className='login-from-children'>
                <h2 className='text-danger my-3 text-center'>Sign up</h2>
                <form>
                    <input className="input" type="text" placeholder='Name' required />
                    <br />
                    <br />
                    <input className="input" type="email" onChange={handelEmail} placeholder='Email' required />
                    <br />
                    <br />
                    <input className="input" type="password" onChange={handelPassword} placeholder='Password' required />
                    <br />
                    <br />
                    <input className="input" type="password" onChange={RehandelPassword} placeholder='Confirm Password' name="" id="" required />
                    <div className='text-danger'>
                        {error}
                    </div>
                    <br />
                    <br />
                    <button type='submit' onClick={handelSubmit} className='btn-regular'>Sign up</button>
                </form>
                <div>

                    <Link style={{ textDecoration: "none" }} to='/login'>
                        <p className='text-danger link-text'>Already have an account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;