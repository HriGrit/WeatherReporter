import React from 'react'
import rainy from '../assets/rainy.svg'
import { UnixtoTime } from '../utils/UnixtoTime';
import Current from './Current';

const WeatherCard = ({ date, weather, index, nowdata }) => {
    const weatherC = weather[0];
    const weatherF = weather[1];
    return (
        <>
            <div className='w-[15.5] phone:w-[15.5%] text-center space-y-2'>
                <p className='text-[#444444] font-bold text-lg'>{date}</p>
                <div className=' bg-gradient-to-br from-slate-800/75 to-slate-800 p-3 rounded-lg space-y-3 text-white text-base'>
                    <Current data={nowdata} />
                    <hr />
                    <p>{weatherC[index].main.temp_max}°C / {weatherF[index].main.temp_max}°F</p>
                    <p>{weatherC[index].main.temp_min}°C / {weatherF[index].main.temp_min}°F</p>
                    <p>{weatherC[index].main.humidity}%</p>
                    <p>{UnixtoTime(nowdata?.sun?.sunrise)}</p>
                    <p>{UnixtoTime(nowdata?.sun?.sunset)}</p>
                </div>
            </div>
        </>
    )
}

export default WeatherCard