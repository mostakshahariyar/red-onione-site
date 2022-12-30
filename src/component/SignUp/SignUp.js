import React, { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import logo from "../../image/logo2.png"

const SignUp = () => {
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
                <h2 className='text-danger my-3 text-center'>Sign up</h2>
                <form onSubmit={handelSubmit}>
                    <input className="input" type="email" onBlur={handelEmail} placeholder='Enter your email' required />
                    <br />
                    <br />
                    <input className="input" type="password" onBlur={handelPassword} placeholder='Password' name="" id="" required />
                    <br />
                    <br />
                    <button className='btn-regular'>Sign up</button>
                </form>
                <div>

                    <p className='text-danger'>Already register? <Link style={{ textDecoration: "none", color: "blue" }} to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;