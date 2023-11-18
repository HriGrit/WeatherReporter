import React from 'react'
import rainy from '../assets/rainy.svg'

const WeatherCard = ({ date }) => {
    return (
        <>
            <div className='w-[12.5%] text-center space-y-2'>
                <p className='text-[#444444] font-bold text-lg'>{date}</p>
                <div className=' bg-gradient-to-br from-slate-800/75 to-slate-800 p-3 rounded-lg space-y-3 text-white text-base'>
                    <div className='flex flex-row justify-around mb-4 gap-2'>
                        <img className='w-[full]' src={rainy} alt="rain" />
                        <p className='my-auto mr-2 text-xl'>Rainy</p>
                    </div>
                    <hr />
                    <p>23°C / 63°F</p>
                    <p>17°C / 43°F </p>
                    <p>76%</p>
                    <p>6:21am</p>
                    <p>6:21pm</p>
                </div>
            </div>
        </>
    )
}

export default WeatherCard