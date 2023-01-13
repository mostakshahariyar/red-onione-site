import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./Breakfast.css"
import { Col, Row } from 'react-bootstrap';

const Breakfast = () => {

        const [breakFast, setBreakfast] = useState([])

        useEffect(() => {

                fetch('https://raw.githubusercontent.com/mostakshahariyar/red-onione_data/main/breakfast.json')
                        .then(res => res.json())
                        .then(data => setBreakfast(data))
        }, [])

        return (
                <div>

                        <div>
                                <div className='d-grid aline-items-center foods-container'>
                                        {
                                                breakFast?.map(item =>
                                                (
                                                        <Row  md={2} lg={3} sm={1} className="g-4">
                                                                <Col>
                                                                        <Card
                                                                                key={item?.id}
                                                                                style={{ width: '20rem' }}
                                                                                border='0'
                                                                                className='food-card p-3'

                                                                        >
                                                                                <Card.Img variant="top" src={item?.img} />
                                                                                <Card.Body
                                                                                        className='text-center'
                                                                                >
                                                                                        <Card.Title>{item?.name}</Card.Title>
                                                                                        <Card.Subtitle className="mb-2 text-muted">{item?.title}</Card.Subtitle>
                                                                                        <Card.Text
                                                                                                className='fs-4 fw-semibold text-danger'
                                                                                        >
                                                                                                {item?.price}
                                                                                        </Card.Text>
                                                                                </Card.Body>
                                                                        </Card>
                                                                </Col>
                                                        </Row>
                                                )
                                                )
                                        }
                                </div>
                        </div>
                </div>
        );
};

export default Breakfast;