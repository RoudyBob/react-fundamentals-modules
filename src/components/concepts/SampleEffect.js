// Initially I had been creating child components in their own files but it doesn't look
// like you have to do that. You can have multiple components in the same file. See the
// Effects.js file.

import React from 'react';
import {useState} from 'react';

const SampleEffect = () => {

    const [timerRunning, setTimerRunning] = useState(false);

    return (
        <div style={{border: '1px dashed black'}}>
            <h2>This component demos an effect.</h2>
            <button>Click me to start an effect in the console.</button>
        </div>
    );
};

export default SampleEffect;