import React from 'react'
import rainy from '../assets/rainy.svg'
import WeatherCard from './WeatherCard'
import DateSelector from './DateSelector'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Cards = ({ location, once, refresh, setRefresh }) => {
    const [formData, setFormData] = useState({ lat: location.latitude, long: location.longitude })
    const [data, setData] = useState([])
    const [nowdata, setNowData] = useState({})

    function convertUnixToNormal(unixTimestamp) {
        // Create a new Date object with the Unix timestamp
        const date = new Date(unixTimestamp * 1000); // Unix timestamp is in seconds, JavaScript Date object uses milliseconds

        // Extract the day, month, and year from the Date object
        const day = date.getDate().toString().padStart(2, '0'); // Pad with leading zero if needed
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // January is 0!
        const year = date.getFullYear();

        // Format the date in dd-mm-yyyy format
        return `${day}-${month}-${year}`;
    }

    const apisender = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        setFormData({ lat: location.latitude, long: location.longitude });
        await axios.get(`http://localhost:8080/5day-zip-fetch?lat=${location.latitude}&long=${location.longitude}`, formData, config).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        });
        await axios.get(`http://localhost:8080/current-zip-fetch?lat=${location.latitude}&long=${location.longitude}`, formData, config).then((response) => {
            setNowData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        apisender()
        if (refresh) {
            setRefresh(false);
            apisender();
        }
    }, [location])

    return (
        <div className='flex flex-row justify-around mt-16 w-[100%] phone:w-[95%] mx-auto laptop:w-[95%]'>
            <div className='mt-8 space-y-3 block'>
                <DateSelector />
                <p>High Temperature</p>
                <p>Low Temperature</p>
                <p>Humidity</p>
                <p>Sunrise Time</p>
                <p>Sunset Time</p>
            </div>
            <div className='flex overflow-x-auto py-4 space-x-4'>
                {data[0]?.map((day, index) => (
                    <WeatherCard
                        key={index}
                        date={convertUnixToNormal(day.dt)}
                        weather={data}
                        index={index}
                        nowdata={nowdata}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cards