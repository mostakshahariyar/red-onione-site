import React from 'react';
import Banner from '../Home/Banner/Banner';
import FoodsCard from '../FoodsCard/FoodsCard';
import Link from '../Home/Link/Link';

const CommonElements = () => {
        return (
                <div>
                        <Link/>
                        <Banner/>
                        <FoodsCard/>
                </div>
        );
};

export default CommonElements;