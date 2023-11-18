import React, { useState } from 'react';

const DateSelector = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="flex flex-col pt-8">
            <label htmlFor="date-picker" className="block text-sm font-medium text-gray-700 text-left">
                Select Date:
            </label>
            <input
                type="date"
                id="date-picker"
                name="date-picker"
                className="mt-1 block w-full px-3 py-2 bg-stone-400/20 border border-[#464646] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedDate}
                onChange={handleDateChange}
            />
            {/* {selectedDate && <p className="text-sm text-gray-600 mt-2">Selected Date: {selectedDate}</p>} */}
        </div>
    );
};

export default DateSelector;
