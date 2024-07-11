import React from 'react';

const FooterLinks = ({ title, links }) => {
    return (
        <div className='footer-links'>
            <h2 className='mb-2 font-bold'>{title}</h2>
            <ul>
                {links.map((linkItem, index) => (
                    <li key={index}>{linkItem.link}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;
