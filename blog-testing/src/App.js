import blog from './blog.png';
import './App.css';
import Btn from './components/Btn';
import ModeToggler from './ModeToggler';
import LightSwitch from './LightSwitch';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Articles from './ui/Articles';
import { Route, Routes } from 'react-router-dom';
import NavMenu  from './components/NavItems'

function App() {
  const time = new Date();
  const day = time.toLocaleString("en-US", { weekday: "long" });
  const hours = time.getHours();
  const morning = hours >= 6 && hours < 12;
  const afternoon = hours >= 12 && hours < 18;
  const evening = hours >= 18 && hours < 24;

  let dayMessage;
  if (day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}! Start your week off with a smile!`;
  } else if (day.toLowerCase() === "friday") {
    dayMessage = `Happy ${day}! The weekend is finally here!`;
  } else {
    dayMessage = `It's ${day}! Have a great day!`;
  }

  return (
    <div className="Blog">

      {/* ✅ Nav is OUTSIDE Routes — always visible on every page */}
      <header className="Blog-header">
        <img src={blog} className="blog-logo" alt="logo" />
        <h1>{dayMessage}</h1>
        <h2>{morning ? "Good morning!" : afternoon ? "Good afternoon!" : evening ? "Good evening!" : "Hello!"}</h2>
        <h3>Scroll for more content!</h3>
      </header>

  <Nav />
  <NavMenu />

      {/* ✅ All routes defined in ONE place */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<div><h2>Contact Page</h2></div>} />
      </Routes>

      <div>
        <Btn />
        <ModeToggler />
        <LightSwitch />
      </div>
    </div>
  );
}

export default App;