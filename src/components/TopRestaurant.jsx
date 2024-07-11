import React, { useEffect, useState } from 'react';
import Card from './Card';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


const TopRestaurant = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchRestaurants = async () => {
        const res = await fetch('http://localhost:5000/top-restaurant-chains');
        const data = await res.json();
        setRestaurants(data);
    };

    const nextSlideHandler = () => {
        console.log(restaurants.length);
        console.log(slide);
        if (restaurants.length - 4 === slide - 1) return false;
        setSlide(slide + 3);

    };
    const prevSlideHandler = () => {
        if (slide === 0) return false;
        setSlide(slide - 3);

    };

    useEffect(() => {
        fetchRestaurants();
    });
    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[1.5rem] font-bold'>Top restaurant chains in Bhubaneswar</h3>
                <div className="icons flex ">
                    <div onClick={prevSlideHandler} className='flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'>
                        <FaArrowLeft />
                    </div>
                    <div onClick={nextSlideHandler} className='flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex gap-7 overflow-hidden mt-3'>
                {restaurants.map((restaurant, index) => (
                    <Card restaurant={restaurant} key={index} style={{
                        transform: `translateX(${-slide * 100}%)`
                    }} width='w-full md:w-[270px]' />
                ))}
            </div>
            <hr className='my-8 border-[1px]' />
        </div>
    );
};

export default TopRestaurant;;
