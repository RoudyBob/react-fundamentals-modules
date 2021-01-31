import React, {useState, useEffect} from 'react';

const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
const remoteTZ = "Asia/Tokyo"

const getTimeString = (locale, options) => {
    const date = new Date(Date.now()).toLocaleTimeString(locale, options);
    return date;
}


const ClockApp = () => {

    const [localTime, setLocalTime] = useState(getTimeString('en-US', {timeZone: localTZ}));
    const [remoteTime, setRemoteTime] = useState(getTimeString('en-US', {timeZone: remoteTZ}));

    useEffect(() => {
        const interval = setInterval(() => {
            let localDate = getTimeString();
            let remoteDate = getTimeString('en-US', {timeZone: remoteTZ});
            setLocalTime(localDate);
            setRemoteTime(remoteDate);
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <p>{localTZ} - {localTime}</p>
            <p>{remoteTZ} - {remoteTime}</p>
        </div>
    );
};

export default ClockApp;