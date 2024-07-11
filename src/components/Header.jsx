import React, { useState } from 'react';
// ICONS
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { CiGps } from "react-icons/ci";
import { GoHistory } from "react-icons/go";

function Header() {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    };
    const hideSideMenu = () => {
        setToggle(false);
    };

    const navLinks = [
        { name: 'Search', icon: <IoSearch /> },
        { name: 'Offers', icon: <BiSolidOffer />, sup: 'New' },
        { name: 'Help', icon: <IoHelpBuoyOutline /> },
        { name: 'Sign In', icon: <FaRegUser /> },
        { name: 'Cart', icon: <BsCart2 /> },
    ];
    return (
        <>
            <div onClick={hideSideMenu} className="black-overlay w-full h-full fixed duration-500" style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden',
                zIndex: 99
            }}>
                <div onClick={(e) => { e.stopPropagation(); }} className='w-full md:w-[500px] h-[100vh] bg-white absolute duration-[400ms] flex justify-center items-start py-20 px-8' style={{
                    left: toggle ? '0%' : '-100%'
                }}>

                    <div className='flex flex-col gap-16'>
                        <input type="text" className='shadow-[5px_5px_30px_rgba(0,0,0,0.2)] outline-none py-4 px-3 w-[350px] rounded' placeholder='Search for area, street name..' />
                        <div>
                            <div className='border border-gray-400 p-4 rounded mb-5'>
                                <h4 className='font-semibold flex items-center gap-1 mb-1'><CiGps fontSize={20} />Get current location</h4>
                                <p className='text-[14px] font-light ps-6'>Using GPS</p>
                            </div>
                            <div className='border border-gray-400 p-4 rounded'>
                                <h4 className='font-semibold flex items-center gap-1 mb-1'><GoHistory />Berhampur</h4>
                                <p className='text-[14px] font-light ps-5'>Odisha, India</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <header className='p-[15px] shadow-xl text-[#686b78]'>
                <div className="max-w-[1300px] mx-auto flex items-center">
                    <div className='w-[100px]'>
                        <img src="images/logo.png" className='w-full' alt="" />
                    </div>
                    <div>
                        <span className='font-bold border-b-[3px] border-black hover:text-[#fc8019] hover:border-[#fc8019]'>Berhampur</span>, Odisha, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019] cursor-pointer' />
                    </div>
                    <nav className='hidden md:flex list-none gap-10 ml-auto text-[#414449] font-[500] '>
                        {navLinks.map((link, index) => (
                            <li className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer' key={index}>
                                {link.icon}
                                {link.name}
                                <sup className='text-[#fc8019]'>{link.sup}</sup>
                            </li>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
