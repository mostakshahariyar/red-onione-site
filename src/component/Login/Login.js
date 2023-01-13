import React, { useState } from 'react';
import "../SignUp/Signup.css"
import { Link } from 'react-router-dom';
import logo from "../../image/logo2.png"
import useAuth from '../hooks/useAuth';

const Login = () => {
        const {user, signInUsingGoogle} = useAuth();
        console.log(user);
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();

        
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
                //signinUser(email, password);
                console.log(email, password);
                // navigate("/home");

        }
        return (
                <div className='login-from'>
                        <Link to="/">
                                <img className='img-fluid px-3' style={{ width: "25rem" }} src={logo} alt="logo" />
                        </Link>
                        <div className='login-from-children'>
                                <h2 className='text-danger my-3 text-center'>Please Login</h2>
                                <form onSubmit={handelSubmit}>
                                        <input className='input' type="email" onBlur={handelEmail} placeholder='Email' required />
                                        <br />
                                        <br />
                                        <input className='input' type="password" onBlur={handelPassword} placeholder='Password' name="" id="" required />
                                        <br />
                                        <br />
                                        <button className='btn-regular'>Login</button>
                                        <br />
                                        <br />
                                </form>
                                <div>
                                        <button className='btn-regular'
                                        onClick={signInUsingGoogle}
                                        >Google sign in</button>
                                        <Link style={{ textDecoration: "none"}}  to='/signup'>
                                        <p className='text-danger link-text mt-1'>You have no account
                                        </p>
                                        </Link>
                                </div>
                        </div>
                </div>
        );
};

export default Login;