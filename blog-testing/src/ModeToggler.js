/*Figure out why this code does not toggle between dark mode and light mode when the button is clicked.
 Fix the code so that it works as intended.*/
/*A state management solution is needed to make this work?
 Possibly a useState hook?*/
function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <div style={{backgroundColor: 'black', color: 'white', padding: '10px'}}>Dark Mode</div>;
    const lightMode = <div style={{backgroundColor: 'white', color: 'black', padding: '10px'}}>Light Mode</div>;
    let display = lightMode || darkMode;
/* On click of the button, the mode should toggle between dark mode and light mode on the whole page*/
    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
            console.log("Dark mode is on");
        } else {
            console.log("Light mode is on");
        }
    }
       /* darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
           display = darkMode;
        }else {
            display = lightMode;    
        } /*This part is not working as intended*/
    
return (
    <div>
        {display}
        <button onClick={handleClick} style={{marginTop: '10px'}}>
            Toggle Mode {darkModeOn ? 'Light' : 'Dark' }
            </button>
    </div>
);
}

export default ModeToggler;