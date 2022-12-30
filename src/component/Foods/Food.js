import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';

const Food = () => {
        return (
               
                <Tabs
                defaultActiveKey="profile"
                id="tab-example"
                className="mb-3 pt-1 d-flex justify-content-center align-items-center"
                //variant='bg-danger'
              >
                <Tab eventKey="home" title="Breakfast">
                  <Breakfast/>
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                  <Lunch/>
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                <Dinner/>
                </Tab>
              </Tabs>
               
        );
};

export default Food;