import React from 'react';
import logo from "../../../assets/Logo.png";

const Header = () => {
    return (
        <div className='mx-auto lg:w-[227px] lg:h-[48px]  w-[133.53px] h-[28.24px] lg:pt-[53px] 
        pt-[46px]'>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;