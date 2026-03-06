import { Route, Routes, Link } from 'react-router-dom';
/*import { useNavigate } from 'react-router-dom'; */
import About from './About.js';
import Articles from '../ui/Articles.js';

function Nav() {
  /* const navigate = useNavigate(); // Hook to programmatically navigate to different routes
    navigate('/App'); // Navigate to the '/App' route when the component is rendered // Note: This will cause a navigation to '/App' every time this component is rendered, which may not be the intended behavior. Consider using this inside an event handler or useEffect hook instead.
    */
  
  return (
        <nav className="main-nav">
            {/* Navigation bar for the blog application */} 
            <ul className="nav-list">
                {/* Navigation links (Each link directs to a specific page) */}
                <li><Link to="/">Back to Home</Link></li>
                <li><Link to="../ui/Articles">Articles</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* Additional navigation items can be added here */}
            </ul>
            <Routes>
                {/* Define routes for the navigation links */}
                <Route path="/" />
                <Route path="/About" element={<About />} />
                <Route path="../ui/Articles" element={<Articles />} />
               
                {/* Additional routes can be defined here */}
            </Routes>
        </nav>
    );
};

export default Nav;

/*
    Important Notes/Comments:
    - I may be missing some context about how this Nav component is integrated into the larger application.
    - The use of `navigate('/App')` will cause a navigation to the '/App' route every time this component is rendered, which may not be the intended behavior.
    - Ensure that the routes defined in the `Routes` component match the actual paths used in the application.
    - The useNavigate hook wasn't used properly initially, the way I was implementing it would cause an infinite loop of navigation. 
    It should be used inside an event handler or a useEffect hook to avoid this issue.
    - I set up my syntax so that I can easily route to the Articles & About pages, but it feels like theres something missing. I may need to adjust the paths or the way I'm structuring my routes to ensure that they work correctly with the navigation links.
    - I should also consider adding error handling for undefined routes (e.g., a 404 page) to improve the user experience when navigating to non-existent pages.
    - Overall, the Nav component is a crucial part of the application's navigation structure, and it's important to ensure that it is implemented correctly to provide a seamless user experience.
    - Once this gets resolved, I can move on to implementing the Contact page and any additional features or pages that are needed for the blog application.
    - Not sure what I can do to make this work, but I will continue to troubleshoot and seek guidance as needed to ensure that the navigation functionality is working as intended.
*/