import React from 'react'
import logo from '../assets/logo.svg'
import logotext from '../assets/logotext.svg'
import refresh from '../assets/refresh.svg'

const NavBar = () => {
    return (
        <div className='flex flex-shrink-0 h-[47px] bg-black/60 justify-between px-20 pr-72'>
            <div className='flex flex-row gap-2'>
                <img width="33px" src={logo} alt="logo" />
                <img width="129px" src={logotext} alt="logotext" />
            </div>
            <div className='flex flex-row gap-2'>
                <img width="26px" src={refresh} alt="refresh" />
                <p className='w-[53px] font-bold text-white my-auto'>Refresh</p>
            </div>
        </div>
    )
}

export default NavBar