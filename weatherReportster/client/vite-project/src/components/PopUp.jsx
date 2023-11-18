import React from 'react'
import { useState } from 'react'
import LocationService from '../utils/LocationService'

const PopUp = ({ cancelPopup, setLocation, location }) => {
    const [error, setError] = useState(null);
    const [clicked, setClicked] = useState(false)

    const handleLocation = () => {
        setClicked(true)
        LocationService(
            (newLocation) => {
                setLocation(newLocation);
            },
            (errorMessage) => {
                setError(errorMessage);
            }
        );
    };

    localStorage.setItem('latitude', location.latitude)
    localStorage.setItem('longitude', location.longitude)

    return (
        <div className='w-[100%]'>
            <div className='bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg px-10 py-8 rounded-2xl shadow-xl max-w-sm mx-auto text-center'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>Location Access</h3>
                <p className='text-gray-600 mb-5'>
                    Share your location to get accurate weather data. We respect your privacy and ensure your data is safe.
                </p>
                <div className='flex flex-row justify-around'>
                    <button
                        onClick={handleLocation}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300'
                    >
                        Get Location
                    </button>
                    <button
                        onClick={() => cancelPopup(false)}
                        className=' text-gray-500 hover:text-gray-600 transition-colors duration-300 my-auto'
                    >
                        Cancel
                    </button>
                </div>
                {clicked && location.latitude != 0 && location.longitude != 0 && (
                    <div className='text-gray-800 mt-3'>
                        <p>Latitude: {location.latitude}</p>
                        <p>Longitude: {location.longitude}</p>
                    </div>
                )}
                {location.latitude == 0 && location.longitude == 0 && (
                    <p className='text-red-500 mt-3'>Allow location access for smoother performance</p>
                )}
                {error && <p className='text-red-500 mt-3'>{error}</p>}
            </div>
        </div>
    )

}

export default PopUp