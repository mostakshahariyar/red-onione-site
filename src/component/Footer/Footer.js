import React from 'react';
import logo from '../../image/logo.png'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
        return (
                <div className="bg-dark p-3">
                        <Container>
                                <Row>
                                        <Col>
                                                <img src={logo}
                                                        alt="logo this site"
                                                        width="150"
                                                        height="50"
                                                        className="d-inline-block align-top"
                                                        style={{ cursor: 'pointer' }}
                                                />
                                        </Col>
                                        <Col>
                                                <Container>
                                                        <Row>
                                                        <Col className='text-light'>
                                                                <p
                                                                        style={{ cursor: 'pointer' }}>About Online food</p>
                                                                <p
                                                                        style={{ cursor: 'pointer' }}>Read our blog</p>
                                                                <p
                                                                        style={{ cursor: 'pointer' }}>Sign up to deliver</p>
                                                                <p
                                                                        style={{ cursor: 'pointer' }}>Add your restaurant</p>
                                                        </Col>
                                                        <Col className='text-light text-start'>
                                                                <p
                                                                        style={{ cursor: 'pointer' }}>Get help</p>
                                                                <p
                                                                        style={{ cursor: 'pointer' }}>Read FAQs</p>
                                                                <p
                                                                        style={{ cursor: 'pointer' }}>View all cites</p>
                                                                <p
                                                                        style={{ cursor: 'pointer' }}>Restaurant near me</p>
                                                        </Col>
                                                        </Row>
                                                </Container>
                                        </Col>
                                </Row>
                        </Container>
                        <Container>
                                <Row>
                                        <Col>
                                                <small className='text-secondary'>copyright © 2022 online food</small>
                                        </Col>
                                        <Col>
                                        <Container>
                                                        <Row className="d-md-flex d-block text-light">
                                                                <Col
                                                                        style={{ cursor: 'pointer' }}>Privacy Policy</Col>
                                                                <Col
                                                                        style={{ cursor: 'pointer' }}>Terms of Use</Col>
                                                                <Col
                                                                        style={{ cursor: 'pointer' }}>Price</Col>
                                                        </Row>
                                                </Container>
                                        </Col>
                                </Row>
                        </Container>

                </div>
        );
};

export default Footer;