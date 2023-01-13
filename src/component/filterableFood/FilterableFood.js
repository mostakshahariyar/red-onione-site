import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Breakfast from '../breakfast/Breakfast';
import Lunch from '../lunch/Lunch';
import Dinner from '../dinner/Dinner';

const FilterableFood = () => {
        return (
                <div className='container mt-4'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="breakfast">
                                <Row>
                                        <Col sm={12}>
                                                <Nav variant="pills" className="d-flex justify-content-center align-items-center gap-4">
                                                        <Nav.Item>
                                                                <Nav.Link eventKey="breakfast">Breakfast</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                                <Nav.Link eventKey="lunch">Lunch</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                                <Nav.Link eventKey="dinner">Dinner</Nav.Link>
                                                        </Nav.Item>
                                                </Nav>
                                        </Col>
                                        <Col sm={12}>
                                                <Tab.Content>
                                                        <Tab.Pane eventKey="breakfast">
                                                                <Breakfast />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="lunch">
                                                                <Lunch />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="dinner">
                                                                <Dinner/>
                                                        </Tab.Pane>
                                                </Tab.Content>
                                        </Col>
                                </Row>
                        </Tab.Container>
                </div>
        );
};

export default FilterableFood;