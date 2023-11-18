import React from 'react'

const LocationService = (setLocation, setError) => {
    if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
    } else {
        console.log("Locating…");
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            setLocation({ latitude: latitude, longitude: longitude })
        }), (error) => {
            setError(error)
        }
    }
    if (location.latitude === 0 && location.longitude === 0) {
        console.log("Location not found")
    } else {
        console.log("Location found")

    }
}

export default LocationService