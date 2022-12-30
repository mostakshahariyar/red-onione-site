import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import burger from "../../image/food1.png";
import delivery from "../../image/food2.png";
import fastFood from "../../image/food3.png";
import {TbTruckDelivery} from "react-icons/tb"
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLocationPlus } from "react-icons/bi";

const FoodsCard = () => {
        return (<>
                <div className="container">
                        <h1>Why you choose us</h1>
                        <p className='blockquote'>Barton waited twenty
                                always repair in within we do. An delighted offending curiosity
                                my is dashwoods. </p>
                </div>
                <Container>
                        <Row className="container d-flex justify-content-around align-self-center">
                        <Col className='mb-5 p-3' sm style={{ width: '30rem' }}>
                                <Card.Img className='rounded' variant="top" src={burger} />
                                <Card.Body>
                                        <Card.Title className="text-danger h4"><IoMdNotificationsOutline className="me-2"/>A Good Auto Responder</Card.Title>
                                        <Card.Text>
                                        Keep your system in sync with automatic web hook based notification each time link is paid and how we dream about our future.


                                        </Card.Text>
                                        <Button variant="danger">See more</Button>
                                </Card.Body>
                        </Col>
                        <Col className='mb-5 p-3' sm style={{ width: '30rem' }}>
                                <Card.Img className='rounded' variant="top" src={delivery} />
                                <Card.Body>
                                        <Card.Title className="text-danger h4"><BiLocationPlus className="me-2 text-danger"/>Home Delivery</Card.Title>
                                        <Card.Text>
                                        Keep your system in sync with automatic web hook based notification each time link is paid and how we dream about our future.


                                        </Card.Text>
                                        <Button variant="danger">See more</Button>
                                </Card.Body>
                        </Col>
                        <Col className='mb-5 p-3' sm style={{ width: '30rem' }}>
                                <Card.Img className='rounded' variant="top" src={fastFood} />
                                <Card.Body>
                                        <Card.Title className="text-danger h4"> <TbTruckDelivery className='me-2'/>Fast Delivery</Card.Title>
                                        <Card.Text>
                                                Keep your system in sync with automatic web hook based notification each time link is paid and how we dream about our future.


                                        </Card.Text>
                                        <Button variant="danger">See more</Button>
                                </Card.Body>
                        </Col>
                </Row>
                </Container>
        </>
        );
};

export default FoodsCard;