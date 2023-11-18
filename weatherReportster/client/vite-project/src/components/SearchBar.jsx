import React, { useEffect, useState } from 'react'
import map from '../assets/map.svg'
import search from '../assets/search.svg'
import axios from 'axios'

const SearchBar = ({ location, setLocation, setRefresh }) => {
    const [place, setPlace] = useState({ city: '', state: '' })
    const [formData, setFormData] = useState({ lat: location.latitude, long: location.longitude });
    const [coordinates, setCoordinates] = useState('');
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);
    const [dropdowndata, setDropdowndata] = useState([]);

    function convertCoordinatesToDMS() {
        const lat = parseFloat(localStorage.getItem('latitude'));
        const lon = parseFloat(localStorage.getItem('longitude'));

        if (isNaN(lat) || isNaN(lon)) {
            return "Invalid Coordinates";
        }

        const latDirection = lat >= 0 ? 'N' : 'S';
        const lonDirection = lon >= 0 ? 'E' : 'W';

        const convertToDMS = (coord, isLatitude) => {
            const absCoord = Math.abs(coord);
            const degrees = Math.floor(absCoord);
            const minutes = Math.floor((absCoord - degrees) * 60);
            const seconds = ((absCoord - degrees) * 3600 - minutes * 60).toFixed(2);

            const direction = isLatitude ? latDirection : lonDirection;

            return `${degrees}°${minutes}'${seconds}" ${direction}`;
        };

        const latitudeDMS = convertToDMS(lat, true);
        const longitudeDMS = convertToDMS(lon, false);
        console.log(latitudeDMS, longitudeDMS);
        const cords = `${latitudeDMS} ${longitudeDMS}`;

        return cords;
    }

    const apisender = async () => {
        if (location.latitude === 0 && location.longitude === 0) {
            setPlace({ city: 'Antartic', state: 'Antartic' })
        } else {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            setFormData({ lat: localStorage.getItem("latitude"), long: localStorage.getItem("longitude") });
            await axios.post("https://weather-reporter-coral.vercel.app/zip", formData, config).then((response) => {
                localStorage.setItem('name', response.data[0].name);
                setPlace({ city: response.data[0].name, state: response.data[0].country })
                setCoordinates(convertCoordinatesToDMS());
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    const namesender = async (name) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        await axios.get(`https://weather-reporter-coral.vercel.app/api?name=${name}`, config).then((response) => {
            console.log(response.data);
            setDropdowndata(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleChange = (e) => {
        setName(e.target.value);
        namesender(e.target.value);
    }

    const handleOnClick = (lat, long) => () => {
        setLocation({ latitude: lat, longitude: long });
        localStorage.setItem('latitude', lat);
        localStorage.setItem('longitude', long);
        setRefresh(true);
        apisender();
    }

    console.log(name);

    useEffect(() => {
        apisender()
        if (name.length > 0) {
            setShow(true);
        } if (name.length === 0) {
            setShow(false);
        }
    }, [location, name]);

    return (
        <>
            <div className='w-[90%] flex flex-col-reverse phone:flex-row phone:justify-between justify-around mx-auto mt-12 phone:mt-24 laptop:w-[75%] space-y-4'>
                <div className='mb-4'>
                    <div className='flex flex-row gap-2'>
                        <img width="30px" src={map} alt="location" />
                        <p className='text-[#1D2540] font-bold text-2xl'>{place.city}, {place.state}</p>
                    </div>
                    <h2 className='ml-[5px] text-sm font-normal text-[#606060]'>{coordinates}</h2>
                </div>
                <div className=' bg-white rounded-xl px-4 shadow-lg' onChange={handleChange}>
                    <div className='flex flex-row justify-between'>
                        <input className='pr-[100px] h-[47px] rounded-xl placeholder:italic my-auto focus:outline-none' type="text" placeholder='Search Your City here...' />
                        <img src={search} alt="search" />
                    </div>
                    <hr />
                    {show && <div className='fixed z-10 bg-white rounded-xl px-4'>
                        <p className=' px-4 h-[40px] mt-3 pr-[100px]'>Search Results</p>
                        <hr />
                        {dropdowndata.map((data) => {
                            return (
                                <div className=' px-4 h-[40px] mt-3 pr-[100px] hover:cursor-pointer' onClickCapture={handleOnClick(data.lat, data.lon)}>{data.name}, {data.country}</div>
                            )
                        })}
                    </div>
                    }
                </div>
            </div>
            <hr className='mt-4 w-[75%] mx-auto' />
        </>
    )
}

export default SearchBar