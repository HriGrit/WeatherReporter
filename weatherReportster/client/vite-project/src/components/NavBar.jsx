import React from 'react'
import logo from '../assets/logo.svg'
import logotext from '../assets/logotext.svg'
import refresh from '../assets/refresh.svg'

const NavBar = () => {
    return (
        <div className='flex flex-shrink-0 h-[80px] phone:h-[47px] bg-black/60 justify-between px-10 pr-20 phone:px-20 phone:pr-72'>
            <div className='flex flex-row gap-2'>
                <img className='w-[50px] phone:w-[33px]' src={logo} alt="logo" />
                <img className='w-[170px] phone:w-[129px]' src={logotext} alt="logotext" />
            </div>
            <div className='flex flex-col my-auto justify-center text-center phone:flex-row phone:gap-2'>
                <img className='w-[32px] phone:w-[26px]' src={refresh} alt="refresh" />
                <p className='text-[24px] phone:text-[18px] font-bold text-white my-auto'>Refresh</p>
            </div>
        </div>
    )
}

export default NavBar