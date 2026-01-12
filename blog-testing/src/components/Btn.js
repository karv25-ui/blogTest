function Btn () {
    const handleClick = () => {
        alert("Let's get started!");
    }
    return (
        <button onClick={handleClick}>
           <a href="./Articles">Click Me!</a>
            </button>
    );
}

export default Btn;