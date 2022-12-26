import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./Banner.css"

const Banner = () => {
        return (
                <div className='banner-container'>
                        <div className="position-absolute w-100 h-50 d-flex flex-column justify-content-center align-items-center">
                                <h1>Best food waiting for your belly</h1>
                                <InputGroup className="w-50 rounded-5">
                                <Form.Control
                                style={{width: "50%"}}
                                placeholder="Search food items"
                                aria-label="search food items"
                                />
                                <InputGroup.Text>
                                <Button variant='danger' className="pointer square text-light rounded-5 px-5 py-2 mx-2 ">Search</Button>
                                </InputGroup.Text>
                                </InputGroup>
                        </div>
                </div>
        );
};

export default Banner;