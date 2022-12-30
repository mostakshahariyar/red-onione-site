import React from 'react';

const Breakfast = (props) => {
        console.log(props);
        return (
                <div>
                        <h1>{props?.dinner?.name}</h1>
                </div>
        );
};

export default Breakfast;