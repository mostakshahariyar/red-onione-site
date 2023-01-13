import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../image/logo2.png"
import shopping from '../../../image/shopping cart.png'
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import'../../SignUp/Signup.css'


const Link = () => {
  const {user, logOut} = useAuth();
  const navigate = useNavigate();
  const handelSignUp = () =>{
    navigate('/signup')
  }
  const handelSignIn = () =>{
    navigate('/login')
  }
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src={logo}
              width="100%"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <img
              src={shopping}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ cursor: 'pointer' }}
            />
          </Navbar.Text>
          <Navbar.Text>
            {
              user.email ? <Button onClick={logOut} variant='light' className="pointer square text-dark rounded-5 px-md-3 py-md-2 mx-md-2 m-0">Logout</Button> : <Button onClick={handelSignIn} variant='light' className="pointer square text-dark rounded-5 px-md-3 py-md-2 mx-md-2 m-0">Login</Button>
            }
          </Navbar.Text>
          <Navbar.Text>
            {
              user.email ? <img  style={{width: "30px"}} src={user.photoURL} className='rounded-circle user-image'/> : <Button onClick={handelSignUp} variant='danger' className="pointer square text-light rounded-5 px-3 py-2 mx-2">Sign up</Button>
            }
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Link;