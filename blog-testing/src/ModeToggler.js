function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <div style={{backgroundColor: 'black', color: 'white', padding: '10px'}}>Dark Mode</div>;
    const lightMode = <div style={{backgroundColor: 'white', color: 'black', padding: '10px'}}>Light Mode</div>;
    let display = lightMode || darkMode;

    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
            console.log("Dark mode is on");
        } else {
            console.log("Light mode is on");
        }
    }
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
           display = darkMode;
        }else {
            display = lightMode;    
        }
    
return (
    <div>
        {display}
        <button onClick={handleClick} style={{marginTop: '10px'}}>
            Toggle Mode 
            </button>
    </div>
);
}

export default ModeToggler;