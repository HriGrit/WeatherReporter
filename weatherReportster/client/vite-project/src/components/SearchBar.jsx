import React, { useEffect, useState } from 'react'
import map from '../assets/map.svg'
import search from '../assets/search.svg'
import axios from 'axios'

const SearchBar = ({ location }) => {
    const [place, setPlace] = useState({ city: '', state: '' })

    const apisender = async (location) => {
        if (location.latitude === 0 && location.longitude === 0) {
            setPlace({ city: 'Antarctic', state: 'Antarctic' });
        } else {
            try {
                const response = await axios({
                    method: 'post',
                    url: 'https://weather-reporter-coral.vercel.app/zip',
                    data: {
                        lat: location.latitude,
                        lon: location.longitude
                    },
                    // Only include if you need to send/receive cookies or auth headers
                    withCredentials: true
                });
                setPlace({ city: response.data[0].name, state: response.data[0].state });
            } catch (error) {
                console.error('Error fetching the location:', error);
            }
        }
    };

    useEffect(() => {
        apisender(location)
    }, [location]);

    return (
        <>
            <div className='w-[75%] flex flex-row justify-between mx-auto mt-24'>
                <div className=''>
                    <div className='flex flex-row gap-2'>
                        <img width="30px" src={map} alt="location" />
                        <p className='text-[#1D2540] font-bold text-2xl'>{place.city}, {place.state}</p>
                    </div>
                    <h2 className='ml-[5px] text-sm font-normal text-[#606060]'>27°10'36'' N & 78°0'29'' E</h2>
                </div>
                <div className='flex flex-row bg-white rounded-xl px-4 shadow-lg'>
                    <input className='pr-[100px] h-[47px] rounded-xl placeholder:italic my-auto focus:outline-none' type="text" placeholder='Search Your City here...' />
                    <img src={search} alt="search" />
                </div>
            </div>
            <hr className='mt-4 w-[75%] mx-auto' />
        </>
    )
}

export default SearchBar