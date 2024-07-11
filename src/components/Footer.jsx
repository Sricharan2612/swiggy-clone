import React from 'react';
//Components
import FooterLinks from './FooterLinks';
//Data
import { bestRestaurantPlaces } from '../data';
import { bestCuisines } from '../data';
import { footerLinksData } from '../data';


const Footer = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto px-2 m-10 '>
                <div className='mb-8'>
                    <h3 className='text-[1.5rem] font-bold'>Best Places to Eat Across Cities</h3>
                    <div className='flex shrink-0 flex-wrap gap-2 mt-8 font-semibold justify-center'>
                        {bestRestaurantPlaces.map((place, index) => (
                            <div key={index} className='border-[2px] w-auto p-3 rounded-md'>{place.location}</div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className='text-[1.5rem] font-bold'>Best Cuisines Near Me</h3>
                    <div className='flex shrink-0 flex-wrap gap-2 mt-8 font-semibold justify-center'>
                        {bestCuisines.map((cuisine, index) => (
                            <div key={index} className='border-[2px] w-auto p-3 rounded-md'>{cuisine.type}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center md:gap-16 bg-[#F0F0F5] h-auto md:h-[8rem] p-4'>
                <h1 className='font-bold text-[1.7rem] w-fit md:w-[30%] text-[#3D4047] text-center md:text-left leading-tight mt-6 md:mt-0'>For better experience,download the Swiggy app now</h1>
                <div className='flex gap-5 w-[30%] md:w-auto justify-center '>
                    <img src="images/play_store.svg" alt="playstore" />
                    <img src="images/app_store.svg" alt="appstore" />
                </div>
            </div>
            <div className='bg-black text-white py-5 sm:p-16'>
                <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row justify-between gap-5 text-center">
                    <div className='flex flex-col justify-start items-center sm:items-start'>
                        <img src="images/swiggy_black.svg" alt="swiggy" />
                        <p>&copy; 2024 sricharan Pvt. Ltd</p>
                    </div>
                    {
                        footerLinksData.map((flink, index) => (
                            <FooterLinks title={flink.title} links={flink.links} key={index} />
                        ))
                    }
                </div>
            </div >
        </>
    );
};

export default Footer;
