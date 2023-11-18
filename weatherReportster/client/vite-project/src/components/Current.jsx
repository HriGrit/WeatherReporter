import React from 'react'

const Current = ({ data }) => {

    if (Object.keys(data).length < 1) {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    } else {
        var id = data?.type[0].icon;
        return (
            <>
                <div className='flex flex-row justify-around mb-4 gap-2'>
                    <img src={`http://openweathermap.org/img/w/${id}.png`} alt="weather icon" className='w-16 h-16' />
                    <p className='my-auto mr-2 text-xl'>{data?.type[0]?.main}</p>
                </div>
            </>
        )
    }
}

export default Current