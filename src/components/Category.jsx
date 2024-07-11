import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [slide, setSlide] = useState(0);
    const fetchCategory = async () => {
        const res = await fetch('http://localhost:5000/categories');
        const data = await res.json();
        setCategories(data);
    };

    const nextSlideHandler = () => {
        if (categories.length - 8 === slide) return false;
        setSlide(slide + 3);

    };
    const prevSlideHandler = () => {
        if (slide === 0) return false;
        setSlide(slide - 3);

    };

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex items-center justify-between mt-6'>
                <h3 className='text-[1.5rem] font-bold'>What's on your mind?</h3>
                <div className="icons flex ">
                    <div onClick={prevSlideHandler} className='flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'>
                        <FaArrowLeft />
                    </div>
                    <div onClick={nextSlideHandler} className='flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex overflow-hidden'>
                {categories.map((category, index) => (
                    <div key={index} className='w-[150px] shrink-0 duration-500' style={{ transform: `translateX(${-slide * 100}%) ` }}>
                        <img src={`http://localhost:5000/images/${category.image}`} alt="category" className='cursor-pointer' />
                    </div>
                ))}
            </div>
            <hr className='my-8 border-[1px]' />
        </div>
    );
};

export default Category;
