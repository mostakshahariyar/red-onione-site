import React from 'react';
import Banner from '../Home/Banner/Banner';
import FoodsCard from '../FoodsCard/FoodsCard';
import Link from '../Home/Link/Link';
import FilterableFood from '../filterableFood/FilterableFood';

const CommonElements = () => {
        return (
                <div>
                        <Link/>
                        <Banner/>
                        <FilterableFood />
                        <FoodsCard/>
                </div>
        );
};

export default CommonElements;