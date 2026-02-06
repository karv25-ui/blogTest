import blog from './blog.png';
import './App.css';
import Btn from './components/Btn';
import ModeToggler from './ModeToggler';
import LightSwitch from './LightSwitch';
import Nav from './components/Nav';
import { Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  navigate('/Nav');

  return (
    <>
    <div className="Blog">
      <header className="Blog-header">
        <img src={blog} className="blog-logo" alt="logo" />
        <a
          className="Blog-link"
          href="./Nav.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Welcome to my Blog Testing!</h1>
        </a>
      </header>
      <nav>
        <Link to="/Nav">Go to Nav</Link>
        <Routes>
          <Route path="/Nav" element={<Nav />} />
        </Routes>
        </nav>
      <Btn />
      <ModeToggler />
      <LightSwitch LightSwitch={LightSwitch} />
    </div>
        </>
  );
}

export default App;
