import { state } from react;

function LightSwitch() {
const [lightOn, setLightOn] = React.useState(false);

function handleClick() {
    setLightOn(true);
    }
    const toggleLight = () => {
    setLightOn(prev => !prev);
    }

return (
<div> 
    <button onClick={toggleLight}
</div> 
);