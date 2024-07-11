import React from 'react';
import { MdStars } from "react-icons/md";


const Card = ({ restaurant, style, width }) => {
    return (
        <div className={`${width} shrink-0 hover:scale-[0.95] hover:duration-[50ms] ${style ? 'duration-500' : 'duration-0'} mb-3}`} style={style}>
            <div className="h-[180px] rounded-xl overflow-hidden relative">
                <img className='object-cover w-full h-full' src={`http://localhost:5000//images/${restaurant.image}`} alt="restaurant" />
                <div className='overlay-div w-full h-full absolute top-0 flex items-end px-3 py-2 text-[1.3rem] font-extrabold text-white tracking-tighter'>{restaurant.offer}</div>
            </div>
            <div className="description px-3 w-[100%] text-[17px]">
                <h4 className='font-bold text-[18px]'>{restaurant.title}</h4>
                <div className='font-semibold flex gap-1 text-[16px]'>
                    <p className='flex items-center gap-1'><MdStars className='text-green-700 text-[1.2rem]' />{`${restaurant.rating} •`}</p>
                    <p>{`${restaurant.minTime}-${restaurant.maxTime} mins`}</p>
                </div>
                <p className='text-slate-700'>{restaurant.name}</p>
                <p className='text-slate-700'>{restaurant.place}</p>
            </div>
        </div >
    );
};

export default Card;;
