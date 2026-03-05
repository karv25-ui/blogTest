import { Route, Routes, Link } from 'react-router-dom';
import Articles from '../ui/Articles';

function Btn () {
    const handleClick = () => {
        alert("Let's get started!");
    }
    return (
        /* On click of the button, an alert box should pop up with the message
         "Let's get started!" That will redirect you to the articles page */
    <>
        <button onClick={handleClick}>
           <Link to="../Articles">Click Me!</Link>
            </button>
            <Routes>
                <Route path="../Articles" element={<Articles />} />
            </Routes>
    </>
    );
}

export default Btn;