import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../image/logo2.png"
import shopping from '../../../image/shopping cart.png'
import Button from 'react-bootstrap/Button';

const Link = () => {
        return (
                <Navbar bg="light" variant="light">
                <Container>
                  <Navbar.Brand href="#home">
                        <img
                        src={logo}
                        width="100%"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
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
                        style={{cursor:'pointer'}}
                        />
                    </Navbar.Text>
                    <Navbar.Text>
                    <Button variant='light' className="pointer square text-dark rounded-5 px-md-3 py-md-2 mx-md-2 m-0">Login</Button>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Button variant='danger' className="pointer square text-light rounded-5 px-3 py-2 mx-2">Sign up</Button>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        );
};

export default Link;