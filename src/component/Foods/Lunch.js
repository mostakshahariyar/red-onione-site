import React from 'react';

const Lunch = (props) => {
        console.log("lunch", props)
        return (
                <div>
                        <h1>{props?.dinner?.name}</h1>
                </div>
        );
};

export default Lunch;