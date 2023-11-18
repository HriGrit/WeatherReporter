import React from 'react'
import rainy from '../assets/rainy.svg'
import WeatherCard from './WeatherCard'
import DateSelector from './DateSelector'

const Cards = () => {
    return (
        <div className='flex flex-row justify-around mt-16 w-[85%] mx-auto'>
            <div className='mt-3 space-y-3'>
                <DateSelector />
                <p>High Temperature</p>
                <p>Low Temperature</p>
                <p>Humidity</p>
                <p>Sunrise Time</p>
                <p>Sunset Time</p>
            </div>
            <WeatherCard date="20 June 2023" />
            <WeatherCard date="21 June 2023" />
            <WeatherCard date="22 June 2023" />
            <WeatherCard date="23 June 2023" />
            <WeatherCard date="24 June 2023" />
        </div>
    )
}

export default Cards