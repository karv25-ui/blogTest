import { Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import App from '../App';

function Nav(props) {
    const navigate = useNavigate(); // Hook to programmatically navigate to different routes
    navigate('/App'); // Navigate to the '/App' route when the component is rendered

    return (
        <navbar className="main-nav">
            {/* Navigation bar for the blog application */} 
            <ul>
                {/* Navigation links (Each link directs to a specific page) */}
                <li><Link to="/">Back to Home</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* Additional navigation items can be added here */}
            </ul>
            <Routes>
                {/* Define routes for the navigation links */}
                
               
                {/* Additional routes can be defined here */}
            </Routes>
        </navbar>
    );
};

export default Nav;

{/*
    Important Notes/Comments:
    - I may be missing some context about how this Nav component is integrated into the larger application.
    - The use of `navigate('/App')` will cause a navigation to the '/App' route every time this component is rendered, which may not be the intended behavior.
    - Ensure that the routes defined in the `Routes` component match the actual paths used in the application.
*/}