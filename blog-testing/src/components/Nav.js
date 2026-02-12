import { Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import App from '../App';

function Nav(props) {
    const navigate = useNavigate(); // Hook to programmatically navigate to different routes
    navigate('/App'); // Navigate to the '/App' route when the component is rendered

    return (
        <navbar className="main-nav">
            {/* Navigation bar for the blog application */} 
            <tr>
                {/* Navigation links (Each link directs to a specific page) */}
                <td><Link to="/App">Back to Home</Link></td>
                <td><Link to="/articles">Articles</Link></td>
                <td><Link to="/about">About</Link></td>
                <td><Link to="/contact">Contact</Link></td>
                {/* Additional navigation items can be added here */}
            </tr>
            <Routes>
                {/* Define routes for the navigation links */}
                <Route path="/App" element={<App />} />
               
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