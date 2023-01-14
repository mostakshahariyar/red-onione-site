import React from 'react';
import Banner from '../Home/Banner/Banner';
import FoodsCard from '../FoodsCard/FoodsCard';
import Link from '../Home/Link/Link';
import FilterableFood from '../filterableFood/FilterableFood';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const CommonElements = () => {
        const navigate = useNavigate();
        const { isLogin } = useAuth();
        if(isLogin)
        {
               return <Spinner className='d-flex justify-content-center algin-items-center' animation="grow" variant="danger" />
        }
        
        return (
                <div>
                        <Link/>
                        <Banner/>
                        <FilterableFood />
                        <FoodsCard/>
                        <Footer/>
                </div>
        );
};

export default CommonElements;