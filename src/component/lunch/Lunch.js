import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';


const Lunch = () => {
        const [breakFast, setBreakfast] = useState([])

        useEffect(() => {

                fetch('https://raw.githubusercontent.com/mostakshahariyar/red-onione_data/main/dinner.json')
                        .then(res => res.json())
                        .then(data => setBreakfast(data))
        }, [])
        return (
                <div>

                <div>
                        <div className='d-grid justify-content-center aline-items-center foods-container'>
                                {
                                        breakFast?.map(item =>
                                        (
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
                                        )
                                        )
                                }
                        </div>
                </div>
        </div>
        );
};

export default Lunch;