import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'
import PopUp from '../components/PopUp'
import { useState, useEffect } from 'react'
const HomePage = () => {
    const [PopupOpen, setPopupOpen] = React.useState(false)
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

    useEffect(() => {
        const timer = setTimeout(() => {
            setPopupOpen(true);
            console.log('5 seconds passed');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    console.log(location.latitude, location.longitude);

    return (
        <>
            <div className={`z-2 h-[100vh] bg-gradient-to-br from-blue-200 to-gray-300 ${PopupOpen ? 'filter blur-sm' : ''}`}>
                <NavBar />
                <SearchBar location={location} />
                <Cards />
            </div>
            {PopupOpen && <div className='z-1 fixed top-[25%] left-[35%]'>
                <PopUp cancelPopup={setPopupOpen} location={location} setLocation={setLocation} />
            </div>}
        </>
    )
}

export default HomePage