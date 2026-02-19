import { useState } from 'react';

function LightSwitch () {
    const [lightOn, setLightOn] = useState(false);
    
    const toggleLight = () => {
        setLightOn(prev => !prev);
    }

    return (
        <div className={lightOn ? 'light-on' : 'light-off'}>
    <div className="light-switch">
   <div className={`bulb ${lightOn ? 'on' : 'off'}`}>
    <div className="bulb-filament"></div>
    </div>
    <div className="bulb-glass"></div>
    <div className="bulb-base"></div>
</div>
    <div className="controls">
   <button onClick={toggleLight}>
       Light {lightOn ? 'Turn Off' : 'Turn On'}
    </button>
    </div>
    </div>
    );
}

export default LightSwitch;