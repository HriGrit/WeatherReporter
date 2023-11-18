import React from 'react'

export function UnixtoTime(unixTimestamp) {
    // Create a new Date object with the Unix timestamp
    const date = new Date(unixTimestamp * 1000); // Unix timestamp is in seconds, JavaScript Date object uses milliseconds

    // Extract the hours, minutes, and seconds from the Date object
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Format the time in hh:mm:ss format
    return `${hours}:${minutes}:${seconds}`;
}