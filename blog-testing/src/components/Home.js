import { Routes, Route, /*NavLink*/ Link } from 'react-router-dom';
import About from './About';
import Articles from '../ui/Articles';


export default function Home() {
    return (
        <>
        <div>
          
        </div>
        {/*
        <NavLink to="/Home" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/Articles" className={({ isActive }) => (isActive ? 'active' : '')}>
          Articles
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
        */}
        {/*<Link to="/Home"><h3>Home</h3></Link>
        <Link to="/About"><h3>About</h3></Link>
        <Link to="../ui/Articles"><h3>Articles</h3></Link>
        <Link to="/Contact"><h3>Contact</h3></Link>

        <Routes>
          <Route path="/Home" element={<h1>Welcome to the Home Page!</h1>} />
          <Route path="/About" element={<About />} />
          <Route path="../ui/Articles" element={<Articles />} />
          <Route path="/Contact" element={<h1>Get in touch with us on the Contact page.</h1>} />
        </Routes> */}
        </>
    );
} 
    