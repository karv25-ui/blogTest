function Btn () {
    const handleClick = () => {
        alert("Let's get started!");
    }
    return (
        /* On click of the button, an alert box should pop up with the message
         "Let's get started!" That will redirect you to the articles page */
        <button onClick={handleClick}>
           <a href="./Articles">Click Me!</a>
            </button>
    );
}

export default Btn;