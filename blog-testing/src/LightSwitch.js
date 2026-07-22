import { useState } from 'react';

function LightSwitch() {
  const [lightOn, setLightOn] = useState(false);

function handleClick() {
    setLightOn(true);
    }
    const toggleLight = () => {
    setLightOn(prev => !prev);
    }

return (
<div> 
    <p>{lightOn ? 'ON' : 'OFF'}</p>
    <button onClick={toggleLight}>
    Toggle Light 
    </button>
    <button onClick={handleClick}>
        Turn ON
    </button>
    </div> 
);}

export default LightSwitch;