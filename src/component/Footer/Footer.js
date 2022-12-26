import React from 'react';
import logo from '../../image/logo.png'

const Footer = () => {
        return (
                <div className="bg-dark p-3">
                       <div className="d-md-flex d-block mx-md-5 mx-0 justify-content-between pb-3">
                                <div className='me-md-5 pt-3 pt-md-0'>
                                        <img src={logo}
                                         alt="logo this site" 
                                         width="150"
                                        height="50"
                                        className="d-inline-block align-top"
                                        style={{cursor:'pointer'}}
                                         />
                                </div>
                                <div className="d-md-flex d-block justify-content-between">
                                        <div className='text-light px-5 text-start'>
                                                <p>About Online food</p>
                                                <p>Read our blog</p>
                                                <p>Sign up to deliver</p>
                                                <p>Add your restaurant</p>
                                        </div>
                                        <div className='text-light px-5 text-start'>
                                                <p>Get help</p>
                                                <p>Read FAQs</p>
                                                <p>View all cites</p>
                                                <p>Restaurant near me</p>
                                        </div>
                                </div>
                       </div>
                        <div className="d-md-flex d-block mx-0 justify-content-between mx-md-5 py-3">
                                <div>
                                        <small className='text-secondary'>copyright © 2022 online food</small>
                                </div>
                                <div className="">
                                        <div className="d-md-flex d-block text-light">
                                                <p className='mx-5'>Privacy Policy</p>
                                                <p className='mx-5'>Terms of Use</p>
                                                <p className='mx-5'>Price</p>
                                        </div>
                                </div>
                        </div>
                      
                </div>
        );
};

export default Footer;