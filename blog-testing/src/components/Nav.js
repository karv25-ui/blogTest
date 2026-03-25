import { Link, useLocation } from 'react-router-dom';


function Nav() {
  const location = useLocation();

  // Helper to highlight the active link
  const isActive = (path) => location.pathname === path;

 

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li>
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/articles" className={isActive('/articles') ? 'active' : ''}>
            Articles
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

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
    - I'm looking at the inspect developer tools to see if there are any errors or issues with the routing that could be causing the navigation to not work properly. I will also check the console for any error messages that might provide clues about what is going wrong.
    It states that the path is not found & also the route is not matched, which suggests that there may be an issue with how the routes are defined or how the navigation links are structured. I will review the code to ensure that the paths in the `Link` components match the paths defined in the `Route` components, and that there are no typos or mismatches that could be causing the routing to fail.
*/