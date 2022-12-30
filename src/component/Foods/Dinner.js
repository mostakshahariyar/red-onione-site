import React from 'react';

const Dinner = (props) => {
        console.log("dinner", props?.dinner)
        return (
                <div>
                        <h1>{props?.dinner?.name}</h1>
                </div>
        );
};

export default Dinner;