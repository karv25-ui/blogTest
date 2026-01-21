import React from 'react';
function LightSwitch () {
    const [LightOn, setLightOn] = React.useState(false);
    
    const toggleLight = () => {
        setLightOn(prev => !prev);
    }
   <div className={`light-switch ${LightOn ? 'on' : 'off'}`}>
   <button onClick={toggleLight}>
       Light {LightOn ? 'Turn Off' : 'Turn On'}
    </button>
    </div>
}

export default LightSwitch;