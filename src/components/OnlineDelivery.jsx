import React, { useEffect, useState } from 'react';
import Card from './Card';

const OnlineDelivery = () => {
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurants = async () => {
        const res = await fetch('http://localhost:5000/top-restaurant-chains');
        const data = await res.json();
        setRestaurants(data);
    };

    useEffect(() => {
        fetchRestaurants();
    });
    return (
        <div className='max-w-[1200px] mx-auto z-[-1] px-2'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[1.5rem] font-bold'>Restaurants with online food delivery in Bhubaneswar</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-3'>
                {
                    restaurants.map((restaurant, index) => (
                        <Card restaurant={restaurant} key={index} />
                    ))
                }
            </div>
            <hr className='my-8 border-[1px]' />
        </div>
    );
};

export default OnlineDelivery;
